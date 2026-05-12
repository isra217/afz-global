"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Utensils,
  ShoppingBag,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const industries = [
  {
    key: "realestate",
    title: "Real Estate Agencies",
    desc: "We help property developers generate leads, build premium websites, and automate client inquiries.",
    points: ["Lead Generation Systems", "Property Listing Websites", "CRM Integration", "WhatsApp Automation"],
    icon: Building2,
    stat: "+180% lead growth",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    key: "medical",
    title: "Doctors & Clinics",
    desc: "Digital systems for patient booking, reminders, and AI receptionist support for clinics & hospitals.",
    points: ["Online Booking System", "AI Receptionist", "SMS Reminders", "Patient CRM"],
    icon: Stethoscope,
    stat: "7% no-show rate",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    key: "restaurant",
    title: "Restaurants & Cafés",
    desc: "We build ordering systems, menu websites, and social media growth engines for food businesses.",
    points: ["Online Ordering System", "Digital Menu Websites", "Instagram Growth", "Delivery Integration"],
    icon: Utensils,
    stat: "+3.2x orders",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    key: "ecommerce",
    title: "E-Commerce Brands",
    desc: "Full e-commerce growth systems including Shopify, ads, branding, and conversion optimization.",
    points: ["Shopify Stores", "Paid Ads Setup", "Brand Identity", "Conversion Funnels"],
    icon: ShoppingBag,
    stat: "$48K+ monthly revenue",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightSideVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, rotateY: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const buttonHoverVariants: Variants = {
  initial: { scale: 1, boxShadow: "0px 0px 0px rgba(6, 182, 212, 0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 30px -5px rgba(6, 182, 212, 0.4)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const cardFloatVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ---------------- MAIN ---------------- */

export default function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const Icon = current.icon;

  return (
    <section id="industries" className="relative py-28 bg-[#071120] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/5 blur-3xl rounded-full" />
      </div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:70px_70px]" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 20, -20, 20],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ---------------- LEFT SIDE ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* HEADING */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
            >
              Industries We{" "}
              <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Transform
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-slate-300 max-w-xl leading-relaxed"
            >
              We don't just build websites — we build complete digital systems for high-growth industries in Pakistan.
            </motion.p>

            {/* INDUSTRY BUTTONS */}
            <motion.div
              variants={containerVariants}
              className="mt-8 space-y-3"
            >
              {industries.map((item, i) => {
                const IconBtn = item.icon;
                const isActive = active === i;

                return (
                  <motion.button
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActive(i)}
                    className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group
                    ${isActive
                      ? "border-cyan-400 text-cyan-300"
                      : "border-white/10 text-slate-300 hover:border-cyan-500/50"
                    }`}
                  >
                    {/* Active background gradient */}
                    {isActive && (
                      <motion.div
                        layoutId="activeBg"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-blue-500/15"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    <IconBtn className={`w-5 h-5 relative z-10 transition-all duration-300 ${isActive ? "text-cyan-400" : "group-hover:text-cyan-400"}`} />
                    
                    <span className="font-medium relative z-10">{item.title}</span>
                    
                    {/* Hover arrow */}
                    <motion.span
                      className="ml-auto text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* CTA BUTTON */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
            >
              <motion.button
                variants={buttonHoverVariants}
                whileTap={{ scale: 0.98 }}
                className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Industry Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </motion.div>

          </motion.div>

          {/* ---------------- RIGHT SIDE (FLOATING BOX) ---------------- */}
          <motion.div
            key={active}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={rightSideVariants}
            className="relative flex justify-center"
          >
            <motion.div
              variants={cardFloatVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              {/* GLOW BEHIND CARD */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[40px] blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* MAIN FLOATING CARD */}
              <motion.div
                className="w-full max-w-md rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-[32px]"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${current.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.1)' : current.gradient.includes('emerald') ? 'rgba(16, 185, 129, 0.1)' : current.gradient.includes('orange') ? 'rgba(249, 115, 22, 0.1)' : 'rgba(168, 85, 247, 0.1)'} 100%)`,
                  }}
                />

                {/* ICON + TITLE */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center justify-between mb-6 relative z-10"
                >
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider">Industry Focus</p>
                    <motion.h3
                      key={current.title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold mt-1 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
                    >
                      {current.title}
                    </motion.h3>
                  </div>

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center text-cyan-300 backdrop-blur-sm"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                </motion.div>

                {/* DESCRIPTION */}
                <motion.p
                  key={`desc-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-300 text-sm leading-relaxed relative z-10"
                >
                  {current.desc}
                </motion.p>

                {/* POINTS */}
                <motion.div
                  className="mt-6 space-y-2 relative z-10"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08, delayChildren: 0.6 },
                    },
                  }}
                >
                  {current.points.map((p, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -15 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="text-sm text-slate-300 flex items-center gap-2 group/point"
                    >
                      <motion.span
                        className="text-cyan-400"
                        whileHover={{ x: 3 }}
                      >
                        →
                      </motion.span>
                      {p}
                    </motion.div>
                  ))}
                </motion.div>

                {/* STAT BOX */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="mt-8 p-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent text-center relative overflow-hidden group/stat"
                >
                  <motion.p
                    key={`stat-${active}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    className="text-cyan-300 font-semibold text-lg"
                  >
                    {current.stat}
                  </motion.p>
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    animate={{
                      x: ["-150%", "150%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

              </motion.div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}