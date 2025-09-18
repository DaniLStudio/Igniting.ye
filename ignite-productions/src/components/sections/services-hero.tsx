'use client';

import { motion } from 'framer-motion';
import { Music, Calendar, Users, Megaphone, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ServicesHero() {
  const services = [
    { icon: Music, title: 'Music Production', description: 'Professional recording and mixing' },
    { icon: Calendar, title: 'Live Events', description: 'Concerts and worship services' },
    { icon: Users, title: 'Event Planning', description: 'Complete event coordination' },
    { icon: Megaphone, title: 'Digital Marketing', description: 'Social media and promotion' },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
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
          <Music className="w-5 h-5 text-primary-300" />
          <span className="text-primary-300 font-medium uppercase tracking-wider text-sm">
            Our Services
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold gradient-text mb-8 leading-none tracking-tight"
        >
          Excellence in Every
          <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            Service
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          From intimate worship services to grand celebrations, we deliver 
          Christ-centered excellence in music production, live events, and creative services.
        </motion.p>

        {/* Services Preview */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-300/10 backdrop-blur-sm border border-primary-300/20 mb-4 group-hover:bg-primary-300/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary-300" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
