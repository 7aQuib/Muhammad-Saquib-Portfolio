"use client";

import { useState, useTransition } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { sendEnquiry } from "@/app/actions/contact";
import { MagneticButton } from "@/components/ui/MagneticButton";

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
              <div className="max-w-2xl mx-auto">
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

                  <div className="pt-2">
                    <MagneticButton className="w-full">
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
                    </MagneticButton>
                  </div>
                </form>

                {/* Alternative Contact Methods */}
                <div className="mt-10 pt-8 border-t-2 border-border border-dashed">
                  <div className="text-center mb-6">
                    <p className="text-muted-foreground font-mono text-sm font-bold uppercase tracking-widest">
                      Or reach out directly
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                      href="https://wa.me/917620884427?text=Hi!%20I'd%20like%20to%20discuss%20a%20project%20with%20you." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 border-border shadow-hard hover:-translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-border)] transition-all"
                    >
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                    
                    <a 
                      href="mailto:mohammadsaquib693@gmail.com" 
                      className="w-full sm:w-auto flex items-center justify-center gap-3 bg-card text-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 border-border shadow-hard hover:-translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-border)] transition-all"
                    >
                      Email Me
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
