"use client";

import { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote:
      "Their team completely transformed our real estate business online. We started receiving qualified leads within the first few weeks.",

    name: "Ahmed Raza",
    role: "CEO, Lahore Property Hub",
  },

  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote:
      "From branding to automation, everything was handled professionally. The experience felt premium from start to finish.",

    name: "Sara Khan",
    role: "Founder, Glow Aesthetics",
  },

  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    rating: 5,
    quote:
      "Their automation systems saved our staff hours every day. The WhatsApp integration alone changed our workflow completely.",

    name: "Usman Ali",
    role: "Director, Metro Dental Clinic",
  },
];

/* ================= ANIMATIONS ================= */

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,

    transition: {
      delay: 0.1,
      duration: 0.5,
      type: "spring",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    scale: 0.9,
    y: -30,

    transition: {
      duration: 0.3,
    },
  },
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

    setActiveIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial =
    testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden py-20 bg-[#f8fbff]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-100 rounded-full blur-3xl opacity-50" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-100 rounded-full blur-3xl opacity-40" />

      </div>

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),
          linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {[...Array(12)].map((_, i) => (

          <motion.div
            key={i}
            initial={{
              opacity: 0,
            }}
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
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
          />

        ))}

      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}

        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="text-center mb-14"
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">

            What Clients{" "}

            <span className="text-blue-600">
              Say About Us
            </span>

          </h2>

          <div className="flex items-center gap-4 mt-8 mb-8 justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-300"></div>
            <p className="text-slate-600 text-sm font-medium px-4 whitespace-nowrap">Client Reviews</p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-300"></div>
          </div>

          {/* DESC */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
            className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >

            Hear from businesses across Pakistan that trusted us with their growth, branding, and digital transformation.

          </motion.p>

        </motion.div>

        {/* ================= CAROUSEL ================= */}

        <div className="relative flex items-center justify-center">

          {/* LEFT BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={goToPrev}
            className="
              group
              absolute
              -left-4
              md:-left-8
              z-20
              p-3
              rounded-full
              bg-white
              shadow-lg
              border
              border-slate-200
              hover:bg-blue-600
              transition-all
              duration-300
            "
          >

            <ChevronLeft className="w-5 h-5 text-slate-700 group-hover:text-white transition-colors" />

          </motion.button>

          {/* CARD */}
          <div className="w-full overflow-hidden">

            <AnimatePresence
              mode="wait"
              custom={direction}
            >

              <motion.div
                key={activeIndex}
                custom={direction}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex justify-center px-4"
              >

                <div
                  className="
                    relative
                    overflow-hidden
                    max-w-xl
                    w-full
                    rounded-[32px]
                    border
                    border-slate-100
                    bg-white
                    p-8
                    text-center
                    shadow-2xl
                    hover:shadow-blue-500/10
                    transition-all
                    duration-500
                    group
                  "
                >

                  {/* QUOTE ICON */}
                  <div className="absolute top-6 right-6 opacity-5">

                    <Quote className="w-20 h-20 text-slate-900" />

                  </div>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500" />

                  {/* IMAGE */}
                  <motion.div
                    initial={{
                      scale: 0,
                      rotate: -180,
                    }}
                    whileInView={{
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                    }}
                    className="relative z-10"
                  >

                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="
                        w-24
                        h-24
                        mx-auto
                        rounded-full
                        object-cover
                        shadow-xl
                        ring-4
                        ring-blue-100
                      "
                    />

                  </motion.div>

                  {/* STARS */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="flex justify-center gap-1 mt-5 mb-4"
                  >

                    {Array.from({
                      length:
                        currentTestimonial.rating,
                    }).map((_, i) => (

                      <motion.div
                        key={i}
                        initial={{
                          scale: 0,
                        }}
                        whileInView={{
                          scale: 1,
                        }}
                        transition={{
                          delay:
                            0.35 + i * 0.05,
                        }}
                      >

                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />

                      </motion.div>

                    ))}

                  </motion.div>

                  {/* QUOTE */}
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.4,
                    }}
                    className="
                      text-slate-600
                      leading-relaxed
                      mb-6
                      text-lg
                      italic
                    "
                  >

                    “{currentTestimonial.quote}”

                  </motion.p>

                  {/* NAME */}
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.5,
                    }}
                    className="text-xl font-semibold text-slate-900"
                  >

                    {currentTestimonial.name}

                  </motion.h3>

                  {/* ROLE */}
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.55,
                    }}
                    className="mt-1 text-sm text-blue-600 font-medium"
                  >

                    {currentTestimonial.role}

                  </motion.p>

                  {/* BOTTOM BORDER */}
                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    transition={{
                      delay: 0.6,
                      duration: 0.5,
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-1
                      bg-gradient-to-r
                      from-blue-500
                      to-indigo-500
                    "
                  />

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* RIGHT BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={goToNext}
            className="
              group
              absolute
              -right-4
              md:-right-8
              z-20
              p-3
              rounded-full
              bg-blue-600
              shadow-lg
              border
              border-blue-600
              hover:bg-blue-700
              transition-all
              duration-300
            "
          >

            <ChevronRight className="w-5 h-5 text-white" />

          </motion.button>

        </div>

        {/* DOTS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="flex justify-center gap-3 mt-10"
        >

          {testimonials.map((_, i) => (

            <button
              key={i}
              onClick={() => {
                setDirection(
                  i > activeIndex ? 1 : -1
                );

                setActiveIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-blue-600 w-7"
                  : "bg-slate-300 w-2.5 hover:bg-blue-300"
              }`}
            />

          ))}

        </motion.div>

      </div>

    </section>
  );
}