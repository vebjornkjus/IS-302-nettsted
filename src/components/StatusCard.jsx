import React from 'react'

const StatusCard = ({ post, isExpanded, onToggle }) => {
  return (
    <div className="modern-card rounded-lg shadow-xl overflow-hidden self-start">
      <div className="p-6">
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
        <h3 className="text-lg font-semibold mb-3 text-light-900 dark:text-neutral-100">{post.title}</h3>
        <p className="text-light-800 dark:text-neutral-300 mb-4">{post.excerpt}</p>
        <button onClick={onToggle} className="text-capgemini-400 hover:text-capgemini-300 font-medium text-sm">
          {isExpanded ? 'Vis mindre' : 'Les mer'}
        </button>
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-light-300 dark:border-neutral-700">
            <p className="text-light-800 dark:text-neutral-300">{post.content}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default StatusCard