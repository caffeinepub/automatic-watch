import { ChevronRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function MovementSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="movement"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "oklch(0.118 0.006 240)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Movement macro image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[580px]"
        >
          <img
            src="/assets/generated/movement-macro.dim_800x600.png"
            alt="In-house movement calibre"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* subtle gold overlay at edges */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 80%, oklch(0.118 0.006 240) 100%)",
            }}
          />
        </motion.div>

        {/* Right: Text panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16 lg:py-24"
          style={{ background: "oklch(0.135 0.008 240)" }}
        >
          <p className="font-sans text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-5">
            THE CRAFT: IN-HOUSE MOVEMENT
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[1.05] text-foreground mb-6">
            THE HEARTBEAT
            <br />
            <span className="text-gold">OF INNOVATION</span>
          </h2>
          <p className="font-sans text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
            Our Calibre HG-47 is designed, engineered, and assembled entirely
            within our Geneva manufacture. Every component — from the hairspring
            to the escapement wheel — is crafted to tolerances measured in
            microns.
          </p>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-10">
            Over 380 individual parts work in harmonic synchrony to deliver a
            72-hour power reserve and COSC-certified chronometric precision,
            tested across six positions and two temperatures.
          </p>

          <a
            href="#atelier"
            data-ocid="movement.primary_button"
            className="inline-flex items-center gap-2 w-fit bg-gold text-[oklch(0.108_0.005_240)] font-sans text-[10px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            DISCOVER THE CALIBRE
            <ChevronRight size={14} />
          </a>

          {/* Spec strip */}
          <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-8">
            {[
              { label: "FREQUENCY", value: "28,800 bph" },
              { label: "JEWELS", value: "31" },
              { label: "ACCURACY", value: "±2 sec/day" },
            ].map((spec) => (
              <div key={spec.label}>
                <div className="font-sans text-[9px] font-semibold tracking-[0.2em] text-gold uppercase mb-1">
                  {spec.label}
                </div>
                <div className="font-display text-xl font-semibold text-foreground">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
