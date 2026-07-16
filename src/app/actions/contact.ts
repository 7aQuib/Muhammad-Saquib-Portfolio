"use server";

import { Resend } from "resend";

// We will initialize Resend inside the action so it doesn't crash the server on boot if the key is missing

export async function sendEnquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const details = formData.get("details") as string;
  const budget = formData.get("budget") as string;

  if (!name || !email || !details) {
    return { error: "Name, email, and project details are required." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "Server Configuration Error: Missing RESEND_API_KEY in environment variables." };
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      // Resend requires a verified domain to send FROM in production.
      // onboarding@resend.dev is allowed for testing.
      from: "Enquiry Form <onboarding@resend.dev>",
      to: ["thenonstopc@gmail.com"], // The email you provided
      subject: `New Project Enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; color: #1a1a1a;">
          <h2>New Project Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <h3>Project Details:</h3>
          <p style="white-space: pre-wrap;">${details}</p>
        </div>
      `,
      replyTo: email, // This allows you to hit "Reply" and email the client back directly
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { error: err.message || "An unexpected error occurred." };
  }
}
