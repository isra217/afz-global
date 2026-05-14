"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Utensils,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const industries = [
  {
    title: "Real Estate",
    subtitle: "Property Developers",
    image: "/realestate.jpg",
    icon: Building2,
    description:
      "Premium digital systems for agencies and developers to generate leads and automate sales.",
    services: [
      "Property Websites",
      "CRM Systems",
      "Lead Funnels",
      "WhatsApp Automation",
    ],
  },

  {
    title: "Doctors & Clinics",
    subtitle: "Medical Centers",
    image: "/medical.jpg",
    icon: Stethoscope,
    description:
      "Healthcare booking systems focused on patient management and automation.",
    services: [
      "Appointment Booking",
      "Patient CRM",
      "AI Receptionist",
      "SMS Reminders",
    ],
  },

  {
    title: "Restaurants",
    subtitle: "Cafés & Food Brands",
    image: "/restaurant.jpg",
    icon: Utensils,
    description:
      "Modern ordering systems and branding solutions for restaurants and cafés.",
    services: [
      "Online Ordering",
      "Digital Menus",
      "Instagram Growth",
      "Delivery Integration",
    ],
  },

  {
    title: "E-Commerce",
    subtitle: "Online Stores",
    image: "/ecommerce.jpg",
    icon: ShoppingBag,
    description:
      "Complete e-commerce growth systems including stores, branding, and ads.",
    services: [
      "Shopify Development",
      "Paid Ads",
      "Brand Identity",
      "Sales Funnels",
    ],
  },
];

export default function Industries() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = isMobile
    ? industries.length - 1
    : industries.length - 3;

  const nextSlide = () => {
    if (index < maxIndex) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 bg-[#f8fbff]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Deep Expertise Across{" "}
            <span className="text-blue-600">Key Sectors</span>
          </h2>

          {/* ✅ RESTORED PARAGRAPH (YOUR ORIGINAL) */}
          <div className="flex items-center gap-4 mt-8 mb-8 justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-blue-300"></div>
            <p className="text-slate-600 text-sm font-medium px-4 whitespace-nowrap">
              Industries We Serve
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-blue-300"></div>
          </div>

          <p className="mt-5 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            From startups to enterprises, we create tailored systems designed for industry-specific growth.
          </p>

        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">

          {/* ARROWS */}
          <div className="flex justify-end gap-3 mb-8">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>

          {/* CAROUSEL */}
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: `-${index * (isMobile ? 100 : 33.333)}%`,
              }}
              transition={{ duration: 0.5 }}
              className="flex gap-6"
            >
              {industries.map((industry, i) => {
                const Icon = industry.icon;

                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="
                      bg-white rounded-[28px] overflow-hidden border shadow-sm
                      min-w-full md:min-w-[31.8%]
                    "
                  >

                    {/* IMAGE */}
                    <div className="relative h-[170px] overflow-hidden">
                      <img
                        src={industry.image}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4 w-11 h-11 bg-white/20 backdrop-blur-md flex items-center justify-center rounded-xl text-white">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <p className="text-blue-200 text-xs">
                          {industry.subtitle}
                        </p>
                        <h3 className="text-white text-xl font-bold">
                          {industry.title}
                        </h3>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <p className="text-sm text-slate-500">
                        {industry.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {industry.services.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">
            {industries.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all rounded-full ${
                  index === i
                    ? "w-8 h-2 bg-blue-600"
                    : "w-2 h-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}