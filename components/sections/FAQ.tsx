"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
} from "framer-motion";

import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

/* ================= CATEGORY SYSTEM ================= */

const categories = [
  "all",
  "payment",
  "services",
  "process",
  "how it works",
];

const categoryLabels: Record<string, string> = {
  all: "All",
  payment: "Payment",
  services: "Services",
  process: "Process",
  "how it works": "How It Works",
};

/* ================= FAQ DATA ================= */

const faqs = [
  {
    id: 1,
    q: "What services does AFZ Global Pakistan offer?",
    a: "We offer Accounting, Company Formation, Website Development, App Development, and Social Media Management.",
    category: "services",
  },

  {
    id: 2,
    q: "Do you work with small businesses?",
    a: "Yes, startups, SMEs, and enterprises are all supported. We have packages tailored for every business size.",
    category: "services",
  },

  {
    id: 3,
    q: "What are your payment terms?",
    a: "We offer milestone-based, upfront, and flexible installment options. A deposit is required before starting any project.",
    category: "payment",
  },

  {
    id: 4,
    q: "Do you offer refunds?",
    a: "Yes, we offer a refund window if you're not satisfied after the initial consultation phase.",
    category: "payment",
  },

  {
    id: 5,
    q: "How long does a website take?",
    a: "Usually 7–14 days depending on complexity. E-commerce and custom systems may take longer.",
    category: "process",
  },

  {
    id: 6,
    q: "What is your development process like?",
    a: "Discovery → Planning → UI/UX Design → Development → Testing → Launch → Maintenance.",
    category: "process",
  },

  {
    id: 7,
    q: "How does the AI automation work?",
    a: "AI handles leads, scheduling, follow-ups, WhatsApp automation, and CRM workflows automatically.",
    category: "how it works",
  },

  {
    id: 8,
    q: "How do I get started with AFZ Global?",
    a: "Simply fill out the contact form and our team will reach out within 24 hours for consultation.",
    category: "how it works",
  },

  {
    id: 9,
    q: "Can you customize services?",
    a: "Yes, all our solutions are fully customized according to your business goals and industry.",
    category: "services",
  },
];

/* ================= ANIMATIONS ================= */

const answerVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
  },

  visible: {
    opacity: 1,
    height: "auto",

    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },

  exit: {
    opacity: 0,
    height: 0,

    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const rotateIcon = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

/* ================= COMPONENT ================= */

export default function FAQ() {
  const [openId, setOpenId] =
    useState<number | null>(null);

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const filtered =
    selectedCategory === "all"
      ? faqs
      : faqs.filter(
          (f) => f.category === selectedCategory
        );

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        py-20
        bg-[#f8fbff]
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

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

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-12">

          {/* TITLE */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
          >

            Frequently{" "}

            <span className="text-blue-600">
              Asked Questions
            </span>

          </motion.h2>

          <div className="flex items-center gap-4 mt-8 mb-8 justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-300"></div>
            <p className="text-slate-600 text-sm font-medium px-4 whitespace-nowrap">Need Help?</p>
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
              delay: 0.2,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-lg
              leading-relaxed
              text-slate-600
            "
          >

            Everything you need to know about our services, process, payments, and digital solutions.

          </motion.p>

        </div>

        {/* ================= FILTERS ================= */}

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
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="
            flex
            flex-wrap
            justify-center
            gap-3
            mb-12
          "
        >

          {categories.map((c) => (

            <button
              key={c}
              onClick={() =>
                setSelectedCategory(c)
              }
              className={`
                px-5
                py-2.5
                rounded-full
                text-sm
                font-medium
                border
                transition-all
                duration-300

                ${
                  selectedCategory === c
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                }
              `}
            >

              {categoryLabels[c]}

            </button>

          ))}

        </motion.div>

        {/* ================= FAQ GRID ================= */}

        <div className="grid md:grid-cols-2 gap-6">

          <AnimatePresence mode="wait">

            {filtered.map((item) => {
              const isOpen =
                openId === item.id;

              return (

                <motion.div
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  {/* HOVER GLOW */}
                  <div className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  ">

                    <div className="
                      absolute
                      -top-20
                      -right-20
                      w-40
                      h-40
                      bg-blue-200/30
                      blur-3xl
                      rounded-full
                    " />

                  </div>

                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      toggleQuestion(item.id)
                    }
                    className="
                      relative
                      z-10
                      w-full
                      flex
                      justify-between
                      items-start
                      gap-4
                      text-left
                    "
                  >

                    <div className="flex items-start gap-3">

                      {/* ICON */}
                      <div className="
                        mt-1
                        flex-shrink-0
                        w-9
                        h-9
                        rounded-xl
                        bg-blue-50
                        flex
                        items-center
                        justify-center
                        text-blue-600
                      ">

                        <HelpCircle className="w-4 h-4" />

                      </div>

                      {/* TEXT */}
                      <h3 className="
                        text-sm
                        md:text-base
                        font-semibold
                        text-slate-900
                        leading-relaxed
                      ">

                        {item.q}

                      </h3>

                    </div>

                    {/* ARROW */}
                    <motion.div
                      variants={rotateIcon}
                      animate={
                        isOpen
                          ? "open"
                          : "closed"
                      }
                      className="
                        flex-shrink-0
                        text-slate-400
                        mt-1
                      "
                    >

                      <ChevronDown className="w-5 h-5" />

                    </motion.div>

                  </button>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>

                    {isOpen && (

                      <motion.div
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >

                        <div className="
                          relative
                          z-10
                          mt-4
                          pt-4
                          border-t
                          border-slate-100
                        ">

                          <p className="
                            text-sm
                            leading-7
                            text-slate-600
                          ">

                            {item.a}

                          </p>

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                  {/* BOTTOM BORDER */}
                  <div className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-gradient-to-r
                    from-blue-500
                    to-indigo-500
                    group-hover:w-full
                    transition-all
                    duration-500
                  " />

                </motion.div>

              );
            })}

          </AnimatePresence>

        </div>

        {/* NO RESULTS */}
        {filtered.length === 0 && (

          <div className="
            text-center
            py-12
            text-slate-500
          ">

            No questions found for this category.

          </div>

        )}

      </div>
    </section>
  );
}