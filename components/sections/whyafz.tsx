"use client";

import { motion } from "framer-motion";
import { Globe, BarChart3, Handshake } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Network Access",
    desc: "Connect with vetted partners, buyers, and investors across 30+ countries through our established international network.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    desc: "Every recommendation is backed by rigorous market research, industry benchmarks, and competitive intelligence.",
  },
  {
    icon: Handshake,
    title: "End-to-End Execution",
    desc: "We don’t just consult — we partner with you from strategy through implementation and measurable results.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-[#f8fbff]">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= RIGHT CONTENT (NOW MOBILE FIRST) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >

            <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              Pakistan's Gateway to{" "}
              <span className="text-blue-600">Global Business</span>
            </h2>

            <div className="flex items-center gap-4 mt-8 mb-8 justify-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-300"></div>
              <p className="text-slate-600 text-sm font-medium px-4 whitespace-nowrap">
                Who We Are
              </p>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-300"></div>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              AFZ Global is a full-service business solutions firm headquartered in Pakistan,
              dedicated to empowering local enterprises with international-grade expertise,
              strategic advisory, and execution support.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item, i) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="
                      group flex gap-4 p-5 rounded-2xl bg-white border border-slate-100
                      shadow-sm hover:shadow-xl transition
                    "
                  >
                    <div className="flex-shrink-0">
                      <div className="
                        w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center
                        text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition
                      ">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
                mt-10 px-8 py-4 rounded-xl bg-blue-600 text-white font-medium
                shadow-lg hover:bg-blue-700 transition
              "
            >
              Learn More About Us
            </motion.button>

          </motion.div>

          {/* ================= LEFT IMAGE (NOW MOBILE SECOND) ================= */}
          <motion.div
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="absolute w-[520px] h-[520px] bg-blue-200/40 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-[600px] lg:max-w-[650px]">
              <motion.img
                src="/about-image.png"
                alt="AFZ Global"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  w-full h-auto object-contain
                  drop-shadow-[0_25px_60px_rgba(37,99,235,0.20)]
                "
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}