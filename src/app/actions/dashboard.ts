"use server";

import { MOCK_USERS, MOCK_COURSES, MOCK_PROMPTS, MOCK_RESOURCES, MOCK_POSTS, MOCK_CHALLENGES, MOCK_JOBS, MOCK_EVENTS } from "@/lib/mock/data";

// Simulate database delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function getUsers() {
  await delay(400);
  return MOCK_USERS;
}

export async function getCourses() {
  await delay(400);
  return MOCK_COURSES;
}

export async function getPrompts() {
  await delay(400);
  return MOCK_PROMPTS;
}

export async function getResources() {
  await delay(400);
  return MOCK_RESOURCES;
}

export async function getCommunityPosts() {
  await delay(400);
  return MOCK_POSTS;
}

export async function getChallenges() {
  await delay(400);
  return MOCK_CHALLENGES;
}

export async function getJobs() {
  await delay(400);
  return MOCK_JOBS;
}

export async function getEvents() {
  await delay(400);
  return MOCK_EVENTS;
}

export async function getDashboardStats() {
  await delay(500);
  return {
    totalUsers: MOCK_USERS.length,
    activeCourses: MOCK_COURSES.length,
    totalRevenue: "$12,450",
    monthlyGrowth: "+15%"
  };
}
