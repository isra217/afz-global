"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Inquiry Arrives",
    desc: "Web form, WhatsApp, DM, or call.",
    tag: "Instant",
  },
  {
    title: "AI Response",
    desc: "System replies in your brand tone automatically.",
    tag: "< 1s",
  },
  {
    title: "Lead Qualification",
    desc: "Filters, scores, and tags each lead intelligently.",
    tag: "2–3s",
  },
  {
    title: "Booking",
    desc: "Auto-schedules into your calendar instantly.",
    tag: "5–10s",
  },
  {
    title: "Conversion",
    desc: "You close deals while system handles everything else.",
    tag: "On you",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.5,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-28 bg-[#f8fafc] relative overflow-hidden"
    >

      {/* BACKGROUND GLOW with parallax */}
      <motion.div
        className="absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan-200/30 blur-3xl rounded-full"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/20 blur-3xl rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
      />

      {/* Animated grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px),
                              linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      {/* Floating particles for elegance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Smart Automation
          </motion.div>

          <h2 className="text-4xl font-bold text-slate-900">
            How It <span className="text-cyan-500">Works</span>
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Watch how every inquiry moves through an AI-powered system that saves time and increases conversions.
          </p>
        </motion.div>

        {/* STEPS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-5 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={stepVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

              {/* NUMBER CIRCLE */}
              <div className="relative mb-5">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500 text-white font-bold shadow-lg relative z-10"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>

                {/* pulse ring */}
                <motion.span
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="absolute inset-0 rounded-full bg-cyan-400/30"
                />
              </div>

              {/* TITLE */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors duration-300"
              >
                {step.title}
              </motion.h3>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="mt-2 text-sm text-slate-500 leading-relaxed"
              >
                {step.desc}
              </motion.p>

              {/* TAG */}
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                whileHover={{ x: 3 }}
                className="mt-4 inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-all duration-300"
              >
                ⚡ {step.tag}
              </motion.div>

              {/* CONNECT LINE */}
              {i !== steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: i * 0.1 + 0.6, duration: 0.5 }}
                  className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-slate-300 to-transparent"
                />
              )}

              {/* Bottom progress indicator */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: i * 0.1 + 0.7, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-2xl"
                style={{ width: `${((i + 1) / steps.length) * 100}%` }}
              />

            </motion.div>
          ))}
        </motion.div>

        {/* Subtle bottom animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-sm text-slate-400">
            <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
            Real-time automation
            <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}