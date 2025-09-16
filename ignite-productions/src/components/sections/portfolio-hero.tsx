'use client';

import { motion } from 'framer-motion';
import { Camera, Users, Calendar, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function PortfolioHero() {
  const stats = [
    { number: "500+", label: "Events Produced", icon: Calendar },
    { number: "50+", label: "Artists Served", icon: Users },
    { number: "10K+", label: "Lives Touched", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Camera },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Using the formal event photo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/formal-event.jpg')`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{ 
              y: [0, -30, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Sparkles className="w-6 h-6 text-primary-300/30" />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="relative z-20 max-width-content container-padding text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
        >
          <Camera className="w-5 h-5 text-primary-300" />
          <span className="text-primary-300 font-medium uppercase tracking-wider text-sm">
            Our Portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-none tracking-tight"
          style={{
            textShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
          }}
        >
          Moments That
          <span className="block bg-gradient-to-r from-primary-300 to-secondary-400 bg-clip-text text-transparent">
            Matter
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          Every event tells a story. Every production creates memories. 
          Explore our portfolio of successful projects that have brought joy, 
          inspiration, and community together.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary-300" />
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/70 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
