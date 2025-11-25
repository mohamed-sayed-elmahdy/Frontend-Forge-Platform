<!-- تمام جدًا يا محمد 👌
الطريقة اللي بتتكلم عنها اسمها:

🔒 JWT Authentication Middleware
أو بتتفهم كـ Token-Based Authentication using JWT. -->
<!-- 
📘 الفكرة العامة:

الـ frontend (المستخدم) بيسجّل دخول → السيرفر يبعتله JWT token.

بعد كده، في أي طلب (زي POST أو PUT أو DELETE)،
الـ frontend بيبعت الـ token في الهيدر بالشكل ده:

Authorization: Bearer <your_token_here>


الـ backend فيه middleware (زي authMiddleware.js)
وظيفته:

يقرأ التوكن من الهيدر.

يتحقق منه (verify) باستخدام secret key.

يستخرج منه بيانات المستخدم (زي الـ id).

يحطها في req.user علشان أي route بعد كده يقدر يستخدمها.

🧩 مثال بسيط:
🧱 middleware/auth.js
import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied, no token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // هنا ممكن يكون فيها userId أو email
    next(); // كمل التنفيذ
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
}

🧠 استخدامه في Route
import { verifyToken } from "@/middleware/auth";

app.post("/api/blogs", verifyToken, async (req, res) => {
  const userId = req.user.id; // جاي من التوكن
  // كمل بإنشاء البوست...
});

✅ مميزات الطريقة دي:

أكثر أمانًا لأنك مش بتبعت userId في body (التوكن مش سهل يتلاعب بيه).

قابلة لإعادة الاستخدام في أي route (مجرد تضيف middleware).

بتشتغل stateless — السيرفر مش بيخزن session لكل مستخدم. -->

-----------------------------------------------------------------------------------------------

<!-- في Next.js فيه ٣ مستويات ممكن نحط عندها الـ middleware:

📁 middleware.js (في الجذر)
→ بيتنفّذ على كل الريكوستات، زي حماية صفحات أو APIs عامة.

داخل الـ API route handler
→ نحط التحقق داخل نفس ملف POST أو GET function.

في ملف util أو helper
→ دالة عامة (زي verifyToken(request)) نستخدمها في أي Route نحتاجه. -->



--------------------------------------------------------------------------------------------
<!-- 🧩 خطوات إنشاء صفحة لعرض كل التاجز أو الكاتيجوريز

إنشاء Route جديد في الـ backend (API) خاص بالتاجز أو الكاتيجوريز

الاتصال بقاعدة البيانات MongoDB داخل الـ route

استخدام Aggregation Pipeline لاستخراج القيم الفريدة (unique)

تطبيق $unwind على المصفوفات (زي tags)

استخدام $group مع $addToSet لمنع التكرار

تحديد الحقول المطلوبة فقط باستخدام $project

إرجاع النتيجة في JSON Response

في الـ frontend: استدعاء الـ API باستخدام fetch أو axios

عرض القيم (tags أو categories) في صفحة مخصصة مثل /tags أو /categories

تحسين الأداء باستخدام الـ Indexes الموجودة مسبقًا -->


---------------------------------------------------
<!-- من أحلى المميزات اللي هتقابلها في المنصة هي فكرة الـ Gamification 🎮
من خلال نظام النقاط والعملات اللي بتكسبها بعد كل فيديو أو امتحان، بتقدر تتنافس مع زمايلك وتطلع على لوحة الأبطال (Leaderboard) 🔥

كل جولة مدتها أسبوعين، والفايز فيها بياخد عملات ذهبية أو فضية بتتحفظ في حسابه ويقدر بيها يشتري منتجات أو كورسات تانية ويكمل رحلته في التعلم ❤️ -->



------------------------------------------------------------------
<!-- 🥇 1. أفضل حل احترافي: استخدم TanStack React Query

(ده الحل اللي بيستخدم في كل المشاريع الكبيرة تقريبًا)

✅ المميزات

بيعمل caching تلقائي للبيانات.

بيمنع refetching الزائد.

بيديك state جاهزة: isLoading, isError, data, refetch.

بيسمحلك تتحكم في وقت إعادة الجلب (revalidate).

تقدر تستخدمه لأي data (blogs, users, dashboard stats...).

⚙️ الخطوات
1. ثبّت المكتبة:
npm install @tanstack/react-query

2. أضف الـ Provider في layout.js أو providers.jsx:

📄 app/providers.jsx

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}


📄 app/layout.jsx

import Providers from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

3. استبدل الـ useEffect بالـ React Query:

📄 components/blogs/CategoriesFilter.jsx

"use client";
import { useQuery } from "@tanstack/react-query";

