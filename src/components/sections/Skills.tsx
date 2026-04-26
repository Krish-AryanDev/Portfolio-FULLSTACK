"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { skills } from "@/data/skills";

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-24 bg-bg-primary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white section-title-underline">
            SKILLS
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-white leading-snug mb-6 italic">
              All the skills that I have in that field of work are mentioned.
            </h3>
            <p className="text-text-gray leading-relaxed mb-6">
              I&apos;ve honed my skills across the entire development stack — from
              crafting pixel-perfect frontends with React and Next.js to building
              robust, scalable backends with Node.js and Go. My expertise spans
              databases, cloud infrastructure, mobile development, and DevOps
              practices.
            </p>
            <p className="text-text-gray leading-relaxed">
              Every project is an opportunity to push boundaries and deliver
              excellence. I stay up-to-date with the latest technologies and
              best practices to ensure my work is always at the cutting edge.
            </p>
          </motion.div>

          {/* Right - Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-white font-medium text-sm">
                    {skill.name}
                  </span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-gold font-semibold text-sm"
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
                <div className="h-2.5 bg-bg-card-hover rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${skill.percentage}%` } : { width: 0 }
                    }
                    transition={{
                      duration: 1.2,
                      delay: 0.4 + index * 0.12,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-gold to-gold-hover rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-full" />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
