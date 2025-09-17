'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Award, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AboutHero() {
  const stats = [
    { number: "5+", label: "Years of Excellence", icon: Award },
    { number: "500+", label: "Events Produced", icon: Heart },
    { number: "10K+", label: "Lives Touched", icon: Users },
    { number: "100%", label: "Christ-Centered", icon: Sparkles },
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
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(45, 27, 105, 0.3) 0%, transparent 50%)
            `,
          }}
        />
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
            <Sparkles className="w-6 h-6 text-primary-300/20" />
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
          className="inline-flex items-center space-x-2 bg-primary-300/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-300/20"
        >
          <Heart className="w-5 h-5 text-primary-300" />
          <span className="text-primary-300 font-medium uppercase tracking-wider text-sm">
            Our Story
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold gradient-text mb-8 leading-none tracking-tight"
        >
          Igniting Hearts
          <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            Through Excellence
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          We are passionate about serving the body of Christ through professional 
          music production, live events, and creative services that glorify God 
          and bring people together in meaningful ways.
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-300/10 backdrop-blur-sm border border-primary-300/20 mb-4 group-hover:bg-primary-300/20 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary-300" />
              </div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
