"use client";

import { motion, Variants } from "framer-motion";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
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

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const descVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
  },
};

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.05, duration: 0.4 },
  }),
};

export default function ContactForm() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Background light glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-200/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN BOX */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-[#071120]
          p-8 md:p-14
          shadow-2xl
          shadow-cyan-500/10
          "
        >
          {/* BACKGROUND LIGHTS */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 30, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ x: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              className="absolute top-1/3 left-1/2 w-[250px] h-[250px] bg-purple-500/5 rounded-full blur-3xl"
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
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.3, 0],
                  y: [0, -60],
                  x: [0, (Math.random() - 0.5) * 80],
                }}
                transition={{
                  duration: 5 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.4,
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

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div>
              {/* BADGE */}
              <motion.div
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Start Your Project
              </motion.div>

              {/* HEADING */}
              <motion.h2
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                mt-7
                text-4xl
                md:text-5xl
                font-semibold
                leading-[1.1]
                tracking-[-2px]
                max-w-xl
                text-white
                "
              >
                Ready to Build a{" "}
                <span className="text-cyan-400 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                  Smarter Business?
                </span>
              </motion.h2>

              {/* DESC */}
              <motion.p
                variants={descVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                mt-6
                text-slate-300
                leading-8
                max-w-lg
                text-lg
                "
              >
                Start with a $300 deposit. Get a full consultation,
                receive a clear quote, and if you're not satisfied —
                enjoy a 72-hour refund window with zero risk.
              </motion.p>

              {/* FEATURES */}
              <div className="mt-10 space-y-5">
                {[
                  "Dedicated project manager",
                  "Clear timelines & milestones",
                  "Transparent pricing structure",
                  "Weekly progress updates",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-500/20 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>

                    <p className="text-slate-300 group-hover:text-white transition-colors duration-300">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
              relative
              rounded-[30px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              hover:border-cyan-500/30
              transition-all
              duration-500
              "
            >
              {/* FORM GLOW */}
              <div className="absolute top-0 left-10 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-10 w-24 h-24 bg-blue-400/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                {/* FORM TITLE */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white">
                    Start Your Project
                  </h3>
                  <p className="mt-2 text-slate-400 text-sm">
                    Fill out the form below and our team will
                    contact you shortly.
                  </p>
                  <div className="mt-3 h-0.5 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>

                {/* FORM */}
                <form className="space-y-5">
                  {/* NAME */}
                  <motion.div
                    custom={0}
                    variants={inputVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="text-sm text-slate-300 mb-2 block">
                      /name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      transition-all
                      duration-300
                      focus:border-cyan-400
                      focus:bg-white/10
                      hover:border-white/20
                      "
                    />
                  </motion.div>

                  {/* EMAIL */}
                  <motion.div
                    custom={1}
                    variants={inputVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="text-sm text-slate-300 mb-2 block">
                      /email
                    </label>
                    <input
                      type="email"
                      placeholder="you@business.com"
                      className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      transition-all
                      duration-300
                      focus:border-cyan-400
                      focus:bg-white/10
                      hover:border-white/20
                      "
                    />
                  </motion.div>

                  {/* PHONE */}
                  <motion.div
                    custom={2}
                    variants={inputVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="text-sm text-slate-300 mb-2 block">
                      /phone
                    </label>
                    <input
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      transition-all
                      duration-300
                      focus:border-cyan-400
                      focus:bg-white/10
                      hover:border-white/20
                      "
                    />
                  </motion.div>

                  {/* SERVICE */}
                  <motion.div
                    custom={3}
                    variants={inputVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="text-sm text-slate-300 mb-2 block">
                      /service
                    </label>
                    <select
                      className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      focus:border-cyan-400
                      focus:bg-white/10
                      hover:border-white/20
                      cursor-pointer
                      "
                    >
                      <option className="bg-[#071120]">
                        Accounting & Tax
                      </option>
                      <option className="bg-[#071120]">
                        Website Development
                      </option>
                      <option className="bg-[#071120]">
                        App & CRM Development
                      </option>
                      <option className="bg-[#071120]">
                        AI & Automation
                      </option>
                      <option className="bg-[#071120]">
                        Branding & Marketing
                      </option>
                    </select>
                  </motion.div>

                  {/* MESSAGE */}
                  <motion.div
                    custom={4}
                    variants={inputVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="text-sm text-slate-300 mb-2 block">
                      /message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="A short note about your goals or what you're working on..."
                      className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      text-white
                      placeholder:text-slate-500
                      outline-none
                      transition-all
                      duration-300
                      resize-none
                      focus:border-cyan-400
                      focus:bg-white/10
                      hover:border-white/20
                      "
                    />
                  </motion.div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#22d3ee" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-slate-950
                    shadow-xl
                    shadow-cyan-500/20
                    transition-all
                    duration-300
                    hover:shadow-cyan-500/40
                    cursor-pointer
                    "
                  >
                    Get Started — Pay $300 Deposit
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}