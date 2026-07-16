export type UserRole = 'ADMIN' | 'MEMBER' | 'MENTOR';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  joinedAt: string;
  status: 'ACTIVE' | 'BANNED' | 'PENDING';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  modules: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'PUBLISHED' | 'DRAFT';
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  tool: 'Midjourney' | 'DALL-E' | 'ChatGPT' | 'Claude';
  content: string;
  copiedCount: number;
}

export interface Resource {
  id: string;
  title: string;
  category: 'UI Kit' | 'Mockup' | 'Template' | 'Icons';
  fileType: 'Figma' | 'PSD' | 'ZIP' | 'AI';
  size: string;
  downloadCount: number;
}

export interface CommunityPost {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  prize: string;
  deadline: string;
  participants: number;
  status: 'ACTIVE' | 'COMPLETED';
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Freelance';
  salary: string;
  postedAt: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  speaker: string;
  type: 'Masterclass' | 'Review' | 'AMA';
  attendees: number;
}
