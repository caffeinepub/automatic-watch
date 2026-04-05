import { ChevronRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function HeritageSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="atelier"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "oklch(0.118 0.006 240)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Atelier image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden aspect-[8/5] lg:aspect-auto lg:min-h-[560px]"
        >
          <img
            src="/assets/generated/heritage-atelier.dim_800x500.png"
            alt="HOROLOGE GENEVE atelier in Geneva"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 75%, oklch(0.118 0.006 240) 100%)",
            }}
          />
          {/* Decorative gold frame accent */}
          <div className="absolute bottom-6 left-6 border border-gold/30 w-24 h-24" />
          <div className="absolute top-6 right-6 border border-gold/20 w-16 h-16" />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16 lg:py-24"
          style={{ background: "oklch(0.135 0.008 240)" }}
        >
          <p className="font-sans text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-5">
            OUR STORY
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.05] text-foreground mb-6">
            HERITAGE
            <br />
            <span className="text-gold">SINCE 1928</span>
          </h2>
          <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
            Henri-Georges Lepage founded Horologe Genève in a small atelier on
            the Rue du Rhône in 1928. His singular pursuit: to create timepieces
            that transcend mere function and become heirlooms passed through
            generations.
          </p>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
            Today, the fourth generation of the Lepage family continues that
            pursuit in the same spirit — every watch leaving our atelier carries
            nearly a century of accumulated knowledge, tradition, and an
            unwavering commitment to excellence.
          </p>

          <a
            href="#boutiques"
            data-ocid="heritage.primary_button"
            className="inline-flex items-center gap-2 w-fit bg-gold text-[oklch(0.108_0.005_240)] font-sans text-[10px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            OUR HERITAGE
            <ChevronRight size={14} />
          </a>

          {/* Timeline */}
          <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-8">
            {[
              { year: "1928", label: "Founded" },
              { year: "1962", label: "Calibre HG-1" },
              { year: "2001", label: "COSC Certified" },
            ].map((item) => (
              <div key={item.year}>
                <div className="font-display text-xl font-semibold text-gold">
                  {item.year}
                </div>
                <div className="font-sans text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
