"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Krish-AryanDev",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/krish-aryan-868890370/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1">
            <span className="text-2xl font-bold text-text-white">Krish</span>
            <span className="text-2xl font-bold text-gold">.</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-border bg-bg-card-hover flex items-center justify-center text-text-gray hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <p className="text-text-muted text-sm text-center flex items-center gap-1.5">
            © {new Date().getFullYear()} Krish Aryan. Made with
            <Heart size={14} className="text-gold fill-gold" />
            All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-6 -top-5 w-10 h-10 rounded-full bg-gold text-bg-primary flex items-center justify-center shadow-lg gold-glow hover:bg-gold-hover transition-colors duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
