"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { sendEnquiry } from "@/app/actions/contact";

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-border shadow-hard relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-purple opacity-20 rounded-tr-full pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-card border-2 border-border shadow-hard mb-6 text-sm font-mono font-bold uppercase tracking-wider">
                05 — Get In Touch
              </div>
              <h2 className="text-4xl font-display text-foreground tracking-tight mb-4">Let's Work Together</h2>
              <p className="text-lg font-sans text-muted-foreground leading-relaxed max-w-xl mx-auto">
                Ready to elevate your brand? Tell me about your goals and I'll get back to you within 24-48 hours.
              </p>
            </div>

            {status === "success" ? (
              <div className="py-12 text-center flex flex-col items-center bg-card rounded-2xl border-2 border-border shadow-hard">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 border-2 border-green-600">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display text-foreground tracking-tight mb-4">Message Received!</h3>
                <p className="text-lg font-sans text-muted-foreground leading-relaxed mb-8 max-w-md">
                  Thank you for reaching out. I'm excited to learn more about your project and will be in touch soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-brand-gradient text-accent-foreground px-8 py-4 rounded-xl font-bold uppercase border-2 border-border shadow-hard hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-border)] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      className="w-full px-5 py-4 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      className="w-full px-5 py-4 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-budget" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                    Estimated Budget
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    className="w-full px-5 py-4 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent shadow-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select a range...</option>
                    <option value="under-15k">Under ₹15,000</option>
                    <option value="15k-30k">₹15,000 - ₹30,000</option>
                    <option value="30k-50k">₹30,000 - ₹50,000</option>
                    <option value="50k+">₹50,000+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="contact-details" className="block font-mono text-sm font-bold uppercase mb-2 text-foreground">
                    Project Details
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent shadow-sm resize-none"
                    placeholder="Tell me about your project goals, timeline, and what you need help with..."
                  />
                </div>
                
                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-600 border-2 border-red-200 rounded-xl font-mono text-sm">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-brand-gradient text-accent-foreground px-8 py-5 rounded-xl font-bold uppercase tracking-wider border-2 border-border shadow-hard hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-border)] transition-all flex items-center justify-center text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="w-6 h-6 ml-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
