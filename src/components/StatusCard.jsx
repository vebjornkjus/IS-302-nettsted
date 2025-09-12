import React from 'react'

const StatusCard = ({ post, isExpanded, onToggle }) => {
  return (
    <div className={`modern-card rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 ${
      isExpanded ? 'min-h-[400px]' : 'h-60'
    }`}>
      <div className="p-5 h-full flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-light-800 dark:text-neutral-300">{post.date}</span>
          <div className="flex flex-wrap gap-1">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-1 bg-gradient-capgemini-subtle text-black dark:text-white text-xs rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-base font-semibold mb-2 text-light-900 dark:text-neutral-100">{post.title}</h3>

        <div className="mt-2 flex-1 flex flex-col">
          <p className="text-light-800 dark:text-neutral-300 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-light-300 dark:border-neutral-700/60 flex-1">
              <p className="text-light-800 dark:text-neutral-300 text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>
          )}
        </div>

        <button onClick={onToggle} className="mt-3 text-capgemini-400 hover:text-capgemini-300 font-medium text-sm flex items-center gap-1 transition-colors">
          {isExpanded ? (
            <>
              <span>Vis mindre</span>
              <svg className="w-4 h-4 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              <span>Les mer</span>
              <svg className="w-4 h-4 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default StatusCard
