"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
    "Accounting & Taxation",
    "Company Formation",
    "Website Development",
    "App & CRM Development",
    "AI & Automation",
  ];

  const industries = [
    "Real Estate",
    "Doctors & Clinics",
    "Restaurants & Cafés",
    "E-Commerce Brands",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.03, duration: 0.3 },
    }),
  };

  return (
    <footer className="relative overflow-hidden bg-[#f8fbff] text-slate-900 pt-16">

      {/* BACKGROUND GLOW (SOFT BLUE LIKE YOUR WEBSITE) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl opacity-40" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-8 pb-12 border-b border-slate-200"
        >

          {/* BRAND */}
          <motion.div variants={itemVariants}>

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/logo.png"
                alt="AFZ Global"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h2 className="text-xl font-semibold">
                  AFZ Global Pakistan
                </h2>
                <p className="text-sm text-slate-500">
                  Digital Growth Partner
                </p>
              </div>
            </div>

            <p className="mt-6 text-slate-600 leading-7 max-w-sm">
              Helping businesses scale with modern websites,
              automation systems, accounting solutions, branding,
              and growth-focused execution.
            </p>

            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-sm transition"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition"
            >
              Start Project
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-600" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* INDUSTRIES */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-4">
              {industries.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    href="#"
                    className="text-slate-600 hover:text-blue-600 transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-600" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>

            <div className="space-y-4">

              {[ 
                { icon: MapPin, label: "Office", value: "Rawalpindi, Pakistan" },
                { icon: Phone, label: "Phone", value: "+92 300 1234567" },
                { icon: Mail, label: "Email", value: "info@afzglobal.pk" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition"
                >
                  <item.icon className="text-blue-600" size={18} />
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm text-slate-800">{item.value}</p>
                  </div>
                </div>
              ))}

            </div>
          </motion.div>

        </motion.div>

        {/* BOTTOM */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-slate-500">
            © {year} AFZ Global Pakistan. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}