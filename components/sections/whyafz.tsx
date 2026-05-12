"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Layers,
  Rocket,
  ShieldCheck,
  Briefcase,
  Bot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Layers,
    title: "Unified Execution System",
    desc: "Everything is managed under one structured workflow from strategy to delivery without confusion.",
    flow: ["Formation", "Build", "Launch", "Automate"],
  },
  {
    number: "02",
    icon: Rocket,
    title: "Fast Delivery Cycles",
    desc: "Focused execution sprints ensure faster delivery without compromising quality or detail.",
    stat: "2–3 weeks avg delivery",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Transparent Process",
    desc: "Clear pricing, scope, and updates so you always know what is happening in your project.",
    stat: "72h full refund window",
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Industry Expertise",
    desc: "Specialized solutions for real estate, clinics, and e-commerce businesses.",
    stat: "Real estate • Medical • E-commerce",
  },
  {
    number: "05",
    icon: Bot,
    title: "AI-Driven Automation",
    desc: "Smart automation systems handle leads, follow-ups, and repetitive tasks efficiently.",
    stat: "Automate 70%+ workflows",
  },
];

// Animation variants
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const badgeVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, type: "spring" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const arrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3, duration: 0.4 },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#06b6d4",
    color: "#ffffff",
    transition: { type: "spring", stiffness: 400 },
  },
  tap: { scale: 0.95 },
};

export default function WhyAFZ() {
  const visible = 3;

  const pages = [];
  for (let i = 0; i < features.length; i += visible) {
    pages.push(features.slice(i, i + visible));
  }

  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p >= pages.length - 1 ? 0 : p + 1));
  const prev = () => setIndex((p) => (p <= 0 ? pages.length - 1 : p - 1));

  return (
    <section id="about" className="py-24 bg-[#f8fafc] overflow-hidden relative">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-200/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADING WITH BADGE */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          {/* SMART AUTOMATION STYLE BADGE */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Why Choose Us
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Businesses Choose{" "}
            <span className="text-cyan-500">AFZ Global</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-3 text-slate-500 max-w-2xl mx-auto"
          >
            A structured system built for clarity, speed, and real execution.
          </motion.p>
        </motion.div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative flex items-center justify-center gap-6">

          {/* LEFT ARROW */}
          <motion.button
            variants={arrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="tap"
            onClick={prev}
            className="shrink-0 z-20 p-4 rounded-full bg-white border border-slate-200 shadow-md
            text-cyan-600 hover:bg-cyan-500 hover:text-white transition cursor-pointer"
          >
            <ChevronLeft size={22} />
          </motion.button>

          {/* TRACK */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
            >
              {pages.map((page, i) => (
                <div key={i} className="min-w-full">
                  <div className="grid grid-cols-3 gap-6">
                    {page.map((item, j) => {
                      const Icon = item.icon;
                      const globalIndex = i * visible + j;

                      return (
                        <motion.div
                          key={j}
                          custom={globalIndex}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-50px" }}
                          whileHover={{ y: -6 }}
                          className="relative bg-white border border-slate-200 rounded-3xl
                          w-full h-[380px] p-8 flex flex-col justify-between
                          transition-all duration-300 hover:shadow-2xl group"
                        >
                          {/* NUMBER */}
                          <div className="absolute top-6 right-6 text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                            {item.number}
                          </div>

                          {/* TOP SECTION */}
                          <div>
                            <motion.div
                              whileHover={{ scale: 1.05, rotate: 5 }}
                              className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300"
                            >
                              <Icon className="w-5 h-5" />
                            </motion.div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors duration-300">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                              {item.desc}
                            </p>

                            <div className="mt-5 h-px bg-slate-100" />
                          </div>

                          {/* BOTTOM SECTION */}
                          <div className="text-sm">
                            {item.flow ? (
                              <div className="flex flex-wrap gap-2 text-cyan-600 font-medium">
                                {item.flow.map((f, k) => (
                                  <motion.span
                                    key={k}
                                    initial={{ opacity: 0, x: -5 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: globalIndex * 0.05 + k * 0.1 }}
                                    className="inline-flex items-center gap-1"
                                  >
                                    {f}
                                    {k !== item.flow.length - 1 && (
                                      <span className="text-slate-300">→</span>
                                    )}
                                  </motion.span>
                                ))}
                              </div>
                            ) : (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: globalIndex * 0.05 + 0.2 }}
                                className="text-cyan-600 font-medium"
                              >
                                {item.stat}
                              </motion.div>
                            )}
                          </div>

                          {/* HOVER BORDER */}
                          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400 transition-all duration-300" />

                          {/* BOTTOM PROGRESS BAR */}
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: globalIndex * 0.05 + 0.3, duration: 0.6 }}
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-3xl"
                            style={{ width: `${((globalIndex + 1) / features.length) * 100}%` }}
                          />

                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT ARROW */}
          <motion.button
            variants={arrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="tap"
            onClick={next}
            className="shrink-0 z-20 p-4 rounded-full bg-white border border-slate-200 shadow-md
            text-cyan-600 hover:bg-cyan-500 hover:text-white transition cursor-pointer"
          >
            <ChevronRight size={22} />
          </motion.button>
        </div>

        {/* DOTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-2 mt-10"
        >
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === i
                  ? "bg-cyan-500 w-6"
                  : "bg-slate-300 hover:bg-cyan-300"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}