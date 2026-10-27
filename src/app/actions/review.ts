"use server";

import { Resend } from "resend";

export interface SubmitReviewInput {
  name: string;
  role?: string;
  quote: string;
}

export async function submitReview(data: SubmitReviewInput) {
  const name = data.name?.trim();
  const role = data.role?.trim() || "Client";
  const quote = data.quote?.trim();

  if (!name || !quote) {
    return { error: "Name and review text are required." };
  }

  const image = `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(name)}`;
  const newReview = { author: name, role, quote, image };

  // 1. Send Email Notification to Saquib so the review is never lost!
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "Portfolio Reviews <onboarding@resend.dev>",
        to: ["mohammadsaquib693@gmail.com"],
        subject: `⭐ New Client Review from ${name}`,
        html: `
          <div style="font-family: sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background: #fafafa;">
            <h2 style="color: #FF4D24; margin-top: 0; font-size: 22px;">New Client Review Received</h2>
            <p style="font-size: 15px; margin: 6px 0;"><strong>Client Name:</strong> ${name}</p>
            <p style="font-size: 15px; margin: 6px 0;"><strong>Company / Role:</strong> ${role}</p>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 18px 0;" />
            <p style="font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #666; margin-bottom: 8px;">Review Content:</p>
            <blockquote style="font-size: 16px; font-style: italic; color: #222; margin: 0; padding: 12px 16px; background: #ffffff; border-left: 4px solid #FF4D24; border-radius: 4px;">
              "${quote}"
            </blockquote>
            <p style="font-size: 12px; color: #888; margin-top: 20px;">Submitted from Muhammad Saquib's Portfolio website.</p>
          </div>
        `,
      });
    } catch (err: any) {
      console.warn("[submitReview] Resend email notification failed:", err?.message || err);
    }
  }

  // 2. Attempt to save to Firestore via REST API with a strict 4-second timeout so it never hangs
  let savedToFirestore = false;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

  if (projectId && firebaseApiKey) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/reviews?key=${firebaseApiKey}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          fields: {
            author: { stringValue: name },
            role: { stringValue: role },
            quote: { stringValue: quote },
            image: { stringValue: image },
            status: { stringValue: "approved" },
            createdAt: { timestampValue: new Date().toISOString() },
          },
        }),
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        savedToFirestore = true;
      } else {
        const errData = await res.json().catch(() => ({}));
        console.warn("[submitReview] Firestore write response status:", res.status, errData?.error?.message || "");
      }
    } catch (err: any) {
      console.warn("[submitReview] Firestore write skipped or timed out:", err?.message || err);
    }
  }

  return {
    success: true,
    savedToFirestore,
    newReview,
  };
}
