"use client";

import { motion, Variants } from "framer-motion";

const plans = [
  {
    tag: "starter",
    name: "Single Service",
    desc: "One service done well. Perfect for testing the waters.",
    price: "$300",
    sub: "deposit",
    features: [
      "Choose any single service",
      "Full consultation included",
      "72-hour refund guarantee",
      "Final quote before execution",
      "Dedicated support",
    ],
    button: "Get Started",
    variant: "light",
  },
  {
    tag: "popular",
    name: "Bundle Package",
    desc: "2–4 services bundled together. Best value for growing businesses.",
    price: "$300",
    sub: "deposit",
    features: [
      "Combine multiple services",
      "Bundle pricing discounts",
      "Dedicated project manager",
      "Priority delivery timeline",
      "72-hour refund guarantee",
    ],
    button: "Get Started →",
    variant: "dark",
  },
  {
    tag: "enterprise",
    name: "Full Stack",
    desc: "All six services + ongoing AI ops. Built for serious operators.",
    price: "Talk",
    sub: "to us",
    features: [
      "All six services included",
      "Ongoing AI & automation ops",
      "Quarterly business reviews",
      "White-glove onboarding",
      "Custom SLA terms",
    ],
    button: "Talk to an expert",
    variant: "light",
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
  hidden: (i: number) => ({
    opacity: 0,
    y: 50,
    scale: 0.95,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  }),
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.03, duration: 0.3 },
  }),
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#f8fafc] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-200/20 blur-3xl rounded-full" />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              y: [0, -60],
              x: [0, (Math.random() - 0.5) * 80],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Simple Pricing
          </motion.div>

          <h2 className="text-4xl font-bold text-slate-900">
            Pricing That Fits Every Stage
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-slate-500 mt-3"
          >
            Simple, transparent, and built for growth
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => {
            const isPopular = p.variant === "dark";

            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  relative rounded-3xl p-8 shadow-lg transition-all duration-300 border
                  ${isPopular
                    ? "bg-[#071120] text-white border-cyan-400 scale-105 shadow-cyan-500/10"
                    : "bg-white text-slate-900 border-slate-200"
                  }
                `}
              >
                {/* POPULAR BADGE ANIMATION */}
                {isPopular && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -top-3 right-6"
                  >
                    <span className="text-xs bg-cyan-500 text-white px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* TAG */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 + 0.1 }}
                  className={`text-xs mb-4 uppercase tracking-wider ${isPopular ? "text-cyan-300" : "text-slate-500"}`}
                >
                  {p.tag}
                </motion.p>

                {/* TITLE */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 + 0.15 }}
                  className="text-2xl font-semibold"
                >
                  {p.name}
                </motion.h3>

                {/* DESC */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  className={`mt-2 text-sm leading-6 ${isPopular ? "text-slate-300" : "text-slate-500"}`}
                >
                  {p.desc}
                </motion.p>

                {/* PRICE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 + 0.25, type: "spring" }}
                  className="mt-8"
                >
                  <p className="text-sm opacity-70">starting at</p>
                  <div className="flex items-end gap-2">
                    <h2 className={`text-5xl font-bold ${isPopular ? "text-white" : "text-slate-900"}`}>
                      {p.price}
                    </h2>
                    <span className="text-sm mb-2 opacity-70">
                      {p.sub}
                    </span>
                  </div>
                </motion.div>

                {/* LINE */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  className="my-6 border-t border-slate-200/20"
                />

                {/* FEATURES */}
                <ul className="space-y-3">
                  {p.features.map((f, idx) => (
                    <motion.li
                      key={idx}
                      custom={idx}
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.35 + idx * 0.03 }}
                      className="text-sm flex items-start gap-2"
                    >
                      <span className="text-cyan-400">→</span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                {/* BUTTON */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 + 0.5 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    mt-8 w-full
                    inline-flex items-center justify-center gap-2
                    py-3 rounded-xl font-medium
                    transition-all duration-300
                    border border-slate-300
                    hover:bg-cyan-500
                    hover:text-white
                    hover:border-cyan-500
                    hover:shadow-lg
                    hover:shadow-cyan-500/20
                    cursor-pointer
                  "
                >
                  {p.button}
                </motion.button>

                {/* Bottom progress bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: i * 0.15 + 0.55, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-3xl"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}