"use client";
import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import CategoriesTabs from "@/components/blog/CategoriesTabs";
import CategorySkeleton from "@/components/skeleton/blogsSkeleton/CategorySkeleton";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";

const sortOptions = ["Newest", "Oldest", "A-Z", "Z-A"];

export default function BlogsMainPage() {
  const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useFetchCategories();
  const { data: blogs, isLoading: blogsLoading, error: blogsError } = useFetchBlogs();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");



  const handleCategoryClick = (category) => {
    if (category !== selectedCategory) setSelectedCategory(category);
  };



  return (
    <div className="max-w-[1480px] mx-auto mt-20 mb-36 px-4">
      <h1 className="text-5xl font-bold text-center text-[var(--text)] mb-10">
        All Blog Posts
      </h1>
      <div className="flex items-center justify-center gap-6">
          {/* Category Tabs */}
           {categoriesLoading || blogsLoading ? <CategorySkeleton style="justify-center mb-4" /> :  <CategoriesTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategoryClick}
        style="justify-center"
      /> }
     

      {/* Sort Options */}
      <div className="flex justify-self-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-[var(--border-blur)] rounded-lg px-4 py-2 text-[var(--text)] bg-transparent focus:outline-none"
        >
          {sortOptions.map((option) => (
            <option key={option} value={option} className="text-black">
              Sort by {option}
            </option>
          ))}
        </select>
      </div>
      </div>
      
      
     

      {/* Blog Cards */}
      {/* <div className="flex flex-wrap gap-6 justify-center">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              date={blog.publishedAt || blog.createdAt}
              description={blog.content.slice(0, 95) + "..."}
              category={blog.category}
              image={blog.image}
              author={blog.authorName}
              author_img={blog.author_img}
              likes={blog.likes}
              pinned={blog.pinned}
            />
          ))
        ) : (
          <p className="text-3xl text-[var(--text)] capitalize">
            No blogs found in this category.
          </p>
        )}
      </div>  */}
    </div>
  );
}

// import React from 'react'

// function BlogsPage() {
//   return (
//     <div>page</div>
//   )
// }

// export default BlogsPage;
