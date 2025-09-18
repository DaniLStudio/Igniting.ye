'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Music, Play, Headphones, Volume2, ArrowRight } from 'lucide-react';

export function MusicSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="max-width-content container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            style={{ opacity }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-300/10 border border-primary-300/20"
              >
                <Music className="w-4 h-4 text-primary-300" />
                <span className="text-sm font-medium text-primary-300">VIDEO PRODUCTION</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 dark:text-white leading-tight"
              >
                Professional
                <span className="block gradient-text">Cinematography & Editing</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
              >
                High-quality video production services including cinematography, editing, 
                and post-production for events, music videos, and promotional content. 
                We bring your vision to life with professional excellence.
              </motion.p>
            </div>

            {/* Video Production Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 mb-2">200+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 mb-2">50+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 mb-2">500K+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Views</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>View Portfolio</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Headphones className="w-4 h-4" />
                <span>Get Quote</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
                {/* Placeholder for video production image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm border border-white/20">
                      <Play className="w-16 h-16 text-primary-300" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Video Producer</h3>
                    <p className="text-white/70">Professional cinematography & editing</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary-300/20 rounded-2xl backdrop-blur-sm border border-primary-300/30 flex items-center justify-center"
              >
                <Volume2 className="w-8 h-8 text-primary-300" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 18, 0],
                  rotate: [0, -6, 0]
                }}
                transition={{ 
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary-500/20 rounded-2xl backdrop-blur-sm border border-secondary-500/30 flex items-center justify-center"
              >
                <Play className="w-6 h-6 text-secondary-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
