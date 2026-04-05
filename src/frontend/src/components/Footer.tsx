import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { toast } from "sonner";
import { useSubscribeNewsletter } from "../hooks/useQueries";

const columns = [
  {
    title: "Collections",
    links: [
      "The Aviator",
      "The Classique",
      "The Submariner",
      "Limited Editions",
    ],
  },
  {
    title: "Atelier",
    links: ["Craftsmanship", "In-House Movement", "Materials"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Returns & Warranty"],
  },
];

export default function Footer() {
  const [footerEmail, setFooterEmail] = useState("");
  const { mutateAsync, isPending } = useSubscribeNewsletter();

  const handleFooterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail.trim()) return;
    try {
      await mutateAsync(footerEmail.trim());
      setFooterEmail("");
      toast.success("Subscribed successfully.");
    } catch {
      toast.error("Unable to subscribe. Please try again.");
    }
  };

  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      id="boutiques"
      style={{ background: "oklch(0.108 0.005 240)" }}
      className="border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top: Brand + columns + Stay Updated */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col leading-none mb-4">
              <span className="font-display text-lg font-bold tracking-[0.18em] text-foreground">
                HOROLOGE
              </span>
              <span className="font-sans text-[9px] font-semibold tracking-[0.35em] text-gold uppercase mt-0.5">
                GENEVE
              </span>
            </div>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-[180px]">
              Master watchmakers in Geneva since 1928.
            </p>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[10px] font-semibold tracking-[0.18em] text-foreground uppercase mb-5">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      data-ocid="footer.link"
                      className="font-sans text-xs text-muted-foreground hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Stay Updated */}
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.18em] text-foreground uppercase mb-5">
              Stay Updated
            </p>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
              Exclusive releases and horological insights.
            </p>
            <form
              onSubmit={handleFooterSubscribe}
              className="flex flex-col gap-2"
            >
              <Input
                type="email"
                required
                data-ocid="footer.input"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Your email"
                className="bg-[oklch(0.152_0.009_240)] border-border rounded-none font-sans text-xs placeholder:text-muted-foreground/50 focus-visible:ring-gold h-9"
              />
              <button
                type="submit"
                data-ocid="footer.submit_button"
                disabled={isPending}
                className="inline-flex items-center justify-center gap-2 bg-gold text-[oklch(0.108_0.005_240)] font-sans text-[9px] font-semibold tracking-[0.15em] uppercase h-9 hover:bg-gold-light transition-colors disabled:opacity-70"
              >
                {isPending ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  "SUBSCRIBE"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-5">
            {[
              {
                Icon: SiInstagram,
                label: "Instagram",
                href: "https://instagram.com",
              },
              { Icon: SiX, label: "X / Twitter", href: "https://x.com" },
              {
                Icon: SiFacebook,
                label: "Facebook",
                href: "https://facebook.com",
              },
              {
                Icon: SiYoutube,
                label: "YouTube",
                href: "https://youtube.com",
              },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-ocid="footer.link"
                className="text-muted-foreground hover:text-gold transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-sans text-[10px] text-muted-foreground tracking-[0.08em] text-center sm:text-left">
            © {year} HOROLOGE GENEVE. ALL RIGHTS RESERVED.
          </p>

          {/* Caffeine attribution */}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] text-muted-foreground hover:text-gold transition-colors tracking-[0.06em]"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
