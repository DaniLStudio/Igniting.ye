'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactHero() {
  const contactMethods = [
    { icon: Mail, title: 'Email Us', description: 'hello@igniting.ye', href: 'mailto:hello@igniting.ye' },
    { icon: Phone, title: 'Call Us', description: '(123) 456-7890', href: 'tel:+1234567890' },
    { icon: MapPin, title: 'Visit Us', description: 'Serving Nationwide', href: '#' },
    { icon: MessageCircle, title: 'Live Chat', description: 'Available 24/7', href: '#' },
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
          <MessageCircle className="w-5 h-5 text-primary-300" />
          <span className="text-primary-300 font-medium uppercase tracking-wider text-sm">
            Get In Touch
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold gradient-text mb-8 leading-none tracking-tight"
        >
          Let's Create
          <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
            Something Amazing
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          Ready to bring your vision to life? We're here to help you create 
          unforgettable experiences that honor God and bring people together. 
          Let's start the conversation.
        </motion.p>

        {/* Contact Methods */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              className="group text-center p-6 luxury-card hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-300/10 backdrop-blur-sm border border-primary-300/20 mb-4 group-hover:bg-primary-300/20 transition-all duration-300">
                <method.icon className="w-8 h-8 text-primary-300" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-primary-300 transition-colors">
                {method.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {method.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
