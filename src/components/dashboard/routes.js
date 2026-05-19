// All dashboard routes (parent + nested) extracted from sidebar config
export const dashboardRoutes = [



  { path: '/dashboard/troubleshooting', label: 'Troubleshooting' },
  { path: '/dashboard/troubleshooting/hydration-errors', label: 'Fix Hydration Errors' },
  { path: '/dashboard/troubleshooting/debugging', label: 'Debug React Apps' },
  { path: '/dashboard/troubleshooting/build-errors', label: 'Fix Build Issues' },

  { path: '/dashboard/challenges', label: 'Challenges' },
  { path: '/dashboard/challenges/easy', label: 'Easy Challenges' },
  { path: '/dashboard/challenges/medium', label: 'Medium Challenges' },
  { path: '/dashboard/challenges/hard', label: 'Hard Challenges' },

  { path: '/dashboard/notes', label: 'Notes' },
  { path: '/dashboard/notes/my-notes', label: 'My Notes' },
  { path: '/dashboard/notes/snippets', label: 'Saved Snippets' },
  { path: '/dashboard/notes/drafts', label: 'Quick Drafts' },

  { path: '/dashboard/bookmarks', label: 'Bookmarks' },
  { path: '/dashboard/bookmarks/blogs', label: 'Saved Blogs' },
  { path: '/dashboard/bookmarks/tutorials', label: 'Saved Tutorials' },
  { path: '/dashboard/bookmarks/interviews', label: 'Saved Interviews' },

  { path: '/dashboard/blogs', label: 'Blogs' },
  { path: '/dashboard/blogs/all', label: 'All Blogs' },
  { path: '/dashboard/blogs/popular', label: 'Popular Posts' },
  { path: '/dashboard/blogs/latest', label: 'Latest Articles' },

  { path: '/dashboard/documentation', label: 'Documentation' },
  { path: '/dashboard/documentation/getting-started', label: 'Getting Started' },
  { path: '/dashboard/documentation/api-reference', label: 'API Reference' },
  { path: '/dashboard/documentation/components', label: 'Components' },
  { path: '/dashboard/documentation/changelog', label: 'Changelog' },

  { path: '/dashboard/ai-assistant', label: 'AI Assistant' },
  { path: '/dashboard/ai-assistant/explain-code', label: 'Explain Code' },
  { path: '/dashboard/ai-assistant/fix-errors', label: 'Fix Errors' },
  { path: '/dashboard/ai-assistant/generate-components', label: 'Generate Components' },

  { path: '/dashboard/settings', label: 'Settings' },
  { path: '/dashboard/settings/general', label: 'General' },
  { path: '/dashboard/settings/appearance', label: 'Appearance' },
  { path: '/dashboard/settings/notifications', label: 'Notifications' },
  { path: '/dashboard/settings/billing', label: 'Billing' },
];
