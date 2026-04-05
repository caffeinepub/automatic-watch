import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const watches = [
  {
    id: 1,
    image: "/assets/generated/watch-aviator.dim_600x600.png",
    name: "THE AVIATOR",
    price: "From $4,800",
    description:
      "Inspired by the golden age of aviation. Bold numerals, anti-reflective crystal, and a robust automatic calibre.",
  },
  {
    id: 2,
    image: "/assets/generated/watch-classic.dim_600x600.png",
    name: "THE CLASSIQUE",
    price: "From $3,200",
    description:
      "Our founding model. Refined restraint expressed through clean lines, guilloché dial, and slim case profile.",
  },
  {
    id: 3,
    image: "/assets/generated/watch-diver.dim_600x600.png",
    name: "THE SUBMARINER",
    price: "From $5,500",
    description:
      "Rated to 300m. Ceramic bezel, helium escape valve, and the relentless precision of Calibre HG-47D.",
  },
];

export default function CollectionsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="collections"
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.108 0.005 240)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.25em] text-gold uppercase mb-3">
              HOROLOGE GENEVE
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
              OUR COLLECTIONS
            </h2>
          </div>
          <a
            href="#boutiques"
            data-ocid="collections.link"
            className="font-sans text-[10px] font-semibold tracking-[0.15em] text-gold uppercase flex items-center gap-2 hover:gap-3 transition-all duration-200"
          >
            VIEW ALL <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watches.map((watch, i) => (
            <motion.article
              key={watch.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              data-ocid={`collections.item.${watch.id}`}
              className="group card-hover bg-[oklch(0.135_0.008_240)] border border-[oklch(0.23_0.012_240)] overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-[oklch(0.152_0.009_240)]">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.135_0.008_240/0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold tracking-[0.06em] text-foreground uppercase">
                    {watch.name}
                  </h3>
                  <span className="font-sans text-xs font-semibold text-gold whitespace-nowrap ml-3">
                    {watch.price}
                  </span>
                </div>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-5">
                  {watch.description}
                </p>
                <a
                  href="#boutiques"
                  data-ocid="collections.link"
                  className="inline-flex items-center gap-1.5 font-sans text-[10px] font-semibold tracking-[0.15em] text-gold uppercase hover:gap-2.5 transition-all duration-200"
                >
                  VIEW DETAILS <ArrowRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
