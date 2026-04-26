"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "fullstack", label: "Fullstack" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-bg-primary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white section-title-underline mx-auto">
            PORTFOLIO
          </h2>
          <p className="text-text-gray mt-6 max-w-2xl mx-auto">
            A collection of projects that showcase my expertise across the full
            development stack.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setShowAll(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gold text-bg-primary"
                  : "bg-bg-card border border-border text-text-gray hover:text-text-white hover:border-gold/30"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-bg-card"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-3">
                    <motion.h4
                      initial={{ y: 20 }}
                      className="text-xl font-bold text-text-white"
                    >
                      {project.title}
                    </motion.h4>
                    <p className="text-gold text-sm font-medium capitalize">
                      {project.category}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-bg-primary transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-bg-primary transition-all duration-300"
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-gold-dim text-gold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {filteredProjects.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-bg-primary transition-all duration-300"
            >
              Load More
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