export default function CategoriesFilter({ activeCategory, onSelect }) {
  const { data: categories = [], isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("/api/blogs/categories");
      if (!res.ok) throw new Error("Failed to fetch categories");
      return res.json();
    },
    staleTime: 1000 * 60 * 5, // 5 دقايق - الكاش يفضل صالح بدون refetch
    cacheTime: 1000 * 60 * 30, // 30 دقيقة في الميموري
  });

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">Error loading categories</p>;

  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(cat.en)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            activeCategory === cat.en
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat.ar}
        </button>
      ))}
    </div>
  );
}

✅ النتيجة:

أول مرة يفتح المستخدم الصفحة → يعمل fetch.

بعد كده (حتى لو عمل re-render أو راح لصفحة تانية ورجع) → يستخدم البيانات من الكاش.

بعد 5 دقايق (staleTime) يقدر يعمل refetch خفيف في الخلفية بدون لودينج جديد. -->


---------------------------------------------------------------------------

<!-- ممتاز يا محمد 🌙💡
اللي ظاهر في الصورة هو بالضبط **Theme switcher panel** زي اللي في ClickUp،
وفي مشروعك بـ **Next.js App Router** تقدر تعمل نفس الفيتشر (Light / Dark + ألوان رئيسية) باستخدام مكتبة **next-themes** مع **Tailwind CSS variables**.
خلينا أشرحلك خطوة بخطوة التركيبة دي 👇

---

### 🧩 الخطوة 1: إعداد `next-themes`

ثبّت المكتبة:

```bash
npm install next-themes
```

ثم في ملف `layout.tsx` (أو `providers.tsx` لو عندك ملف Providers):

```tsx
'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

وبعدين استدعي الـ `<Providers>` جوه `layout.tsx` الرئيسي:

```tsx
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

---

### 🌗 الخطوة 2: إعداد الـ Light / Dark في Tailwind

في ملف `tailwind.config.ts`:

```ts
module.exports = {
  darkMode: 'class', // مهم
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
    },
  },
};
```

---

### 🎨 الخطوة 3: إعداد الألوان المتغيرة (CSS variables)

في `globals.css`:

```css
:root {
  --color-primary: #06b6d4; /* Mint */
}

[data-theme='blue'] {
  --color-primary: #3b82f6;
}
[data-theme='purple'] {
  --color-primary: #8b5cf6;
}
[data-theme='orange'] {
  --color-primary: #f97316;
}
[data-theme='mint'] {
  --color-primary: #06b6d4;
}

.dark {
  background-color: #0f172a;
  color: #f1f5f9;
}
```

---

### ⚙️ الخطوة 4: إنشاء Component لتبديل الثيم والألوان

```tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = ['light', 'dark'];
const colors = ['blue', 'purple', 'orange', 'mint'];

export default function ThemeCustomizer() {
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState('mint');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', color);
  }, [color]);

  return (
    <div className="p-4 bg-neutral-800 text-white rounded-2xl">
      <h3 className="mb-2 font-semibold">Appearance</h3>
      <div className="flex gap-3 mb-4">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`px-3 py-1 rounded-lg border ${
              theme === t ? 'border-primary text-primary' : 'border-gray-500'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <h3 className="mb-2 font-semibold">Theme color</h3>
      <div className="flex gap-3">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`w-8 h-8 rounded-full border-2 ${
              color === c ? 'border-primary' : 'border-transparent'
            }`}
            style={{ backgroundColor: `var(--color-${c}, ${c})` }}
          />
        ))}
      </div>
    </div>
  );
}
```

---

### ✅ النتيجة:

* عندك **Dark / Light switch** شغال بـ `next-themes`.
* وعندك **زرار لتغيير اللون الأساسي** (Mint, Blue, Orange... إلخ).
* اللون بيتغير في كل المشروع لأنك استخدمت `--color-primary`.
* تقدر تستخدمه في أي مكان في Tailwind كده:

```tsx
<button className="bg-primary text-white px-4 py-2 rounded-lg">
  Click me
