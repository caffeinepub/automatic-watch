import { Input } from "@/components/ui/input";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "sonner";
import { useSubscribeNewsletter } from "../hooks/useQueries";

export default function NewsletterSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { mutateAsync, isPending } = useSubscribeNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await mutateAsync(email.trim());
      setSubscribed(true);
      setEmail("");
    } catch {
      toast.error("Unable to subscribe. Please try again.");
    }
  };

  return (
    <section
      id="journal"
      ref={ref}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.108 0.005 240) 0%, oklch(0.130 0.007 240) 100%)",
      }}
    >
      {/* Gold decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-[800px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-[10px] font-semibold tracking-[0.3em] text-gold uppercase mb-4">
            EXCLUSIVE ACCESS
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
            STAY CONNECTED
          </h2>
          <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Subscribe for exclusive releases and watchmaking insights —
            delivered with the same precision we bring to every timepiece.
          </p>

          {subscribed ? (
            <motion.div
              data-ocid="newsletter.success_state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <CheckCircle className="text-gold" size={40} />
              <p className="font-display text-lg text-foreground">
                You are now subscribed.
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Expect extraordinary correspondence from Geneva.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
              data-ocid="newsletter.section"
            >
              <Input
                type="email"
                required
                data-ocid="newsletter.input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-[oklch(0.175_0.010_240)] border-border border-r-0 rounded-none font-sans text-sm placeholder:text-muted-foreground/50 focus-visible:ring-gold h-12"
              />
              <button
                type="submit"
                data-ocid="newsletter.submit_button"
                disabled={isPending}
                className="inline-flex items-center justify-center gap-2 bg-gold text-[oklch(0.108_0.005_240)] font-sans text-[10px] font-semibold tracking-[0.15em] uppercase px-8 h-12 hover:bg-gold-light transition-colors duration-200 disabled:opacity-70 whitespace-nowrap"
              >
                {isPending ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  "SUBSCRIBE"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
