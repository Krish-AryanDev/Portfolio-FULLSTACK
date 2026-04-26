"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { education, experiences } from "@/data/experience";

export default function Resume() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="resume" className="py-24 bg-bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white section-title-underline mx-auto">
            RESUME
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-dim flex items-center justify-center">
                <GraduationCap size={20} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-text-white">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="relative pl-8 border-l-2 border-border hover:border-gold/50 transition-colors duration-300 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-sm bg-gold rotate-45 group-hover:scale-125 transition-transform duration-300" />

                  <div className="pb-8">
                    <h4 className="text-lg font-semibold text-text-white mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-gold text-sm font-medium mb-1">
                      {item.dateRange}
                    </p>
                    <p className="text-text-muted text-sm mb-2">
                      {item.institution}
                    </p>
                    <p className="text-text-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-dim flex items-center justify-center">
                <Briefcase size={20} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-text-white">Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="relative pl-8 border-l-2 border-border hover:border-gold/50 transition-colors duration-300 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-sm bg-gold rotate-45 group-hover:scale-125 transition-transform duration-300" />

                  <div className="pb-8">
                    <h4 className="text-lg font-semibold text-text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gold text-sm font-medium mb-1">
                      {item.dateRange}
                    </p>
                    <p className="text-text-muted text-sm mb-2">
                      {item.company} · {item.location}
                    </p>
                    <p className="text-text-gray text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
