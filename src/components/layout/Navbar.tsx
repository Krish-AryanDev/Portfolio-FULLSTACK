"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection } = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-1 group"
            >
              <span className="text-2xl font-bold text-text-white tracking-tight">
                Krish
              </span>
              <span className="text-2xl font-bold text-gold group-hover:scale-125 transition-transform duration-300">
                .
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 group"
                >
                  <span
                    className={`${
                      activeSection === link.href.slice(1)
                        ? "text-gold"
                        : "text-text-gray hover:text-text-white"
                    } transition-colors duration-300`}
                  >
                    {link.name}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: activeSection === link.href.slice(1) ? 1 : 0,
                    }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </a>
              ))}
            </div>

            {/* Phone Number */}
            <div className="hidden lg:flex items-center gap-2 text-text-gray">
              <Phone size={14} className="text-gold" />
              <a
                href="tel:+919031350700"
                className="text-sm hover:text-gold transition-colors duration-300"
              >
                +91 9031350700
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-gray hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-lg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`text-xl font-medium py-3 px-4 rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-gold bg-gold-dim"
                      : "text-text-gray hover:text-text-white hover:bg-bg-card"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center gap-2 text-text-gray mt-6 px-4">
                <Phone size={14} className="text-gold" />
                <a href="tel:+919031350700" className="text-sm">
                  +91 9031350700
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
