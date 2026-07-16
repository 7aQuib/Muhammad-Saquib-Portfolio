"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function ReviewModal({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.quote) {
      setError("Name and review text are required.");
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      await addDoc(collection(db, "reviews"), {
        author: formData.name,
        role: formData.role || "Client",
        quote: formData.quote,
        // Using a random avatar for now, or could just use a placeholder
        image: `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(formData.name)}`,
        status: "approved", // For instant visibility. Consider changing to 'pending' for moderation.
        createdAt: serverTimestamp()
      });
      
      setFormData({ name: "", role: "", quote: "" });
      onSuccess(); // Trigger a refetch
      onClose();
    } catch (err: any) {
      setError("Failed to submit review. " + err.message);
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
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-card border-2 border-border shadow-hard rounded-3xl p-6 md:p-8 z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8">
              <h2 className="font-display font-bold text-3xl mb-2 text-foreground">Leave a Review</h2>
              <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">Share your experience</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <p className="text-red-500 text-sm font-mono">{error}</p>}
              
              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Your Name *</label>
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
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Company / Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                  placeholder="Founder at XYZ"
                />
              </div>

              <div>
                <label className="block font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Review *</label>
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
