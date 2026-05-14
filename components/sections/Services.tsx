"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
    image: "/accounting.jpg",
    desc: "Professional bookkeeping, tax filing & financial management.",
    icon: FileText,
    details:
      "Complete accounting, taxation, payroll, compliance, and financial solutions.",
    points: [
      "Bookkeeping management",
      "Tax filing & compliance",
      "Payroll solutions",
      "Financial reporting",
    ],
  },
  {
    number: "02",
    title: "Company Formation",
    image: "/company.png",
    desc: "Business registration & startup setup.",
    icon: Building2,
    details: "We help you register and launch your business legally.",
    points: ["SECP registration", "NTN setup", "Legal guidance", "Business setup"],
  },
  {
    number: "03",
    title: "Website Development",
    image: "/web.jpeg",
    desc: "Modern responsive websites.",
    icon: Globe,
    details: "High performance websites focused on growth and branding.",
    points: ["UI/UX design", "SEO", "Fast websites", "Responsive design"],
  },
  {
    number: "04",
    title: "App Development",
    image: "/app.jpg",
    desc: "Mobile applications for business.",
    icon: Smartphone,
    details: "Scalable mobile apps for Android & iOS.",
    points: ["Android/iOS", "Dashboards", "API integration", "Automation"],
  },
  {
    number: "05",
    title: "Social Media",
    image: "/social.jpg",
    desc: "Marketing & branding.",
    icon: Megaphone,
    details: "Grow your business through content & ads.",
    points: ["Content creation", "Ads", "Strategy", "Growth"],
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<any>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">

      {/* BACKGROUND GLOWS (YOUR THEME) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-indigo-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive{" "}
            <span className="text-blue-600">Business Solutions</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Tailored services designed for modern Pakistani businesses.
          </p>
        </div>

        {/* ARROWS */}
        <div className="flex justify-end gap-3 mb-8">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
        >
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={i}
                className="relative min-w-[340px] h-[420px] rounded-[28px] overflow-hidden group cursor-pointer shadow-sm border border-gray-200"
              >

                {/* IMAGE */}
                <img
                  src={s.image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* DARKER OVERLAY (FIXED FOR TEXT VISIBILITY) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:bg-blue-900/70 transition duration-500" />

                {/* DEFAULT CONTENT (VISIBLE INITIALLY) */}
                <div className="absolute bottom-5 left-5 right-5 group-hover:opacity-0 transition duration-300">
                  <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <Icon className="text-white" size={18} />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {s.title}
                  </h3>

                  <p className="text-sm text-white/90">{s.desc}</p>
                </div>

                {/* HOVER CONTENT (SHOWS ONLY ON HOVER) */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition duration-500">

                  <h3 className="text-xl font-bold text-white">
                    {s.title}
                  </h3>

                  <p className="text-sm text-blue-100 mt-2">
                    {s.details}
                  </p>

                  <ul className="mt-4 space-y-1 text-sm text-blue-100">
                    {s.points.map((p, i) => (
                      <li key={i}>• {p}</li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-xl p-8 rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)}>
              <X />
            </button>

            <h2 className="text-2xl font-bold mt-4 text-blue-600">
              {selected.title}
            </h2>

            <p className="mt-3 text-gray-600">{selected.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}