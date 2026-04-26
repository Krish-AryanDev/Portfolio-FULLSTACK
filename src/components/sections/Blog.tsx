"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section id="blog" className="py-24 bg-bg-primary">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white section-title-underline mx-auto">
            BLOG
          </h2>
          <p className="text-text-gray mt-6 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my development journey.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-bg-card rounded-xl border border-border hover:border-gold/20 overflow-hidden transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />

                {/* Category Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-bg-primary text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-white mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-text-muted text-xs">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <span className="text-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
