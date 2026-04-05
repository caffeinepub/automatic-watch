import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.108 0.005 240) 0%, oklch(0.135 0.008 240) 50%, oklch(0.108 0.005 240) 100%)",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.72 0.085 70) 0px, oklch(0.72 0.085 70) 1px, transparent 1px, transparent 8px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-80px)]">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center lg:pr-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-[10px] font-semibold tracking-[0.3em] text-gold uppercase mb-6"
            >
              SWISS MADE AUTOMATIC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight leading-[1.05] text-foreground mb-6"
            >
              THE ART OF
              <br />
              <span className="text-gold">TIMELESS</span>
              <br />
              PRECISION
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed max-w-md mb-10"
            >
              Each HOROLOGE GENEVE timepiece is hand-assembled by master
              watchmakers in our Geneva atelier, where nearly a century of
              horological tradition meets uncompromising contemporary precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#collections"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 bg-gold text-[oklch(0.108_0.005_240)] font-sans text-[10px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200"
              >
                EXPLORE COLLECTIONS
                <ChevronRight size={14} />
              </a>
              <a
                href="#movement"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 border border-gold text-[oklch(0.93_0.03_80)] font-sans text-[10px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold/10 transition-colors duration-200"
              >
                DISCOVER MORE
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-10 mt-14 pt-10 border-t border-border"
            >
              {[
                { value: "1928", label: "Est. Geneva" },
                { value: "47", label: "Components" },
                { value: "72H", label: "Power Reserve" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-semibold text-gold">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Watch image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Glow effect behind watch */}
            <div
              className="absolute inset-0 rounded-full blur-[80px] opacity-20"
              style={{ background: "oklch(0.72 0.085 70)" }}
            />
            <img
              src="/assets/generated/hero-watch.dim_900x900.png"
              alt="HOROLOGE GENEVE signature timepiece"
              className="relative w-full max-w-[500px] lg:max-w-[580px] xl:max-w-[640px] object-contain drop-shadow-2xl"
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
