"use client";

import { motion, Variants } from "framer-motion";

export default function Hero() {
  // Animation variants
  const badgeVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
    },
  };

  const descVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.45, duration: 0.6 },
    },
  };

  const rightSideVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingCardVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  const graphVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: ["85%", "70%", "92%"][i],
      transition: { duration: 1.4, delay: i * 0.2 },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-[#071120] text-white pt-32 pb-24">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute top-40 right-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/3 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* GRID */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -80],
              x: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>
            {/* BADGE */}
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              text-slate-300
              backdrop-blur-md
              "
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Pakistan's Modern Digital Growth Partner
            </motion.div>

            {/* HEADING */}
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="
              heading-font
              mt-7
              max-w-2xl
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              leading-[1.1]
              tracking-tight
              text-white
              "
            >
              Helping Pakistani Businesses{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Build, Scale & Grow
              </span>{" "}
              With Modern Solutions
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={descVariants}
              initial="hidden"
              animate="visible"
              className="
              mt-6
              max-w-xl
              text-base
              md:text-lg
              leading-8
              text-slate-300
              "
            >
              AFZ Global Pakistan provides Accounting & Taxation,
              Company Formation, Website Development, App Development,
              and Social Media Management solutions for businesses
              across Pakistan.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              {/* PRIMARY BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                px-8
                py-3
                text-sm
                font-semibold
                text-slate-950
                shadow-xl
                shadow-cyan-500/20
                hover:shadow-cyan-500/40
                transition-all
                duration-300
                cursor-pointer
                "
              >
                Book Consultation
              </motion.button>

              {/* SECONDARY BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#06b6d4", backgroundColor: "#06b6d410" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="
                rounded-full
                border
                border-white/15
                bg-transparent
                px-8
                py-3
                text-sm
                text-white
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-500/10
                cursor-pointer
                "
              >
                Explore Services
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={rightSideVariants}
            initial="hidden"
            animate="visible"
            className="
            relative
            hidden
            lg:flex
            items-start
            justify-center
            -translate-y-4
            "
          >
            {/* FLOATING CARD */}
            <motion.div
              variants={floatingCardVariants}
              initial="initial"
              animate="animate"
              className="
              absolute
              -left-10
              top-16
              z-20
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-4
              shadow-xl
              hover:border-cyan-400/30
              transition-all
              duration-300
              "
            >
              <p className="text-sm text-slate-400">
                Project Completion
              </p>
              <h4 className="mt-1 text-2xl font-bold text-cyan-300">
                98%
              </h4>
            </motion.div>

            {/* MAIN CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="
              relative
              max-w-md
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-2xl
              shadow-2xl
              shadow-cyan-500/10
              hover:border-cyan-400/20
              transition-all
              duration-300
              "
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-slate-400">
                    Business Growth
                  </p>
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="mt-2 text-3xl font-bold text-white"
                  >
                    +245%
                  </motion.h3>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-cyan-300 text-xl"
                >
                  ↗
                </motion.div>
              </div>

              {/* GRAPH */}
              <div className="space-y-4">
                {["85%", "70%", "92%"].map((width, i) => (
                  <div key={i} className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      custom={i}
                      variants={graphVariants}
                      initial="hidden"
                      animate="visible"
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                    />
                  </div>
                ))}
              </div>

              {/* BOTTOM CARDS */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <p className="text-sm text-slate-400">
                    Website Growth
                  </p>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-2 text-2xl font-semibold text-white"
                  >
                    180%
                  </motion.h4>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <p className="text-sm text-slate-400">
                    Client Reach
                  </p>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-2 text-2xl font-semibold text-white"
                  >
                    3.2x
                  </motion.h4>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}