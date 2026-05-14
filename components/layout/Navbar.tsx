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
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm"
            : "bg-white py-5"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* ================= LOGO (STACKED) ================= */}
        <Link href="/" className="flex flex-col items-center gap-1 group">

          <Image
            src="/logo.png"
            alt="AF Global"
            width={34}
            height={34}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <span className="text-sm font-semibold text-gray-900 leading-none">
            AFZ <span className="text-blue-600">Global</span>
          </span>

        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">

          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="
                  relative hover:text-blue-600 transition
                  after:absolute after:left-0 after:-bottom-2
                  after:h-0.5 after:w-0 after:bg-blue-600
                  after:transition-all hover:after:w-full
                "
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* ================= CTA BUTTON ================= */}
        <Link
          href="#contact"
          className="
            hidden lg:block
            bg-blue-600 text-white
            px-6 py-2.5 rounded-lg
            font-medium
            hover:bg-blue-700
            transition-all
            shadow-sm
          "
        >
          Get Started
        </Link>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-900"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-6 mt-4 rounded-xl bg-white border border-gray-200 p-5 space-y-4 shadow-md">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-blue-600 transition text-sm"
            >
              {item.name}
            </Link>
          ))}

          <button
            className="
              w-full bg-blue-600 text-white
              py-3 rounded-lg font-medium
              hover:bg-blue-700 transition
            "
          >
            Contact Us
          </button>

        </div>
      </div>

    </header>
  );
}