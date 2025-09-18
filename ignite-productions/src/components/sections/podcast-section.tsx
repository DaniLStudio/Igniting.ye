'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Play, Mic, Headphones, Clock, Users, ExternalLink, ThumbsUp } from 'lucide-react';

export function PodcastSection() {
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
                <Mic className="w-4 h-4 text-primary-300" />
                <span className="text-sm font-medium text-primary-300">PODCAST</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight"
              >
                Conversations That
                <span className="block gradient-text">Ignite Purpose</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-black leading-relaxed"
              >
                Join us for deep conversations about faith, purpose, and the stories 
                that shape our lives. Each episode features inspiring guests and 
                meaningful discussions that challenge and encourage.
              </motion.p>
            </div>

            {/* Podcast Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 mb-2">50+</div>
                <div className="text-sm text-black uppercase tracking-wider">Episodes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300 mb-2">10K+</div>
                <div className="text-sm text-black uppercase tracking-wider">Listeners</div>
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
              <a
                href="https://www.youtube.com/@IYEPOD"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Listen Now</span>
              </a>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Headphones className="w-4 h-4" />
                <span>All Episodes</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="relative">
              {/* YouTube Channel Embed */}
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-white shadow-elegant border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-black">
                    <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-6 mx-auto shadow-subtle">
                      <Play className="w-12 h-12 text-black" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">@IYEPOD</h3>
                    <p className="text-black mb-4">YouTube Channel</p>
                    <a
                      href="https://www.youtube.com/@IYEPOD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-black rounded-full font-semibold hover:bg-gray-800 transition-colors"
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
                <Play className="w-10 h-10 text-black" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-neutral-600/20 rounded-3xl backdrop-blur-sm border border-neutral-600/30 flex items-center justify-center"
              >
                <ThumbsUp className="w-8 h-8 text-black" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
