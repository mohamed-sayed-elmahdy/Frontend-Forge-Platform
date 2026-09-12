# Authentication User Model Notes

`js
import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = new Schema(
  {
    // ===== Core =====
    name: { type: String, required: true, trim: true },
    username: { type: String, unique: true, sparse: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String }, // optional Ù„Ùˆ social only
    avatar: { type: String, default: "" },
    bio: { type: String, default: "" },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"],
      default: "user",
    },
    isEmailVerified: { type: Boolean, default: false },
    provider: {
      type: String,
      enum: ["credentials", "google", "github"],
      default: "credentials",
    },
    providerId: String,

    // ===== Stats & Gamification =====
    stats: {
      totalPoints: { type: Number, default: 0 },
      level: { type: Number, default: 1 },
      currentStreak: { type: Number, default: 0 },
      longestStreak: { type: Number, default: 0 },
      lastActivityDate: Date,
      challengesSolved: { type: Number, default: 0 },
      tutorialsCompleted: { type: Number, default: 0 },
      lessonsCompleted: { type: Number, default: 0 },
      interviewsPracticed: { type: Number, default: 0 },
      mockInterviewsCompleted: { type: Number, default: 0 },
    },

    achievements: [
      {
        id: String,
        title: { en: String, ar: String },
        earnedAt: { type: Date, default: Date.now },
        icon: String,
      },
    ],

    // ===== Progress =====
    progress: {
      tutorials: [
        {
          tutorialId: { type: Schema.Types.ObjectId, ref: "Tutorial" },
          slug: String,
          completedLessons: [String],
          totalLessons: Number,
          progressPercentage: { type: Number, default: 0 },
          lastAccessedAt: Date,
          completedAt: Date,
        },
      ],
      roadmaps: [
        {
          roadmapKey: String, // "frontend" | "react" | "nextjs"
          completedNodes: [String],
          progressPercentage: { type: Number, default: 0 },
          startedAt: Date,
          completedAt: Date,
        },
      ],
      challenges: [
        {
          challengeId: { type: Schema.Types.ObjectId, ref: "Challenge" },
          difficulty: String,
          status: {
            type: String,
            enum: ["attempted", "solved", "failed"],
            default: "attempted",
          },
          attempts: { type: Number, default: 1 },
          bestScore: Number,
          solvedAt: Date,
        },
      ],
      interviews: [
        {
          questionId: { type: Schema.Types.ObjectId, ref: "Question" },
          language: String,
          status: {
            type: String,
            enum: ["viewed", "answered", "bookmarked"],
          },
          userAnswer: String,
          isCorrect: Boolean,
          answeredAt: Date,
        },
      ],
    },

    // ===== Bookmarks & Personal Content =====
    bookmarks: {
      blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
      tutorials: [String],
      interviews: [{ type: Schema.Types.ObjectId, ref: "Question" }],
      challenges: [{ type: Schema.Types.ObjectId, ref: "Challenge" }],
    },

    notes: [
      {
        title: String,
        content: String,
        tags: [String],
        relatedTo: {
          type: { type: String }, // "tutorial" | "challenge" | "interview"
          id: String,
        },
        isDraft: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],

    snippets: [
      {
        title: String,
        code: String,
        language: String,
        tags: [String],
        createdAt: { type: Date, default: Date.now },
      },
    ],

    // ===== Preferences =====
    preferences: {
      theme: {
        type: String,
        enum: ["light", "dark", "system"],
        default: "system",
      },
      language: {
        type: String,
        enum: ["en", "ar"],
        default: "en",
      },
      notifications: {
        email: { type: Boolean, default: true },
        push: { type: Boolean, default: true },
        weeklyDigest: { type: Boolean, default: true },
        challengeReminders: { type: Boolean, default: true },
        streakReminders: { type: Boolean, default: true },
      },
    },

    // ===== Billing =====
    billing: {
      plan: {
        type: String,
        enum: ["free", "pro", "lifetime"],
        default: "free",
      },
      subscriptionId: String,
      currentPeriodEnd: Date,
      cancelAtPeriodEnd: { type: Boolean, default: false },
    },

    // ===== Security =====
    refreshToken: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    emailVerificationToken: String,
    emailVerificationExpires: Date,
  },
  { timestamps: true }
);

// Indexes Ù…Ù‡Ù…Ø©
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });
userSchema.index({ "stats.totalPoints": -1 }); // Ù„Ù„Ù€ Leaderboard
userSchema.index({ "stats.currentStreak": -1 });

const User = models.User || model("User", userSchema);
export default User;
```

## Likely Future Additions (Future-Proofing)

| Feature | Why you may need it |
| --- | --- |
| Followers / following | Community or social features |
| Badges separate from achievements | A more detailed badge system |
| Daily goals / weekly goals | Daily motivation |
| AI usage (tokens used / requests) | If the AI assistant becomes paid or usage-limited |
| Resume history | A record of resume reviews |
| Mock interview history | Results from AI mock interviews |
| Learning path (recommended) | Recommendation system |
| Time zone | Accurate streak calculation |
| `lastLoginAt` and login history | Security and analytics |
| `isBanned` and `banReason` | Moderation |
| `twoFactorEnabled` and `twoFactorSecret` | Advanced security |
| Public profile (boolean) | Public profile pages |
| Social links (GitHub, LinkedIn, Twitter) | A professional profile |
| Skills / skill levels | Better recommendations |
