# Praksis 2025 – Vebjørn & Kristian

En moderne og profesjonell nettside for vår praksisgruppe som fungerer som en presentasjon av prosjektet vårt og brukes til å rapportere status til UiA, Capgemini og andre studenter.

## Om prosjektet

Vi utvikler en innovativ app som oppfordrer Capgemini-ansatte til å ta trappa i stedet for heisen, med fokus på:

- UX-eksperimenter og brukersentrert design
- Nudging-mekanismer for motivasjon
- Enkle analyser og datasporing
- Kontinuerlig statusrapportering

## Teknologi

- **React** - Frontend framework
- **Vite** - Build tool og development server
- **Tailwind CSS** - Styling og design system
- **React Router** - Navigasjon mellom sider

## Kom i gang

### Forhåndskrav

- Node.js (versjon 20.9.0 eller nyere)
- npm

### Installasjon

1. Klon repositoriet:
```bash
git clone [repository-url]
cd IS-302-nettsted
```

2. Installer avhengigheter:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Nettsiden vil være tilgjengelig på `http://localhost:5173/`

### Bygge for produksjon

```bash
npm run build
```

### Forhåndsvise produksjonsversjon

```bash
npm run preview
```

## Struktur

Nettsiden består av følgende sider:

- **Hjem** - Hero-seksjon og introduksjon
- **Hva vi gjør** - Beskrivelse av oppgaven og hovedfokus
- **Status** - Statusoppdateringer med filtering
- **Team** - Presentasjon av teammedlemmer
- **Kontakt** - Kontaktskjema og informasjon

## Designsystem

- **Fargepalett**: Blå og lilla gradienter for teknologisk preg
- **Responsivt design**: Fungerer på både mobil og desktop
- **Moderne UI**: Avrundede hjørner, myke skygger, tydelig typografi

## Utvikling

### Redigere innhold

Innholdet på nettsiden kan enkelt endres ved å:

1. **Tekster**: Rediger direkte i komponentene i `src/App.jsx`
2. **Statusoppdateringer**: Legg til nye poster i `statusPosts` array
3. **Teammedlemmer**: Oppdater `teamMembers` array
4. **Styling**: Tilpass i Tailwind CSS klasser eller `tailwind.config.js`

### Komponentstruktur

Alle komponenter er definert i `src/App.jsx` for enkel oversikt:

- `Header` - Navigasjon
- `Footer` - Bunntekst med lenker
- `Home` - Hovedside
- `HvaViGjor` - Om prosjektet
- `Status` - Statusoppdateringer
- `StatusCard` - Individuelle statusposter
- `Team` - Team-oversikt
- `TeamMember` - Individuelle teammedlemmer
- `Kontakt` - Kontaktside
- `ContactForm` - Kontaktskjema

## Kontakt

For spørsmål eller tilbakemeldinger, send e-post til: praksis2025@student.uia.no