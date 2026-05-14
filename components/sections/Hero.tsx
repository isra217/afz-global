"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {

  return (
    <section id="home" className="relative overflow-hidden bg-white text-gray-900 pt-24 pb-16">

      {/* ================= BACKGROUND ACCENT (SOFT BLUE GLOW) ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-indigo-100 rounded-full blur-3xl opacity-40" />

      </div>

      {/* ================= FLOATING DOTS (SUBTLE, NOT OVERDONE) ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -60],
              x: [0, (Math.random() - 0.5) * 40],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-sm text-gray-600"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Pakistan’s Modern Digital Growth Partner
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-4xl md:text-5xl font-bold leading-tight"
            >
              Helping Pakistani Businesses{" "}
              <span className="text-blue-600">
                Build, Scale & Grow
              </span>{" "}
              with Modern Solutions
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-600 max-w-xl text-lg leading-relaxed"
            >
              AFZ Global provides Accounting, Taxation, Company Formation,
              Website Development, App Development, and Digital Marketing
              solutions for modern businesses in Pakistan.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >

              {/* PRIMARY */}
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
              >
                Book Consultation
              </button>

              {/* SECONDARY */}
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-300 px-8 py-3 rounded-lg text-gray-700 hover:border-blue-500 hover:text-blue-600 transition"
              >
                Explore Services
              </button>

            </motion.div>

          </div>

          {/* ================= RIGHT SIDE (IMAGE DESIGN) ================= */}
<div className="relative flex items-center justify-center w-full">

  {/* SOFT GLOW BEHIND IMAGE */}
  <div className="absolute w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl" />

  {/* FLOATING SMALL ORBS */}
  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-10 right-10 w-16 h-16 rounded-full bg-blue-100 blur-xl opacity-70"
  />

  <motion.div
    animate={{
      y: [0, 20, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-indigo-100 blur-xl opacity-70"
  />

  {/* MAIN IMAGE CONTAINER */}
  <motion.div
    initial={{ y: 20 }}
    animate={{
      y: [0, -12, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    whileHover={{
      scale: 1.03,
      rotate: -1,
    }}
    className="
      relative
      z-10
      w-full
      max-w-[560px]
    "
  >

    {/* IMAGE */}
    <img
      src="/hero-image.png"
      alt="AFZ Global Dashboard"
      className="
        w-full
        h-auto
        object-contain
        drop-shadow-[0_30px_60px_rgba(37,99,235,0.25)]
      "
    />

  </motion.div>

</div>

        </div>
      </div>
    </section>
  );
}