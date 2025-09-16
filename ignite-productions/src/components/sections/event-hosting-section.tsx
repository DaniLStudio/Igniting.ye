'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar, Mic, Star, ArrowRight } from 'lucide-react';

export function EventHostingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-width-content container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            style={{ y }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
                {/* Placeholder for event host image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm border border-white/20">
                      <Users className="w-16 h-16 text-primary-300" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Event Host</h3>
                    <p className="text-white/70">Creating unforgettable experiences</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 w-28 h-28 bg-primary-300/20 rounded-3xl backdrop-blur-sm border border-primary-300/30 flex items-center justify-center"
              >
                <Calendar className="w-10 h-10 text-primary-300" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-500/20 rounded-3xl backdrop-blur-sm border border-secondary-500/30 flex items-center justify-center"
              >
                <Star className="w-8 h-8 text-secondary-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ opacity }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-300/10 border border-primary-300/20"
              >
                <Users className="w-4 h-4 text-primary-300" />
                <span className="text-sm font-medium text-primary-300">EVENT HOSTING</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 dark:text-white leading-tight"
              >
                Hosting Events
                <span className="block gradient-text">That Inspire</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
              >
                From intimate gatherings to large-scale conferences, we bring energy, 
                professionalism, and heart to every event. Our hosting style creates 
                connections and memorable moments that last long after the event ends.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-300 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-300">Dynamic and engaging presentation style</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-300 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-300">Expert audience interaction and engagement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-300 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-300">Seamless event flow and timing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-300 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-300">Professional stage presence and charisma</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Mic className="w-4 h-4" />
                <span>Book Hosting</span>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <ArrowRight className="w-4 h-4" />
                <span>View Portfolio</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
