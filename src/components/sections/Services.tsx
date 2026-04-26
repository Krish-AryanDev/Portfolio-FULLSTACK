"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Palette,
  Server,
  Smartphone,
  Cloud,
  Layout,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor,
  Palette,
  Server,
  Smartphone,
  Cloud,
  Layout,
};

export default function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 bg-bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white section-title-underline mx-auto">
            SERVICE
          </h2>
          <p className="text-text-gray mt-6 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with
            cutting-edge technology and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 bg-bg-card-hover rounded-xl border border-border hover:border-gold/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold-dim flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent
                      size={28}
                      className="text-gold"
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
