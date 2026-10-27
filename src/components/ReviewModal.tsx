"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";
import { submitReview } from "@/app/actions/review";

export interface ReviewData {
  author: string;
  role: string;
  quote: string;
  image: string;
}

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newReview?: ReviewData) => void;
}

export function ReviewModal({ isOpen, onClose, onSuccess }: ReviewModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: ""
  });
  const [error, setError] = useState("");

  const handleClose = () => {
    setIsSuccess(false);
    setError("");
    setFormData({ name: "", role: "", quote: "" });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.quote.trim()) {
      setError("Name and review text are required.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      // 8-second timeout guard to guarantee the UI never hangs indefinitely
      const timeoutPromise = new Promise<{ error: string }>((_, reject) =>
        setTimeout(() => reject(new Error("Submission timed out. Please check your network and try again.")), 8000)
      );

      const result = await Promise.race([
        submitReview({
          name: formData.name,
          role: formData.role,
          quote: formData.quote,
        }),
        timeoutPromise,
      ]);

      if ("error" in result && result.error) {
        setError(result.error);
        setIsSubmitting(false);
        return;
      }

      if ("success" in result && result.success) {
        setIsSuccess(true);
        if (result.newReview) {
          onSuccess(result.newReview);
        } else {
          onSuccess();
        }
      }
    } catch (err: any) {
      setError(err?.message || "Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-card border-2 border-border shadow-hard rounded-3xl p-6 md:p-8 z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSuccess ? (
              <div className="py-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h2 className="font-display font-bold text-3xl mb-2 text-foreground">Review Submitted!</h2>
                <p className="font-sans text-muted-foreground text-base max-w-sm mb-6">
                  Thank you, <strong className="text-foreground">{formData.name}</strong>! Your feedback has been received and added.
                </p>
                <button
                  onClick={handleClose}
                  className="w-full bg-foreground text-background py-3.5 px-6 rounded-full font-display font-bold text-base hover:-translate-y-1 hover:shadow-hard transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="font-display font-bold text-3xl mb-1 text-foreground">Leave a Review</h2>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Share your experience</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-xs font-mono">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                      Company / Role
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                      placeholder="Founder at XYZ"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                      Review *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.quote}
                      onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                      className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="How was your experience working with me?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-4 px-8 rounded-full font-display font-bold text-lg hover:-translate-y-1 hover:shadow-hard transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Review
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
