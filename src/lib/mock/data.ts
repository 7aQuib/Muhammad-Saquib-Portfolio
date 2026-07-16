import { User, Course, Prompt, Resource, CommunityPost, Challenge, Job, Event } from "@/types/dashboard";

export const MOCK_USERS: User[] = [
  { id: "1", name: "Jane Smith", email: "jane@example.com", role: "MEMBER", joinedAt: "2023-10-15", status: "ACTIVE" },
  { id: "2", name: "Master Admin", email: "admin@example.com", role: "ADMIN", joinedAt: "2023-01-01", status: "ACTIVE" },
  { id: "3", name: "Alex Designer", email: "alex@example.com", role: "MENTOR", joinedAt: "2023-05-20", status: "ACTIVE" },
  { id: "4", name: "Bad Actor", email: "spammer@example.com", role: "MEMBER", joinedAt: "2023-11-01", status: "BANNED" },
];

export const MOCK_COURSES: Course[] = [
  { id: "c1", title: "Advanced Typography", description: "Mastering kerning, leading, and hierarchy.", thumbnail: "/placeholder", instructor: "Alex Designer", modules: 12, duration: "4h 30m", level: "Advanced", status: "PUBLISHED" },
  { id: "c2", title: "Figma Component Systems", description: "Build scalable design systems.", thumbnail: "/placeholder", instructor: "Jane Smith", modules: 8, duration: "3h 15m", level: "Intermediate", status: "PUBLISHED" },
];

export const MOCK_PROMPTS: Prompt[] = [
  { id: "p1", title: "Brutalism Web UI", description: "Generate hard-shadow brutalist web layouts.", category: "Web Design", tool: "Midjourney", content: "award winning website landing page, brutalism, high contrast, hard shadows, vibrant colors, UI/UX, dribbble --ar 16:9", copiedCount: 1240 },
  { id: "p2", title: "UX Persona Generator", description: "Detailed persona prompt for ChatGPT.", category: "Research", tool: "ChatGPT", content: "Act as a senior UX researcher. Generate 3 detailed user personas for a fintech app targeting Gen Z...", copiedCount: 850 },
];

export const MOCK_RESOURCES: Resource[] = [
  { id: "r1", title: "SaaS Dashboard UI Kit", category: "UI Kit", fileType: "Figma", size: "45 MB", downloadCount: 3200 },
  { id: "r2", title: "Minimal iPhone Mockups", category: "Mockup", fileType: "PSD", size: "120 MB", downloadCount: 1500 },
];

export const MOCK_POSTS: CommunityPost[] = [
  { id: "post1", authorId: "1", authorName: "Jane Smith", content: "Just finished the new branding for a fintech client. What do you guys think of this orange?", likes: 45, comments: 12, createdAt: "2 hours ago" },
  { id: "post2", authorId: "3", authorName: "Alex Designer", content: "Hosting a live portfolio review tomorrow! Drop your links below.", likes: 120, comments: 45, createdAt: "5 hours ago" },
];

export const MOCK_CHALLENGES: Challenge[] = [
  { id: "ch1", title: "Redesign a Boarding Pass", description: "Make airline boarding passes actually useful.", prize: "$500 + Pro Badge", deadline: "3 days left", participants: 142, status: "ACTIVE" },
];

export const MOCK_JOBS: Job[] = [
  { id: "j1", title: "Senior Product Designer", company: "Stripe", location: "Remote", type: "Full-time", salary: "$140k - $180k", postedAt: "2 days ago" },
  { id: "j2", title: "Brand Designer", company: "Vercel", location: "Remote / US", type: "Contract", salary: "$80/hr", postedAt: "5 hours ago" },
];

export const MOCK_EVENTS: Event[] = [
  { id: "e1", title: "Typography Masterclass", date: "Tomorrow, 10:00 AM EST", speaker: "Alex Designer", type: "Masterclass", attendees: 450 },
  { id: "e2", title: "Live Portfolio Reviews", date: "Friday, 2:00 PM EST", speaker: "Jane Smith", type: "Review", attendees: 120 },
];
