import { useLocale } from "next-intl";

export default function CategoriesTabs({categories, selectedCategory, onCategorySelect, style }) {

  let locale = useLocale();

  return (
    <div role="tablist" aria-label="Blog category filters" className={`flex flex-wrap items-center ${style} gap-3`}>
      {categories?.length > 0 && categories.map((category) => (
        <button
          key={category["en"]} 
          type="button"
          aria-label={`Filter by ${category[locale]}`}
          aria-selected={selectedCategory === category[locale]}
          title={`Filter by ${category[locale]}`}
          value={category[locale]}
          role="tab"
          onClick={() => onCategorySelect(category["en"])}
          className={`px-5 py-2 capitalize rounded-lg border transition-all duration-300 text-sm font-medium border-[var(--white-border)] ${selectedCategory === category["en"]
            ? "bg-[var(--bg-black)] text-[var(--text)]"
            : "bg-[var(--bg-white)] text-[var(--black-text)] hover:bg-[var(--bg-black)] hover:text-[var(--white-text)]"
            }`}
        >
          {category[locale]}
        </button>
      ))}
    </div>
  );
}

/*
================================================================================
                          CODE REVIEW & IMPROVEMENT NOTES
================================================================================

📋 CURRENT ISSUES IDENTIFIED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. ❌ MISSING ERROR HANDLING (Lines 10-14)
   Problem: No try-catch block for API fetch
   Impact: App will crash if API fails
   
3. ❌ MISSING LOADING STATE (Line 6)
   Problem: No loading state for categories fetch
   Impact: User doesn't know data is being fetched
   
4. ❌ CONSOLE.LOG IN PRODUCTION (Line 23)
   Problem: Debug console.log left in code
   Impact: Performance and security concerns
   
5. ⚠️ INCORRECT MOUNTED STATE USAGE (Line 16)
   Problem: setMounted(true) runs immediately, not after fetch
   Impact: Mounted check doesn't reflect actual data state
   
6. ⚠️ USEMEMO DEPENDENCY ISSUE (Line 19)
   Problem: `locale` is not in state, so useMemo won't recalculate
   Impact: Categories won't update when locale changes
   
7. ⚠️ CODE DUPLICATION (Lines 27-33 & 35-50)
   Problem: "All" button duplicates logic from category buttons
   Impact: Harder to maintain, inconsistent styling possible
   
8. ⚠️ MISSING ACCESSIBILITY
   Problem: No aria-selected attribute for active tab
   Impact: Screen readers won't announce selected state properly

9. ⚠️ NO EMPTY STATE HANDLING
   Problem: No UI when categories array is empty
   Impact: Blank screen if no categories exist


================================================================================
                        STEP-BY-STEP IMPROVEMENTS
================================================================================

STEP 2: ADD LOADING & ERROR STATES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Add new state:
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

Update useEffect:
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/api/blogs/categories");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.message || "Failed to fetch categories");
        }
        
        setCategories(data.categories || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCategories();
  }, []);


STEP 3: REMOVE MOUNTED STATE (Not Needed)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Remove:
  const [mounted, setMounted] = useState(false);
  setMounted(true);

Replace loading check with:
  if (isLoading) return <div className="flex items-center justify-center mb-6"><Loading /></div>;
  if (error) return <div className="text-red-500 text-center mb-6">Error: {error}</div>;


STEP 4: FIX USEMEMO DEPENDENCIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Update useMemo to include locale in dependencies:
  const categoriesByLocale = useMemo(() => {
    if (!categories.length) return [];
    
    return locale === "ar" 
      ? categories.map((category) => category.ar)
      : categories.map((category) => category.en);
  }, [locale, categories]);


STEP 5: REMOVE CONSOLE.LOG
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Delete:
  console.log(CategoriesByLocale);


STEP 6: EXTRACT BUTTON COMPONENT TO REDUCE DUPLICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Create helper component inside CategoriesTabs:
  const CategoryButton = ({ category, isSelected, onClick }) => (
    <button
      type="button"
      onClick={() => onClick(category)}
      aria-label={`Filter by ${category}`}
      aria-selected={isSelected}
      role="tab"
      className={`px-5 py-2 capitalize rounded-lg border transition-all duration-300 
        text-sm font-medium border-[var(--white-border)] 
        ${isSelected
          ? "bg-[var(--bg-black)] text-[var(--text)]"
          : "bg-[var(--bg-white)] text-[var(--black-text)] hover:bg-[var(--bg-black)] hover:text-[var(--white-text)]"
        }`}
    >
      {category}
    </button>
  );

Then use it:
  <CategoryButton 
    category="All" 
    isSelected={selectedCategory === "All"} 
    onClick={onCategorySelect} 
  />
  
  {categoriesByLocale.map((category) => (
    <CategoryButton
      key={category}
      category={category}
      isSelected={selectedCategory === category}
      onClick={onCategorySelect}
    />
  ))}


STEP 7: ADD EMPTY STATE HANDLING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
After error check, add:
  if (!categories.length && !isLoading) {
    return <div className="text-center text-gray-500 mb-6">No categories available</div>;
  }


STEP 8: IMPROVE ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Add to container div:
  <div 
    role="tablist" 
    aria-label="Blog category filters"
    className="flex flex-wrap justify-center gap-3 mb-6"
  >


STEP 9: OPTIMIZE PERFORMANCE WITH USECALLBACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Import useCallback:
  import { useEffect, useState, useMemo, useCallback } from "react";

Memoize click handler:
  const handleCategoryClick = useCallback((category) => {
    onCategorySelect(category);
  }, [onCategorySelect]);


STEP 10: ADD PROPTYPE VALIDATION (OPTIONAL BUT RECOMMENDED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Add at the end:
  CategoriesTabs.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    onCategorySelect: PropTypes.func.isRequired,
  };


================================================================================
                              PRIORITY RANKING
================================================================================

🔴 CRITICAL (Must Fix):
  1. Add error handling (STEP 2)
  2. Fix locale management (STEP 1)
  3. Remove console.log (STEP 5)

🟡 IMPORTANT (Should Fix):
  4. Fix useMemo dependencies (STEP 4)
  5. Add loading/error states UI (STEP 2 & 3)
  6. Improve accessibility (STEP 8)

🟢 NICE TO HAVE (Optional):
  7. Reduce code duplication (STEP 6)
  8. Add empty state (STEP 7)
  9. Optimize with useCallback (STEP 9)
  10. Add PropTypes (STEP 10)


================================================================================
                          ESTIMATED IMPROVEMENT TIME
================================================================================

Critical fixes: ~15 minutes
Important fixes: ~20 minutes
Nice to have: ~25 minutes
Total: ~60 minutes for complete refactor


================================================================================
                              FINAL NOTES
================================================================================

✅ Good practices already in place:
  - Using semantic HTML (button, role="tab")
  - Accessibility attributes (aria-label)
  - Responsive design (flex-wrap)
  - Loading state component
  - Clean component structure

🎯 After implementing all improvements, this component will be:
  - More robust with proper error handling
  - Fully internationalized
  - More accessible
  - Easier to maintain
  - Better performing
  - Production-ready

*/