</button>
```

---

تحب أعملك نسخة محسّنة من الـ UI (زي ClickUp بالظبط في التصميم والمودال بتاع الثيم)؟
لو قلت أيوه، أعملهولك بكود كامل بـ Tailwind + Framer Motion. -->

---

## Bundle impact report (automated scan)

Below is a focused report that identifies files likely increasing client bundle size and gives concrete optimizations and rough before/after estimates. Run the bundle-analyzer (instructions below) to verify exact bytes.

### Top candidate files / modules

1) `src/components/interviews/CodeBlock.jsx`
- Likely contribution: imports `react-syntax-highlighter` (Prism) plus many theme/style objects. Multiple style imports significantly increase bundle size.
- Suggested optimization:
  - Lazy-load the entire CodeBlock component with `next/dynamic({ ssr: false })` so the syntax-highlighter code is not included in initial bundles.
  - Dynamically import only the SyntaxHighlighter runtime and a single theme/style when needed.
  - Consider replacing with `prism-react-renderer` or server-side highlighting to avoid shipping the highlighter to the client.
- Rough estimate: before 80–220 KB; after (lazy/replacement) 0–25 KB in initial bundle.

2) `src/components/interviews/AnswerMarkdownRenderer.jsx`
- Likely contribution: `react-markdown` + `rehype-raw` + `rehype-sanitize` used client-side. Markdown parser + rehype plugins add runtime.
- Suggested optimization:
  - Render markdown on the server and send sanitized HTML to the client.
  - If client rendering is required, lazy-load `react-markdown` only where needed.
- Rough estimate: before 40–120 KB; after server-render or lazy-load 0–15 KB initial.

3) `src/components/blog/BlogCard.jsx` and `src/components/shared/PublicNavbar.jsx`
- Likely contribution: many `react-icons` imports (multiple icon packs). Icons in navbars and cards are part of initial bundle.
- Suggested optimization:
  - Replace `react-icons` with inline SVG components or a small icon system (sprite, `unplugin-icons`), or ensure you import only the exact icons used.
  - Lazy-load non-critical icons.
- Rough estimate combined: before 30–120 KB; after 3–10 KB.

4) `lucide-react` usages across multiple UI files (nav, sidebar, breadcrumb, dropdown, sheet)
- Likely contribution: named icon imports across many files increase the set of icons included on initial routes.
- Suggested optimization:
  - Inline critical icons as small React components; lazy-load others.
  - Centralize icon imports to a single module to make it easier to audit which icons are used on initial render.
- Rough estimate: before 20–100 KB; after 5–20 KB.

5) `src/providers/ReactQueryProvider.jsx`
- Likely contribution: `@tanstack/react-query` and possibly `@tanstack/react-query-devtools` (devtools should not be bundled in production).
- Suggested optimization:
  - Ensure devtools are only loaded in development (`if (process.env.NODE_ENV === 'development')`).
  - Keep heavy query logic server-side where possible; only hydrate minimal data on client.
- Rough estimate: before 20–60 KB; after 2–15 KB.

6) `src/app/layout.jsx` and `src/app/(public)/layout.jsx`
- Likely contribution: `NextIntlClientProvider` and `next-themes` providers add client runtime for translations and theme switching if used at top-level.
- Suggested optimization:
  - Move translation rendering to server components where possible (use `next-intl/server`).
  - Limit `next-themes` to client components that actually toggle theme (avoid wrapping entire app unless needed).
- Rough estimate: before 15–50 KB; after serverizing or lazy-loading 0–15 KB.


### Overall recommendations to get JS < 1.5 MB
- Run the bundle analyzer (exact commands below) to get a precise module-bytes map. Focus the optimization effort on the top 3–5 modules from the analyzer.
- Move non-interactive page parts to server components so the client receives less JS.
- Lazy-load heavy client libraries (syntax highlighter, markdown, charting libraries, editors).
- Replace `react-syntax-highlighter` with a lighter solution or server-render highlights.
- Replace `react-icons`/`lucide` where possible with inline SVGs or smaller icon systems.
- Ensure dev-only tooling (React Query Devtools, storybook, debug helpers) is excluded from production bundles.


### Quick analyzer setup (recommended)
1. Add `@next/bundle-analyzer` to `next.config.js`:
```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
module.exports = withBundleAnalyzer({ /* existing config */ });
```
2. Run analyzer in PowerShell:
```powershell
$env:ANALYZE = "true"; npm run build
```

---

If you want, I can add the analyzer config and an `analyze` npm script, run the build, and produce an exact per-file byte report. Reply with `analyze` to have me add/execute those changes.

---

## Per-file BEFORE / AFTER examples (concrete edits you can apply)

Below are concrete "before" and "after" code snippets for the files that typically inflate bundles in this repo. Apply these refactors in small PRs and run the bundle analyzer to measure effect.

### 1) `src/components/interviews/CodeBlock.jsx`
- Before (current pattern — heavy top-level imports):

```javascript
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, nord, materialDark, dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code, language }) {
  return (
    <SyntaxHighlighter style={oneDark} language={language}>
      {code}
    </SyntaxHighlighter>
  );
}
```

- After (lazy-load highlighter inside the component, avoid multiple style imports at module scope):

```javascript
import React, { useEffect, useState } from 'react'

