// src/pages/Spill.jsx
import React, { useRef, useEffect, useState } from "react";

export default function Spill() {
  const canvasRef = useRef(null);

  // Synlig UI
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() =>
    Number(localStorage.getItem("bestScore") || 0)
  );
  const [gameOver, setGameOver] = useState(false);

  // Interne refs (unngå re-runs og stale closures)
  const gameOverRef = useRef(false);
  const scoreRef = useRef(0);
  const bestRef = useRef(Number(localStorage.getItem("bestScore") || 0));
  const restartTimeoutRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let rafId;

    // --- Spiller ---
    const player = {
      x: 90,
      y: 240,
      size: 20,
      velY: 0,
      onGround: false,
    };

    // --- Fysikk / kontroll ---
    const gravity = 0.6;
    const jumpPower = -10;
    const maxJumps = 2;
    const jumpCountRef = useRef(0);
    const coyoteTimeMs = 120;
    let lastGroundedAt = Date.now();

    // Partikkel-støv ved landing
    let particles = [];

    // --- Parallax bakgrunn ---
    const bgLayers = [
      { speed: 0.4, color: "#eef2ff", bands: [] },
      { speed: 0.8, color: "#e2e8f0", bands: [] },
    ];
    const initBands = (layer) => {
      const bandH = 30;
      for (let i = 0; i < 12; i++) {
        layer.bands.push({
          x: i * 120,
          y: 60 + Math.sin(i * 0.7) * 20 + (layer.speed > 0.5 ? 60 : 0),
          w: 120,
          h: bandH,
        });
      }
    };
    bgLayers.forEach(initBands);

    // --- Trapper (plattformer) ---
    let stairs = [];
    const basePlatforms = [
      { x: 0, y: 320, w: 260, h: 16, speed: 1.8 },
      { x: 260 + 120, y: 270, w: 240, h: 16, speed: 1.9 },
      { x: 260 + 120 + 240 + 120, y: 220, w: 240, h: 16, speed: 2.0 },
      { x: 260 + 120 + 240 + 120 + 240 + 120, y: 180, w: 240, h: 16, speed: 2.1 },
    ].map((p, i) => ({ ...p, id: i + 1 }));

    // --- Mynter ---
    let coins = []; // {x,y,r,vy,platformId,active}
    const coinChance = 0.6; // 60% sjanse ved ny plattform
    const coinValue = 3;

    // Kollisjonsmargin for litt snillere landing
    const landingTolerance = 2; // px

    // Score-hjelp (ny landing på ny plattform)
    let lastPlatformScoredId = null;

    const clearRestartTimeout = () => {
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = null;
      }
    };

    const reset = () => {
      clearRestartTimeout();

      // Spiller
      player.x = 90;
      player.y = 240;
      player.velY = 0;
      player.onGround = false;
      jumpCountRef.current = 0;
      lastGroundedAt = Date.now();

      // Plattformene
      stairs = basePlatforms.map((p) => ({ ...p }));

      // Mynter
      coins = [];

      // Score
      lastPlatformScoredId = null;
      scoreRef.current = 0;
      setScore(0);

      // Partikler
      particles = [];

      // Game over
      gameOverRef.current = false;
      setGameOver(false);
    };

    // Ny plattform-konfig: Kontrollerte avstander
    // Vi sørger for at plattformer kommer ofte nok og ikke for store høydeforskjeller
    const config = {
      minGapX: 90,  // min hor. mellomrom fra forrige plattform ende
      maxGapX: 160, // maks hor. mellomrom
      minY: 120,
      maxY: 340,
      maxDeltaY: 70, // maks endring i høyde fra forrige plattform
      minW: 200,
      maxW: 300,
      minSpeed: 1.8,
      maxSpeed: 2.2,
    };

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const respawnPlatform = (s, i) => {
      const farthestX = Math.max(...stairs.map((p) => p.x + p.w));
      const gap = config.minGapX + Math.random() * (config.maxGapX - config.minGapX);
      s.x = farthestX + gap;

      const prevY = stairs[(i - 1 + stairs.length) % stairs.length].y;
      let ny = prevY + (Math.random() * 2 - 1) * config.maxDeltaY;
      ny = clamp(ny, config.minY, config.maxY);
      s.y = ny;

      s.speed = config.minSpeed + Math.random() * (config.maxSpeed - config.minSpeed);
      s.w = config.minW + Math.floor(Math.random() * (config.maxW - config.minW));

      // Spån en mynt over plattformen noen ganger
      if (Math.random() < coinChance) {
        coins.push({
          x: s.x + s.w / 2,
          y: s.y - 28,
          r: 7,
          vy: 0.5,
          platformId: s.id,
          active: true,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Dobbelthopp + coyote time
    const canJumpNow = () => {
      const withinCoyote =
        !player.onGround && Date.now() - lastGroundedAt <= coyoteTimeMs;
      return (
        player.onGround || withinCoyote || jumpCountRef.current < maxJumps
      );
    };

    const doJump = () => {
      // Juster teller:
      // Hvis på bakken → start ny hopprekke
      if (player.onGround) {
        jumpCountRef.current = 0;
      }
      // Tillat første hopp under coyote
      if (canJumpNow()) {
        player.velY = jumpPower;
        player.onGround = false;
        jumpCountRef.current += 1;
      }
    };

    // Input
    const onKeyDown = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        doJump();
        e.preventDefault();
      }
      if (e.code === "KeyR" && gameOverRef.current) {
        reset();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    const onTouch = (e) => {
      e.preventDefault();
      if (gameOverRef.current) {
        reset();
      } else {
        doJump();
      }
    };
    canvas.addEventListener("touchstart", onTouch, { passive: false });

    // Init
    reset();

    // Hjelpefunksjoner for effekter
    const spawnLandingDust = (x, y) => {
      for (let i = 0; i < 10; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 1.5,
          life: 20 + Math.random() * 10,
        });
      }
    };

    const updateParticles = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.life -= 1;
      });
      particles = particles.filter((p) => p.life > 0);
    };

    const drawParticles = () => {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      particles.forEach((p) => {
        ctx.fillRect(p.x, p.y, 2, 2);
      });
    };

    const loop = () => {
      // Oppdater
      if (!gameOverRef.current) {
        // Parallax bakgrunn
        bgLayers.forEach((layer) => {
          layer.bands.forEach((b) => {
            b.x -= layer.speed;
            if (b.x + b.w < 0) {
              b.x += 120 * layer.bands.length;
            }
          });
        });

        // Fysikk
        player.velY += gravity;
        player.y += player.velY;
        player.onGround = false;

        // Flytt trapper
        for (let i = 0; i < stairs.length; i++) {
          const s = stairs[i];
          s.x -= s.speed;
          if (s.x + s.w < -80) {
            respawnPlatform(s, i);
          }
        }

        // Flytt mynter (følg plattform-ish, men litt svev)
        coins.forEach((c) => {
          // Finn plattformen mynten hører til, slik at hastigheten matcher omtrent
          const p = stairs.find((s) => s.id === c.platformId);
          const vx = p ? p.speed : 2;
          c.x -= vx;
          c.phase += 0.1;
          c.y += Math.sin(c.phase) * 0.6 + c.vy;
          if (c.x < -20) c.active = false;
        });
        coins = coins.filter((c) => c.active);

        // Kollisjon top-landing
        stairs.forEach((s) => {
          const px1 = player.x;
          const px2 = player.x + player.size;
          const py1 = player.y;
          const py2 = player.y + player.size;

          const sx1 = s.x;
          const sx2 = s.x + s.w;
          const sy = s.y;

          const horizontallyOverlapping = px2 > sx1 && px1 < sx2;
          const isFalling = player.velY >= 0;
          const crossesTop =
            py2 >= sy - landingTolerance && py1 < sy - landingTolerance;

          if (horizontallyOverlapping && isFalling && crossesTop) {
            player.y = sy - player.size;
            player.velY = 0;

            if (!player.onGround) {
              // Ny landing - score 1
              if (lastPlatformScoredId !== s.id) {
                lastPlatformScoredId = s.id;
                scoreRef.current += 1;
                setScore(scoreRef.current);
              }
              // landing-effekt og reset hopp
              spawnLandingDust(player.x + player.size / 2, sy);
              jumpCountRef.current = 0;
            }

            player.onGround = true;
            lastGroundedAt = Date.now();
          }
        });

        // Samle mynter (cirkel-til-rektangel)
        coins.forEach((c) => {
          const closestX = clamp(player.x + player.size / 2, c.x - c.r, c.x + c.r);
          const closestY = clamp(player.y + player.size / 2, c.y - c.r, c.y + c.r);
          const dx = (player.x + player.size / 2) - closestX;
          const dy = (player.y + player.size / 2) - closestY;
          if (dx * dx + dy * dy <= c.r * c.r) {
            c.active = false;
            scoreRef.current += coinValue;
            setScore(scoreRef.current);
            spawnLandingDust(c.x, c.y);
          }
        });
        coins = coins.filter((c) => c.active);

        // GAME OVER – falt under
        if (player.y > canvas.height + 10) {
          gameOverRef.current = true;
          setGameOver(true);

          // Bestscore
          if (scoreRef.current > bestRef.current) {
            bestRef.current = scoreRef.current;
            setBest(bestRef.current);
            localStorage.setItem("bestScore", String(bestRef.current));
          }

          // Auto-restart etter 1.2s (kan også trykke R)
          restartTimeoutRef.current = setTimeout(() => {
            if (gameOverRef.current) {
              reset();
            }
          }, 1200);
        }

        updateParticles();
      }

      // --- TEGN ---
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Bakgrunn
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Parallax bånd
      bgLayers.forEach((layer) => {
        ctx.fillStyle = layer.color;
        layer.bands.forEach((b) => ctx.fillRect(b.x, b.y, b.w, b.h));
      });

      // Trapper
      ctx.fillStyle = "#475569";
      stairs.forEach((s) => ctx.fillRect(s.x, s.y, s.w, s.h));

      // Mynter
      coins.forEach((c) => {
        // enkel gullmynt
        ctx.beginPath();
        ctx.fillStyle = "#f59e0b";
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.arc(c.x, c.y, c.r - 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
      });

      // Spiller
      ctx.fillStyle = "#0070f3";
      ctx.fillRect(player.x, player.y, player.size, player.size);

      // Partikler
      drawParticles();

      // UI
      ctx.fillStyle = "#0f172a";
      ctx.font = "16px Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial";
      ctx.fillText(`Trapper: ${scoreRef.current}`, 12, 22);
      ctx.fillText(`Best: ${bestRef.current}`, 12, 42);
      ctx.fillText(
        `Jumps: ${Math.max(0, maxJumps - jumpCountRef.current)} / ${maxJumps}`,
        12,
        62
      );

      // Game Over overlay
      if (gameOverRef.current) {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 28px Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial";
        ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2 - 6);
        ctx.font = "16px Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial";
        ctx.fillText(
          `Du landet på ${scoreRef.current} trapper`,
          canvas.width / 2 - 90,
          canvas.height / 2 + 20
        );
        ctx.fillText(
          "Trykk R (eller vent) for å starte på nytt",
          canvas.width / 2 - 160,
          canvas.height / 2 + 44
        );
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      canvas.removeEventListener("touchstart", onTouch);
      if (rafId) cancelAnimationFrame(rafId);
      if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-2">🪜 Hopp opp trappene!</h1>
      <p className="mb-4 text-sm text-light-800">
        Space/↑ for å hoppe (dobbelthopp) • Trykk R ved Game Over
      </p>

      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="border border-light-300 bg-white rounded"
      />

      <div className="mt-4 text-sm text-light-800">
        <span className="font-semibold">Tips:</span> Du har{" "}
        <span className="font-semibold">coyote time</span> (liten nådetid) og{" "}
        <span className="font-semibold">dobbelthopp</span>. Samle mynter for bonus!
      </div> 
    </div>
  );
}