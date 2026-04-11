"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Eye } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#impact", label: "Impact" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#141414]/80 backdrop-blur-md border-white/10 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto container px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3  transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] rounded-lg"
              aria-label="Drishti - Home"
            >
              <Image
                src="/logo.png"
                alt="Drishti Logo"
                width={120}
                height={32}
                className="object-cover"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium ${scrolled ? "text-gray-100" : "text-gray-900"} transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-lg px-2 py-1`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#333] border border-white/10 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#cfac6e] hover:text-[#141414] focus:outline-none"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-[#141414] border-b border-white/10"
            >
              <div className="px-6 py-6">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block text-lg font-medium text-gray-400 transition-colors hover:text-white px-2 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="pt-4"
                  >
                    <Link
                      href="#contact"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#cfac6e] px-6 py-4 text-lg font-semibold text-[#141414] transition-all hover:bg-[#b5965e]"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
