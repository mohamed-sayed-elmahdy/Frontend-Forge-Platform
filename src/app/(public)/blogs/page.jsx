"use client";
import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import CategoriesTabs from "@/components/blog/CategoriesTabs";
import CategorySkeleton from "@/components/skeleton/blogsSkeleton/CategorySkeleton";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";


const sortOptions = ["Newest", "Oldest", "A-Z", "Z-A"];

export default function BlogsMainPage() {
  const { data: categories = [], isLoading: categoriesLoading, error: categoriesError } = useFetchCategories();
  const { data: blogs = [], isLoading: blogsLoading, error: blogsError } = useFetchBlogs();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const filteredBlogs = useMemo(() => {
    if (categoriesError || blogsError || categoriesLoading || blogsLoading) {
      return [];
    }
    let filtered =
      selectedCategory === "All"
        ? [...blogs]
        : blogs.filter((blog) => blog.category["en"] === selectedCategory);

    switch (sortBy) {
      case "Newest":
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Oldest":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "A-Z":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    return filtered;
  }, [selectedCategory, sortBy, blogs, categoriesError, blogsError, categoriesLoading, blogsLoading]);

  const handleCategoryClick = (category) => {
    if (category !== selectedCategory) setSelectedCategory(category);
  };



  return (
    <div className="max-w-[1480px] mx-auto mt-20 mb-36 px-4">
      <h1 className="text-5xl font-bold text-center text-[var(--text)] mb-10">
        All Blog Posts
      </h1>
      <div className="flex items-center justify-center gap-6 mb-6">
        {/* Category Tabs */}
        {categoriesLoading || blogsLoading ? <CategorySkeleton style="justify-center mb-4" /> : <CategoriesTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategoryClick}
          style="justify-center "
        />}


        {/* Sort Options */}
        <div className="flex justify-self-end ">
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
      <div className="flex flex-wrap gap-6 justify-center">

        {(categoriesError || blogsError) && (
          <p className="text-3xl text-red-500 capitalize">
            Error loading blogs. Please try again later.
          </p>
        )}

        {(categoriesLoading || blogsLoading) && (
          <CategorySkeleton style="justify-start" />
        )}

        {!categoriesError &&
          !blogsError &&
          !categoriesLoading &&
          !blogsLoading &&
          filteredBlogs.length === 0 && (
            <p className="text-3xl text-[var(--text)] capitalize">
              No blogs found in this category.
            </p>
          )}

        {!categoriesError &&
          !blogsError &&
          !categoriesLoading &&
          !blogsLoading &&
          filteredBlogs.length > 0 &&
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              title={blog.title}
              content={blog.content}
              path={`/blogs/${blog._id}`}
              createdAt={blog.publishedAt || blog.createdAt}
              description={blog.content}
              category={blog.category}
              image={blog.image}
              authorName={blog.authorName}
              authorImage={blog.authorImage}
              likes={blog.likes}
              pinned={blog.pinned}
            />
          ))}
      </div>
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
