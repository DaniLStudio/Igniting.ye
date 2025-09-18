'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Users, Hash, ExternalLink } from 'lucide-react';

export function DiscordSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-100 to-white">
      <div className="max-width-content container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            style={{ opacity }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/5 border border-black/10"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span className="text-sm font-medium text-black">DISCORD COMMUNITY</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight"
              >
                Join Our
                <span className="block gradient-text">Faith Community</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Connect with like-minded individuals, share your faith journey, 
                and be part of a supportive community that grows together in 
                Christ. Join our Discord server for daily encouragement and fellowship.
              </motion.p>
            </div>

            {/* Discord Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">24/7</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">10+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Channels</div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-gray-600">Daily devotionals and prayer requests</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-gray-600">Event announcements and updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-gray-600">Music sharing and collaboration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="text-gray-600">Study groups and Bible discussions</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://discord.gg/your-invite-link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Discord</span>
              </a>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Learn More</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            style={{ y }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Discord Server Widget */}
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-white shadow-elegant border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-black">
                    <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-6 mx-auto shadow-subtle">
                      <MessageCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Igniting.ye Community</h3>
                    <p className="text-gray-600 mb-4">Discord Server</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>500+ members online</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Hash className="w-4 h-4" />
                        <span>10+ active channels</span>
                      </div>
                    </div>
                    <a
                      href="https://discord.gg/your-invite-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors mt-6"
                    >
                      <span>Join Server</span>
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
                className="absolute -top-6 -left-6 w-28 h-28 bg-black/5 rounded-2xl backdrop-blur-sm border border-black/10 flex items-center justify-center"
              >
                <Users className="w-10 h-10 text-black" />
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
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-3xl backdrop-blur-sm border border-purple-500/30 flex items-center justify-center"
              >
                <Hash className="w-8 h-8 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
