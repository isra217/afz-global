"use client";

import { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote:
      "The team delivered beyond our expectations. Their attention to detail and professionalism is unmatched.",
    name: "John Doe",
    role: "CEO, TechCorp",
  },
  {
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    quote:
      "Working with this company was a game-changer for our business. The results were impressive and the process was seamless.",
    name: "Jane Smith",
    role: "Marketing Director, GrowthInc",
  },
  {
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    quote:
      "Exceptional service from start to finish. They truly understand what it takes to deliver outstanding results.",
    name: "Robert Johnson",
    role: "Founder, StartupXYZ",
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
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -30,
    transition: { duration: 0.3 },
  },
};

const arrowVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3, duration: 0.4 },
  },
  hover: {
    scale: 1.1,
    backgroundColor: "#06b6d4",
    transition: { type: "spring", stiffness: 400 },
  },
  tap: { scale: 0.95 },
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-cyan-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-200/20 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-[250px] h-[250px] bg-purple-200/15 blur-3xl rounded-full" />
      </div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.02]
        bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),
        linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
        bg-[size:60px_60px]" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* TITLE WITH BADGE */}
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
            Client Love
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Clients{" "}
            <span className="bg-gradient-to-r text-cyan-500 ">
              Say
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-slate-500 max-w-2xl mx-auto"
          >
            Hear from the businesses we've helped transform with our digital solutions.
          </motion.p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center">
          {/* LEFT ARROW */}
          <motion.button
            variants={arrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="tap"
            onClick={goToPrev}
            className="group absolute -left-4 md:-left-8 z-20 p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-cyan-500 transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors" />
          </motion.button>

          {/* TRACK */}
          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex justify-center px-4"
              >
                <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 text-center relative overflow-hidden group hover:shadow-cyan-500/10 transition-all duration-500">
                  {/* QUOTE ICON BACKGROUND */}
                  <div className="absolute top-6 right-6 opacity-5">
                    <Quote className="w-16 h-16 text-slate-900" />
                  </div>

                  {/* HOVER GLOW EFFECT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

                  {/* IMAGE */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-20 h-20 mx-auto rounded-full object-cover shadow-lg ring-4 ring-cyan-500/20"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/150";
                      }}
                    />
                  </motion.div>

                  {/* RATING */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-1 mt-4 mb-3"
                  >
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.35 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* QUOTE */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-600 leading-relaxed mb-5 text-lg italic"
                  >
                    “{currentTestimonial.quote}”
                  </motion.p>

                  {/* NAME */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-semibold text-slate-900 text-lg"
                  >
                    {currentTestimonial.name}
                  </motion.p>

                  {/* ROLE */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="text-sm text-cyan-500 font-medium"
                  >
                    {currentTestimonial.role}
                  </motion.p>

                  {/* BOTTOM DECORATION */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW */}
          <motion.button
            variants={arrowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="tap"
            onClick={goToNext}
            className="group absolute -right-4 md:-right-8 z-20 p-3 rounded-full bg-white shadow-lg border border-slate-200 hover:bg-cyan-500 transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors" />
          </motion.button>
        </div>

        {/* DOTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center gap-3 mt-10"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-cyan-500 w-6"
                  : "bg-slate-300 w-2.5 hover:bg-cyan-300"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}