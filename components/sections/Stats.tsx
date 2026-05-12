"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Clients Served" },
  { value: 280, suffix: "+", label: "Projects Shipped" },
  { value: 15, suffix: "+", label: "States Covered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

/* ---------------- COUNTER ---------------- */

type CounterProps = {
  target: number;
  suffix: string;
  duration?: number;
};

function Counter({ target, suffix, duration = 2 }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationId: number;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [target, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

// Animation variants
const badgeVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, type: "spring" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const statVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    },
  }),
};

/* ---------------- MAIN ---------------- */

export default function Stats() {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.4 }
    );

    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="stats-section"
      className="relative overflow-hidden bg-[#071120] text-white py-24"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-75 h-75 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-40 right-0 w-65 h-65 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-50 h-50 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-size-[60px_60px]" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -80],
              x: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-0.5 h-0.5 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>

      {/* BOX */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* BADGE */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500/15 to-blue-500/15 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-sm border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Our Impact
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl py-10 px-6 md:px-10 shadow-2xl hover:shadow-cyan-500/5 transition-shadow duration-500"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat: Stat, index: number) => (
              <motion.div
                key={index}
                custom={index}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center group"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2 relative inline-block"
                  animate={isInView ? { scale: [1, 1.08, 1] } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Glow effect on number */}
                  <motion.span
                    className="absolute inset-0 blur-md text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: "scale(0.95)" }}
                  >
                    {isInView ? (
                      <Counter target={stat.value} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </motion.span>

                  <span className="relative z-10">
                    {isInView ? (
                      <Counter target={stat.value} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </span>
                </motion.div>

                <p className="text-xs md:text-sm text-slate-400 uppercase tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Bottom indicator line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="w-8 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}