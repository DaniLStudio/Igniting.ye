'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink, Users, Calendar, ThumbsUp, Mic } from 'lucide-react';

export function YouTubeSection() {
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
              {/* YouTube Channel Embed */}
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-600 to-neutral-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-600/90 to-neutral-700/90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm border border-white/30">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">@ignitingy.e</h3>
                    <p className="text-white/90 mb-4">YouTube Channel</p>
                    <a
                      href="https://www.youtube.com/@ignitingy.e/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-neutral-600 rounded-full font-semibold hover:bg-white/90 transition-colors"
                    >
                      <span>Visit Channel</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 w-28 h-28 bg-neutral-500/20 rounded-3xl backdrop-blur-sm border border-neutral-500/30 flex items-center justify-center"
              >
                <Play className="w-10 h-10 text-neutral-500" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-neutral-600/20 rounded-3xl backdrop-blur-sm border border-neutral-600/30 flex items-center justify-center"
              >
                <ThumbsUp className="w-8 h-8 text-neutral-600" />
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
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-neutral-500/10 border border-neutral-500/20"
              >
                <Play className="w-4 h-4 text-neutral-500" />
                <span className="text-sm font-medium text-neutral-500">YOUTUBE CHANNEL</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 dark:text-white leading-tight"
              >
                Watch Our
                <span className="block gradient-text">Latest Content</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
              >
                Subscribe to our YouTube channel for exclusive content, behind-the-scenes 
                footage, event highlights, and inspiring conversations. Join our community 
                of viewers who are passionate about faith, purpose, and meaningful content.
              </motion.p>
            </div>

            {/* Channel Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-500 mb-2">5K+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-500 mb-2">100+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">Videos</div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neutral-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-300">Weekly podcast episodes and interviews</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neutral-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-300">Event highlights and behind-the-scenes content</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neutral-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-300">Music performances and production showcases</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-neutral-500 rounded-full" />
                <span className="text-neutral-600 dark:text-neutral-300">Inspirational messages and faith-based content</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://www.youtube.com/@ignitingy.e/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2 bg-neutral-500 hover:bg-neutral-600"
              >
                <Play className="w-4 h-4" />
                <span>Subscribe Now</span>
              </a>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Latest Videos</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
