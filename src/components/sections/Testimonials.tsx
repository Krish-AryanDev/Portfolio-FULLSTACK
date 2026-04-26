"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section id="testimonials" className="py-24 bg-bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white section-title-underline mx-auto">
            REVIEW
          </h2>
          <p className="text-text-gray mt-6 max-w-2xl mx-auto">
            What clients and colleagues say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-bg-card-hover rounded-xl border border-border hover:border-gold/20 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="text-gold/15 absolute top-6 right-6"
              />

              {/* Quote text */}
              <p className="text-text-gray text-sm leading-relaxed italic mb-8 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar with initials */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-hover flex items-center justify-center text-bg-primary font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gold text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
