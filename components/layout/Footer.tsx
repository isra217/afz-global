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

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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

  const contactVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.3, type: "spring" },
    }),
  };

  return (
    <footer className="relative overflow-hidden bg-[#071120] text-white pt-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* GRID BACKGROUND */}
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
              opacity: [0, 0.2, 0],
              y: [0, -50],
              x: [0, (Math.random() - 0.5) * 60],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.2,
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="
          grid
          lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]
          gap-12
          pb-16
          border-b
          border-white/10
          "
        >
          {/* BRAND */}
          <motion.div variants={itemVariants}>
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="
                w-12
                h-12
                rounded-2xl
                bg-cyan-400/10
                border
                border-cyan-400/20
                flex
                items-center
                justify-center
                text-cyan-300
                font-bold
                text-lg
                "
              >
                AFZ
              </motion.div>

              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  AFZ Global Pakistan
                </h2>
                <p className="text-sm text-slate-400">
                  Digital Growth Partner
                </p>
              </div>
            </div>

            {/* DESC */}
            <p
              className="
              mt-6
              text-slate-300
              leading-8
              max-w-sm
              "
            >
              Helping businesses scale with modern websites,
              automation systems, accounting solutions,
              branding, and growth-focused execution.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#22d3ee" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-cyan-400
              px-6
              py-3
              text-sm
              font-semibold
              text-slate-950
              shadow-xl
              shadow-cyan-500/20
              hover:shadow-cyan-500/40
              transition-all
              duration-300
              cursor-pointer
              "
            >
              Start Your Project
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
                    className="
                    text-slate-300
                    text-sm
                    hover:text-cyan-400
                    transition
                    flex
                    items-center
                    gap-2
                    group
                    "
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-cyan-400/60
                      group-hover:bg-cyan-400
                      transition
                      "
                    />
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
                    className="
                    text-slate-300
                    text-sm
                    hover:text-cyan-400
                    transition
                    flex
                    items-center
                    gap-2
                    group
                    "
                  >
                    <motion.span
                      whileHover={{ scale: 1.2 }}
                      className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-cyan-400/60
                      group-hover:bg-cyan-400
                      transition
                      "
                    />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-5">
              {/* LOCATION */}
              <motion.div
                custom={0}
                variants={contactVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
                hover:border-cyan-400/30
                hover:bg-cyan-500/5
                transition-all
                duration-300
                group
                "
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="
                  w-10
                  h-10
                  rounded-xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                  shrink-0
                  group-hover:bg-cyan-400/20
                  transition-all
                  "
                >
                  <MapPin size={18} />
                </motion.div>

                <div>
                  <p className="text-sm text-slate-400">Office</p>
                  <p className="mt-1 text-sm text-white group-hover:text-cyan-300 transition-colors">
                    Rawalpindi, Pakistan
                  </p>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div
                custom={1}
                variants={contactVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
                hover:border-cyan-400/30
                hover:bg-cyan-500/5
                transition-all
                duration-300
                group
                "
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="
                  w-10
                  h-10
                  rounded-xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                  shrink-0
                  group-hover:bg-cyan-400/20
                  transition-all
                  "
                >
                  <Phone size={18} />
                </motion.div>

                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="mt-1 text-sm text-white group-hover:text-cyan-300 transition-colors">
                    +92 300 1234567
                  </p>
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                custom={2}
                variants={contactVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
                hover:border-cyan-400/30
                hover:bg-cyan-500/5
                transition-all
                duration-300
                group
                "
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="
                  w-10
                  h-10
                  rounded-xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                  shrink-0
                  group-hover:bg-cyan-400/20
                  transition-all
                  "
                >
                  <Mail size={18} />
                </motion.div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-1 text-sm text-white group-hover:text-cyan-300 transition-colors">
                    info@afzglobal.pk
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="
          py-7
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          "
        >
          {/* COPYRIGHT */}
          <p className="text-sm text-slate-500">
            © {year} AFZ Global Pakistan. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            {[
              { Icon: FaFacebookF, color: "#1877f2" },
              { Icon: FaInstagram, color: "#e4405f" },
              { Icon: FaLinkedinIn, color: "#0077b5" },
              { Icon: FaTwitter, color: "#1da1f2" },
            ].map(({ Icon, color }, i) => (
              <motion.a
                key={i}
                href="#"
                custom={i}
                variants={socialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  borderColor: color,
                  backgroundColor: `${color}15`,
                }}
                whileTap={{ scale: 0.95 }}
                className="
                w-11
                h-11
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-slate-300
                hover:text-cyan-300
                hover:border-cyan-400/30
                hover:bg-cyan-500/10
                transition-all
                duration-300
                cursor-pointer
                "
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}