export default function CodeBlock({ code, language }) {
  const [High, setHigh] = useState(null)
  const [style, setStyle] = useState(null)

  useEffect(() => {
    let mounted = true
    Promise.all([
      import('react-syntax-highlighter/dist/esm/prism').then(m => m.Prism),
      import('react-syntax-highlighter/dist/esm/styles/prism').then(s => s.oneDark)
    ]).then(([Prism, oneDark]) => {
      if (!mounted) return
      setHigh(() => Prism)
      setStyle(oneDark)
    })
    return () => { mounted = false }
  }, [])

  if (!High) return <pre className="rounded-md p-2 bg-neutral-900 text-sm">{code}</pre>

  return (
    <High style={style} language={language}>
      {code}
    </High>
  )
}
```

### 2) `src/components/interviews/AnswerMarkdownRenderer.jsx`
- Before (client-side markdown parser):

```javascript
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'

export default function AnswerMarkdownRenderer({ content }) {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{content}</ReactMarkdown>
  )
}
```

- After Option A — Server-side render & sanitize (preferred):

```javascript
// lib/markdown.server.js (server-only)
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export async function markdownToHtml(markdown) {
  const vfile = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)
  return String(vfile)
}
```

```javascript
// server page/component
import { markdownToHtml } from '@/lib/markdown.server'

export default async function Page() {
  const html = await markdownToHtml(rawMarkdownFromDb)
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
```

- After Option B — Client lazy-load (if server render impossible):

```javascript
import dynamic from 'next/dynamic'
const ReactMarkdown = dynamic(() => import('react-markdown'), { ssr: false })

export default function AnswerMarkdownRenderer({ content }) {
  return <ReactMarkdown>{content}</ReactMarkdown>
}
```

### 3) `src/components/blog/BlogCard.jsx` (icons)
- Before (react-icons used directly):

```javascript
import { FaArrowRight, FaHeart, FaBookmark } from 'react-icons/fa6'

export default function BlogCard({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <div className="icons">
        <FaHeart />
        <FaBookmark />
        <FaArrowRight />
      </div>
    </article>
  )
}
```

- After (inline/small Icon component):

```javascript
// src/components/ui/Icon.jsx
export default function Icon({ name, className }) {
  const icons = {
    'arrow-right': (
      <svg viewBox="0 0 24 24" fill="none" className={className}><path d="M5 12h14" stroke="currentColor"/><path d="M13 6l6 6-6 6" stroke="currentColor"/></svg>
    ),
    'heart': (<svg .../>),
    'bookmark': (<svg .../>)
  }
  return icons[name] || null
}
```

```javascript
import Icon from '@/components/ui/Icon'

export default function BlogCard({ post }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <div className="icons">
        <Icon name="heart" />
        <Icon name="bookmark" />
        <Icon name="arrow-right" />
      </div>
    </article>
  )
}
```

### 4) `src/components/shared/PublicNavbar.jsx` (reduce icon cost)
- Before (multiple icon packs):

```javascript
import { CiLocationArrow1 } from 'react-icons/ci'
import { IoSearch } from 'react-icons/io5'
import { HiOutlineMenu } from 'react-icons/hi'

export default function PublicNavbar() {
  return (
    <nav>
      <HiOutlineMenu />
      <IoSearch />
      <CiLocationArrow1 />
    </nav>
  )
}
```

- After (centralize icons + inline critical ones):

```javascript
import Icon from '@/components/ui/Icon'

export default function PublicNavbar() {
  return (
    <nav>
      <Icon name="menu" />
      <Icon name="search" />
      <Icon name="location" />
    </nav>
  )
}
```

### 5) `src/providers/ReactQueryProvider.jsx`
- Before (devtools imported at module scope):

```javascript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

- After (devtools lazy-loaded only in development):

```javascript
import React, { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function ReactQueryProvider({ children }) {
  const [Devtools, setDevtools] = useState(null)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('@tanstack/react-query-devtools').then(mod => {
        setDevtools(() => mod.ReactQueryDevtools)
      })
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {Devtools ? <Devtools initialIsOpen={false} /> : null}
    </QueryClientProvider>
  )
}
```

### 6) `src/app/layout.jsx` and `src/app/(public)/layout.jsx` (providers)
- Before (client-heavy providers at root):

```javascript
"use client"
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

- After (keep layout server-side; provide client providers only where needed):

```javascript
// app/layout.jsx (server component)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

```javascript
// src/components/ClientProviders.jsx (client component)
"use client"
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'

export default function ClientProviders({ children, messages }) {
  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </NextIntlClientProvider>
  )
}
```

---

If you'd like, I can implement one or more of the refactors above directly in the repository (e.g., convert `CodeBlock.jsx` and `ReactQueryProvider.jsx` now), then run the bundle analyzer and report exact before/after bytes. Tell me which file(s) you want changed and I'll make the edits and measure the result.
