"use client";
import CategoriesTabs from "@/components/blog/CategoriesTabs";
import BlogCard from "@/components/blog/BlogCard";
import CategorySkeleton from "@/components/skeleton/blogsSkeleton/CategorySkeleton";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";
import { useState, useCallback } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import BlogCardSkeletonGroup from "../skeleton/blogsSkeleton/BlogCardSkeletonGroup";

function LatestBlogSection() {
    const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useFetchCategories();
    const { data: blogs, isLoading: blogsLoading, error: blogsError } = useFetchBlogs();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredBlogs = selectedCategory !== "All" ? blogs?.filter(blog => blog.category["en"] === selectedCategory) : blogs;
    const handleCategoryClick = useCallback((category) => {
        if (category !== selectedCategory) setSelectedCategory(category);
    }, [selectedCategory]);

    if (!categoriesLoading && (!categories || categories.length === 0)) {
        return <p className="text-center mt-4 mb-20">No categories found</p>;
    }
    if (categoriesError) return <p className="text-center mt-4 mb-20">Can&#39;t load categories</p>;
    if (!blogsLoading && (!blogs || blogs.length === 0)) {
        return <p className="text-center mt-4 mb-20">No blogs found</p>;
    }
    if (blogsError) return <p className="text-center mt-4 mb-20">Can&#39;t load blogs</p>;
    console.log(categories, blogs, filteredBlogs);
    return (
        <div className="max-w-[var(--max-width)] justify-center items-center">
            {categoriesLoading || blogsLoading ? <CategorySkeleton style="justify-center mb-4" /> : <CategoriesTabs style="justify-center mb-6" categories={categories} selectedCategory={selectedCategory} onCategorySelect={handleCategoryClick} />}
            <div className="flex flex-wrap gap-4 justify-center items-center">
                {blogsLoading ? 
                <div className="w-full flex flex-wrap gap-4 justify-center items-center">
                    <BlogCardSkeletonGroup />
                    </div> : filteredBlogs?.length > 0 ? (
                    filteredBlogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            id={blog._id}
                            title={blog.title}
                            content={blog.content}
                            createdAt={blog.createdAt}
                            description={blog.description}
                            category={blog.category}
                            image={blog.image}
                            authorName={blog.authorName}
                            authorImage={blog.authorImage}
                            likes={blog.likes}
                            pinned={blog.pinned}
                            path={`/dashboard/blogs/${blog._id}`}
                        />
                    ))
                ) : (
                    <p className="text-center mt-4 mb-20">No blogs found</p>
                )}
            </div>
            <div className="flex items-center justify-center mt-10 mb-20">
                <ButtonLink href="/blogs" className="px-6 py-2 bg-[var(--bg-white)] text-[var(--black-text)] rounded-lg hover:bg-[var(--bg-black)] hover:text-[var(--white-text)] border border-[var(--white-border)] transition-all duration-300">
                    View All Blogs
                </ButtonLink>
            </div>
        </div>
    );
}

export default LatestBlogSection;
