'use client';

/**
 * BlogCardSkeleton - Premium shimmer skeleton matching BlogCard structure
 * Supports variant prop: 'default' | 'featured'
 */

export default function BlogCardSkeleton({ variant = 'default' }) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`relative w-full bg-[var(--bg-blur)] backdrop-blur-[15px] border border-[var(--border-blur)] 
      rounded-2xl shadow-md shadow-white/10 overflow-hidden ${
        isFeatured ? "max-w-[420px]" : "max-w-[350px]"
      }`}
    >
      {/* Image */}
      <div className={`w-full ${isFeatured ? "h-[320px]" : "h-[280px]"} rounded-t-2xl bg-gray-200 dark:bg-gray-300 animate-pulse`} />

      {/* Category + Date */}
      <div className="flex items-center justify-between px-3 mt-4 mb-3">
        <div className="h-6 w-24 rounded-full bg-gray-200 dark:bg-gray-300 animate-pulse" />
        <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-300 animate-pulse" />
      </div>

      {/* Title */}
      <div className="px-3 mb-2 space-y-2">
        <div className="h-6 w-full rounded bg-gray-200 dark:bg-gray-300 animate-pulse" />
      </div>

      {/* Description */}
      <div className="px-3 mb-4 space-y-2">
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-300 animate-pulse" />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 px-3 mb-3">
        <div className="h-8 w-12 rounded-full bg-gray-200 dark:bg-gray-300 animate-pulse" />
        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-300 animate-pulse" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-[var(--border-blur)]">
        <div className="h-9 w-24 rounded-full bg-gray-200 dark:bg-gray-300 animate-pulse" />

        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-300 animate-pulse" />
          <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-300 animate-pulse" />
        </div>
      </div>
    </article>
  );
}