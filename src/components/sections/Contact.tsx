"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Github,
  Linkedin,
  Loader2,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "India (Available Remote Worldwide)",
    },
    { icon: Phone, label: "Phone", value: "+91 9031350700" },
    { icon: Mail, label: "Email", value: "krisharyan.dev@gmail.com" },
  ];

  return (
    <section id="contact" className="py-24 bg-bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white section-title-underline mx-auto">
            CONTACT
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-text-white mb-2">
              Just Say Hello!
            </h3>
            <p className="text-text-gray mb-8">
              Have a project in mind or just want to chat? Drop me a message and
              I&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-bg-card-hover border border-border rounded-xl text-text-white placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-bg-card-hover border border-border rounded-xl text-text-white placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
                  />
                </div>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-bg-card-hover border border-border rounded-xl text-text-white placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors duration-300 text-sm"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-3.5 bg-bg-card-hover border border-border rounded-xl text-text-white placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors duration-300 text-sm resize-none"
              />

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
                className={`inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : "bg-gold text-bg-primary hover:bg-gold-hover gold-glow"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "loading" && (
                  <Loader2 size={18} className="animate-spin" />
                )}
                {status === "success" && <CheckCircle size={18} />}
                {status === "idle" && <Send size={18} />}
                {status === "error" && <Send size={18} />}
                {status === "loading"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent!"
                  : "Send Message"}
              </motion.button>

              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
              )}
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-text-white mb-2">
              Contact Info
            </h3>
            <p className="text-text-gray mb-8">
              Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-dim flex items-center justify-center shrink-0">
                    <info.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-text-white font-medium text-sm">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Freelance Status */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-gold-dim border border-gold/20"
              >
                <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                <span className="text-gold font-semibold text-sm">
                  Available for Freelance Work
                </span>
              </motion.div>
            </div>

            {/* Social Icons */}
            <div>
              <p className="text-text-muted text-sm mb-4">Follow me</p>
              <div className="flex items-center gap-3">
                {[
                  {
                    Icon: Github,
                    href: "https://github.com/Krish-AryanDev",
                    label: "GitHub",
                  },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/krish-aryan-868890370/",
                    label: "LinkedIn",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-full border border-border bg-bg-card-hover flex items-center justify-center text-text-gray hover:text-gold hover:border-gold transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
