"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const personalInfo = [
  { label: "Birthday", value: "Jul 25, 2006" },
  { label: "Phone", value: "+91 9031350700" },
  { label: "Email", value: "krisharyan.dev@gmail.com" },
  { label: "Address", value: "India, Remote" },
  { label: "Language", value: "English, Hindi" },
  { label: "Freelance", value: "Available" },
];

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section id="about" className="py-24 bg-bg-primary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white section-title-underline">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-[480px]">
              <div className="absolute -inset-2 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl" />
              <Image
                src="/images/about-portrait.jpg"
                alt="Krish Aryan"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 320px, 500px"
              />
              {/* Gold corner accent */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-gold rounded-br-2xl" />
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-text-white mb-2">
              Hi There! I&apos;m Krish Aryan
            </h3>
            <p className="text-gold font-medium text-lg mb-5">
              Fullstack Developer
            </p>
            <p className="text-text-gray leading-relaxed mb-8">
              I&apos;m a passionate Fullstack Developer with expertise in building
              scalable web applications and mobile solutions. With a strong
              foundation in both frontend and backend technologies, I create
              seamless digital experiences that drive results. I love turning
              complex problems into simple, beautiful solutions.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className="flex gap-2 min-w-0"
                >
                  <span className="text-text-muted font-medium min-w-[90px] shrink-0">
                    {info.label}:
                  </span>
                  <span
                    className={`break-all min-w-0 ${
                      info.label === "Freelance"
                        ? "text-gold font-semibold"
                        : "text-text-white"
                    }`}
                  >
                    {info.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-bg-primary font-semibold rounded-full hover:bg-gold-hover transition-colors duration-300 gold-glow"
            >
              <Download size={18} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
