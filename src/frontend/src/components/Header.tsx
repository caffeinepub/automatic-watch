import { Button } from "@/components/ui/button";
import { Menu, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "COLLECTIONS", href: "#collections" },
    { label: "ATELIER", href: "#atelier" },
    { label: "THE MOVEMENT", href: "#movement" },
    { label: "JOURNAL", href: "#journal" },
    { label: "BOUTIQUES", href: "#boutiques" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[oklch(0.108_0.005_240/0.97)] backdrop-blur-md shadow-lg"
            : "bg-gradient-to-b from-[oklch(0.108_0.005_240/0.95)] to-[oklch(0.175_0.010_240/0.80)]"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex flex-col leading-none"
              data-ocid="header.link"
            >
              <span className="font-display text-xl font-bold tracking-[0.18em] text-foreground">
                HOROLOGE
              </span>
              <span className="font-sans text-[9px] font-semibold tracking-[0.35em] text-gold uppercase mt-0.5">
                GENEVE
              </span>
            </a>

            {/* Center Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Primary navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="header.link"
                  className="font-sans text-[11px] font-semibold tracking-[0.1em] text-muted-foreground hover:text-gold transition-colors duration-200 uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Search"
                data-ocid="header.button"
                className="hidden md:flex w-9 h-9 items-center justify-center text-muted-foreground hover:text-gold transition-colors"
              >
                <Search size={16} />
              </button>
              <button
                type="button"
                aria-label="Account"
                data-ocid="header.button"
                className="hidden md:flex w-9 h-9 items-center justify-center text-muted-foreground hover:text-gold transition-colors"
              >
                <User size={16} />
              </button>
              <Button
                data-ocid="header.primary_button"
                onClick={() => setConsultOpen(true)}
                className="hidden md:inline-flex bg-gold text-[oklch(0.108_0.005_240)] hover:bg-gold-light font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-5 py-2.5 rounded-none transition-all duration-200"
              >
                REQUEST CONSULTATION
              </Button>
              {/* Mobile menu toggle */}
              <button
                type="button"
                className="lg:hidden flex items-center justify-center w-9 h-9 text-foreground"
                aria-label="Toggle menu"
                data-ocid="header.toggle"
                onClick={() => setMobileOpen((p) => !p)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileOpen && (
            <nav className="lg:hidden pb-6 flex flex-col gap-4 border-t border-border pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="header.link"
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-[11px] font-semibold tracking-[0.1em] text-muted-foreground hover:text-gold transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
              <Button
                data-ocid="header.primary_button"
                onClick={() => {
                  setMobileOpen(false);
                  setConsultOpen(true);
                }}
                className="mt-2 bg-gold text-[oklch(0.108_0.005_240)] hover:bg-gold-light font-sans text-[10px] font-semibold tracking-[0.12em] uppercase px-5 py-2.5 rounded-none w-fit"
              >
                REQUEST CONSULTATION
              </Button>
            </nav>
          )}
        </div>
      </header>

      <ConsultationModal open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
}
