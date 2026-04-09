"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Eye } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#impact", label: "Impact" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <nav
        className=" border border-cream-300/50 bg-cream/70 backdrop-blur-md "
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto container px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-navy transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded-lg"
              aria-label="Drishti - Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy">
                <Eye className="h-5 w-5 text-amber" aria-hidden="true" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                Drishti
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-navy/80 transition-colors hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded-lg px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#cfac6e] px-6 py-3 text-base font-semibold text-[#FAF6F0] shadow-[0_12px_30px_rgba(15,33,55,0.18)] transition-all duration-300 hover:-translate-y-0.5 t focus:outline-none"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden flex h-12 w-12 items-center justify-center rounded-lg text-navy transition-colors hover:bg-cream-300/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
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
              className="lg:hidden overflow-hidden"
            >
              <div className="border-t border-cream-300/50 px-6 py-6">
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
                        className="block text-xl font-medium text-navy/80 transition-colors hover:text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 rounded-lg px-2 py-2"
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
                      className="inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-4 text-lg font-semibold text-cream transition-all hover:bg-navy-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2"
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
