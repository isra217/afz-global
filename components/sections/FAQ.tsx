"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

/* ================= CLEAN CATEGORY SYSTEM ================= */

const categories = ["all", "payment", "services", "process", "how it works"];

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
    a: "We offer milestone-based, upfront, and flexible installment options. A $300 deposit is required to start any project.",
    category: "payment",
  },
  {
    id: 4,
    q: "Do you offer refunds?",
    a: "Yes, we offer a 72-hour full refund window if you're not satisfied with our initial consultation and quote.",
    category: "payment",
  },
  {
    id: 5,
    q: "How long does a website take?",
    a: "Usually 7–14 days depending on complexity. For e-commerce sites, it may take 2-3 weeks.",
    category: "process",
  },
  {
    id: 6,
    q: "What is your development process like?",
    a: "Discovery → Planning → Design → Development → Testing → Launch → Maintenance.",
    category: "process",
  },
  {
    id: 7,
    q: "How does the AI automation work?",
    a: "AI handles leads, scheduling, follow-ups, and CRM automation.",
    category: "how it works",
  },
  {
    id: 8,
    q: "How do I get started with AFZ Global?",
    a: "Fill the form, pay deposit, and get consultation within 24 hours.",
    category: "how it works",
  },
  {
    id: 9,
    q: "Can you customize services?",
    a: "Yes, all services are fully customizable for your business needs.",
    category: "services",
  },
];

/* ================= ANIMATIONS ================= */

const answerVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
};

const rotateIcon = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

/* ================= COMPONENT ================= */

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filtered =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === selectedCategory);

  const toggleQuestion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-28 bg-[#f8fafc] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-0 w-100 h-100 bg-cyan-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-200/20 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-10">

          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Got Questions?
          </div>

          <h2 className="text-4xl font-bold text-slate-900">
            Frequently{" "}
            <span className="text-cyan-500">Asked</span> Questions
          </h2>

        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">

          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-300 ${
                selectedCategory === c
                  ? "bg-cyan-500 text-white border-cyan-500"
                  : "bg-white text-slate-600 border-slate-200 hover:border-cyan-400 hover:text-cyan-500"
              }`}
            >
              {categoryLabels[c]}
            </button>
          ))}

        </div>

        {/* FAQ LIST */}
        <div className="grid md:grid-cols-2 gap-6">

          <AnimatePresence mode="wait">

            {filtered.map((item) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => toggleQuestion(item.id)}
                    className="w-full flex justify-between items-start gap-3 text-left"
                  >

                    <div className="flex items-start gap-3">

                      <div className="mt-0.5 text-cyan-500">
                        <HelpCircle className="w-4 h-4" />
                      </div>

                      {/* ❗ NO HOVER CHANGE ON TEXT */}
                      <h3 className="text-sm md:text-base font-semibold text-slate-900">
                        {item.q}
                      </h3>

                    </div>

                    <motion.div
                      variants={rotateIcon}
                      animate={isOpen ? "open" : "closed"}
                      className="text-slate-400"
                    >
                      <ChevronDown className="w-4 h-4" />
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
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          <p className="text-sm text-slate-500 leading-6">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}

          </AnimatePresence>

        </div>

        {/* NO RESULTS */}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            No questions found for this category.
          </div>
        )}

      </div>
    </section>
  );
}