"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  FileText,
  Building2,
  Globe,
  Smartphone,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Accounting & Taxation",
    desc: "Professional bookkeeping, tax filing, payroll & financial management.",
    icon: FileText,
    details:
      "We provide complete accounting, taxation, payroll, compliance, and financial management services for businesses across Pakistan.",
    points: [
      "Monthly bookkeeping management",
      "Tax filing & compliance",
      "Payroll solutions",
      "Financial reporting",
      "Business advisory support",
      "Audit preparation",
      "Cash flow monitoring",
      "Corporate tax consultancy",
    ],
  },
  {
    number: "02",
    title: "Company Formation",
    desc: "Business registration, setup guidance & startup consultation in Pakistan.",
    icon: Building2,
    details:
      "Start your business professionally with complete company registration and legal setup solutions.",
    points: [
      "SECP registration",
      "NTN registration",
      "Business legal guidance",
      "Startup consultation",
      "Trademark support",
      "Documentation handling",
      "Corporate structuring",
      "Business compliance",
    ],
  },
  {
    number: "03",
    title: "Website Development",
    desc: "Modern, responsive and SEO-friendly websites for business growth.",
    icon: Globe,
    details:
      "We create premium business websites focused on branding, conversions, SEO, and user experience.",
    points: [
      "Modern UI/UX design",
      "Responsive development",
      "SEO optimization",
      "Fast loading speed",
      "Custom animations",
      "CMS integration",
      "Business branding",
      "Landing page design",
    ],
  },
  {
    number: "04",
    title: "App Development",
    desc: "Custom mobile apps for restaurants, real estate & e-commerce.",
    icon: Smartphone,
    details:
      "Custom mobile applications designed for modern businesses and scalable digital experiences.",
    points: [
      "Android & iOS apps",
      "Admin dashboards",
      "API integrations",
      "Modern app UI",
      "Booking systems",
      "E-commerce apps",
      "Business automation",
      "App maintenance",
    ],
  },
  {
    number: "05",
    title: "Social Media Management",
    desc: "Content creation, branding, reels & growth strategy for your business.",
    icon: Megaphone,
    details:
      "We help brands grow online through social media strategy, branding, reels, and content marketing.",
    points: [
      "Content creation",
      "Reels & short videos",
      "Brand strategy",
      "Instagram management",
      "Facebook marketing",
      "Audience growth",
      "Paid campaigns",
      "Social media reporting",
    ],
  },
];

// Animation variants for scroll-triggered cards
export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<any>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="relative py-28 bg-[#f8fafc] overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 left-0 w-[400px] h-[400px] bg-cyan-200/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-300/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADING WITH SCROLL ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* SMART AUTOMATION STYLE BADGE */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Expert Solutions
          </motion.div>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-slate-900">
            Powerful Solutions for <span className="text-cyan-500">Modern Businesses</span>
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            We help Pakistani businesses scale with accounting, digital systems, development, and marketing solutions.
          </p>
        </motion.div>

        {/* ARROWS - TOP RIGHT CORNER with animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-end gap-3 mb-6"
        >
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full border border-cyan-200 bg-white/80 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm cursor-pointer"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full border border-cyan-200 bg-white/80 text-cyan-600 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm cursor-pointer"
            aria-label="Next services"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -10 }}
              className="group relative min-w-[320px] max-w-[320px] rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 flex-shrink-0"
            >
              {/* NUMBER */}
              <div className="absolute top-6 right-6 text-3xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                {item.number}
              </div>

              {/* ICON */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>

              {/* READ MORE BUTTON - Refined, matches theme, no dark colors */}
              <button
                onClick={() => setSelectedService(item)}
                className="mt-6 inline-flex items-center gap-1 rounded-full px-5 py-2 text-sm font-medium text-cyan-600 bg-cyan-50 border border-cyan-200 hover:bg-cyan-100 hover:text-cyan-700 hover:border-cyan-300 transition-all duration-300 cursor-pointer"
              >
                Read More
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* BOTTOM ANIMATED BAR */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL - FULLY PRESERVED */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                <X className="h-4 w-4" />
              </button>

              {/* NUMBER */}
              <div className="text-sm font-semibold text-cyan-500">
                {selectedService.number}
              </div>

              {/* ICON */}
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                <selectedService.icon className="w-5 h-5" />
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {selectedService.title}
              </h3>

              {/* DETAILS */}
              <p className="mt-3 text-sm text-slate-500 leading-6">
                {selectedService.details}
              </p>

              <div className="my-6 h-px w-full bg-slate-200" />

              {/* POINTS GRID */}
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedService.points.map((point: string, idx: number) => (
                  <div key={idx} className="flex gap-2 p-3 rounded-lg bg-slate-50 border">
                    <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                    <p className="text-sm text-slate-600">{point}</p>
                  </div>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button className="px-5 py-2 text-sm rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition">
                  Talk To Expert
                </button>
                <button className="px-5 py-2 text-sm rounded-full border border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-500 transition">
                  Book Consultation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}