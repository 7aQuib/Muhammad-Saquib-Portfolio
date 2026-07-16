"use client";

import { useState, useTransition, useEffect } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { sendEnquiry } from "@/app/actions/contact";
import { div } from "framer-motion/client";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  async function handleSubmit(formData: FormData) {
    setStatus("idle");
    setErrorMessage("");

    startTransition(async () => {
      const result = await sendEnquiry(formData);

      if (result?.error) {
        setStatus("error");
        setErrorMessage(result.error);
      } else {
        setStatus("success");
      }
    });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-background/40 backdrop-blur-sm"
      />

      <div
        className="relative w-full max-w-lg bg-background rounded-2xl border-2 border-border shadow-hard overflow-hidden z-10 flex flex-col max-h-[calc(100vh-2rem)] sm:max-h-[85vh] animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex-shrink-0 flex items-center justify-between p-6 border-b-2 border-border bg-card z-20">
          <h2 className="font-display text-2xl">Start a Project</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 bg-card/50 overflow-y-auto flex-1 min-h-0">
          {status === "success" ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl mb-2">Message Sent!</h3>
              <p className="text-muted-foreground font-hand text-xl mb-6">
                Thanks for reaching out. I'll get back to you within 24-48 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-brand-gradient text-accent-foreground px-6 py-3 rounded-xl font-bold uppercase border-2 border-border shadow-hard hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-border)] transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent appearance-none"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="branding">Brand Identity</option>
                  <option value="packaging">Packaging Design</option>
                  <option value="social">Social Media Kit</option>
                  <option value="illustration">Custom Illustration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent appearance-none"
                >
                  <option value="" disabled>Select a range...</option>
                  <option value="under-15k">Under ₹15,000</option>
                  <option value="15k-30k">₹15,000 - ₹30,000</option>
                  <option value="30k-50k">₹30,000 - ₹50,000</option>
                  <option value="50k+">₹50,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell me a bit about your goals, timeline, and what you're looking to achieve..."
                ></textarea>
              </div>

              {errorMessage && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-200 font-sans text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="pt-4 pb-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-brand-gradient text-accent-foreground px-8 py-4 rounded-xl font-bold uppercase border-2 border-border shadow-hard hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-border)] transition-all flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
