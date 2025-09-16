'use client';

import { motion } from 'framer-motion';
import { Play, Mic, Users, Music } from 'lucide-react';

export function MediaHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="absolute inset-0 bg-luxury-gradient opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 1200, 
              y: Math.random() * 800, 
              scale: 0,
            }}
            animate={{ 
              x: Math.random() * 1200, 
              y: Math.random() * 800, 
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-2 h-2 bg-primary-300/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-width-content container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-none tracking-tight luxury-text-shadow">
            MEDIA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-4">
            Stories, Sounds & Experiences
          </p>
          <p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto">
            Dive into our world of podcasts, event hosting, and music production. 
            Discover the stories behind the scenes and the people who make it all happen.
          </p>
        </motion.div>

        {/* Media Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Mic className="w-10 h-10 text-primary-300" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
              Podcasts
            </div>
            <div className="text-sm sm:text-base text-white/70 font-medium uppercase tracking-wider">
              Conversations That Matter
            </div>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Users className="w-10 h-10 text-primary-300" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
              Events
            </div>
            <div className="text-sm sm:text-base text-white/70 font-medium uppercase tracking-wider">
              Hosting Excellence
            </div>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Music className="w-10 h-10 text-primary-300" />
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
              Music
            </div>
            <div className="text-sm sm:text-base text-white/70 font-medium uppercase tracking-wider">
              Sound & Soul
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
