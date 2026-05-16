import BlogCardSkeleton from "@/components/skeleton/blogsSkeleton/BlogCardSkeleton";

function BlogCardSkeletonGroup(style) {
  return (
    <div className={`flex flex-wrap gap-4 ${style} items-center`}   >
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
    </div>
  )
}

export default BlogCardSkeletonGroup