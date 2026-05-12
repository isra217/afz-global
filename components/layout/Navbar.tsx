"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#process" },
    { name: "Industries", href: "#industries" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About Us", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#081120]/80 backdrop-blur-2xl border-b border-white/10 py-4 shadow-lg"
            : "bg-transparent py-6"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* ================= LOGO ================= */}
        <Link href="/" className="flex items-center gap-3 group">

          {/* LOGO ICON */}
          <Image
            src="/logo.png"
            alt="AFZ Global"
            width={32}
            height={32}
            priority
            className="
              object-contain
              bg-transparent
              drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]
              transition-transform duration-300
              group-hover:scale-110
            "
          />

          {/* TEXT */}
          <span className="text-white font-semibold tracking-wide text-lg">
            AFZ <span className="text-cyan-400">Global</span>
          </span>

        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">

          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="
                  relative text-white/80 hover:text-white transition-all
                  after:absolute after:left-0 after:-bottom-2
                  after:h-0.5 after:w-0 after:bg-cyan-400
                  after:transition-all hover:after:w-full
                "
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* ================= CTA ================= */}
        <button
          className="
            hidden lg:block
            bg-gradient-to-r from-cyan-400 to-blue-400
            text-slate-950
            px-6 py-3
            rounded-xl font-semibold
            hover:scale-105 transition-all
            shadow-lg shadow-cyan-500/20
          "
        >
          Contact Us
        </button>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            mx-6 mt-4 rounded-2xl
            bg-[#0B1F3A]/95 backdrop-blur-xl
            border border-white/10 p-6
            space-y-5 shadow-2xl
          "
        >

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-cyan-300 transition text-sm"
            >
              {item.name}
            </Link>
          ))}

          <button
            className="
              w-full bg-cyan-400 text-slate-950
              py-3 rounded-xl font-semibold
              hover:bg-cyan-300 transition
            "
          >
            Book Consultation
          </button>

        </div>
      </div>

    </header>
  );
}