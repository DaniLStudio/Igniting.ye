'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Star, Sparkles, Ticket } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function WinterBall2026Hero() {
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/formal-event.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
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
          <Star className="w-5 h-5 text-primary-300" />
          <span className="text-primary-300 font-medium uppercase tracking-wider text-sm">
            Pre-Order Now Available
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
          Winter Ball
          <span className="block bg-gradient-to-r from-primary-300 to-secondary-400 bg-clip-text text-transparent">
            2026
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          An unforgettable evening of elegance, worship, and celebration under the winter stars. 
          Join us for gourmet dining, live music, and dancing in a magical atmosphere.
        </motion.p>

        {/* Event Details */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
        >
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Calendar className="w-8 h-8 text-primary-300" />
            </div>
            <div className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
              Jan 18
            </div>
            <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
              2026
            </div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Clock className="w-8 h-8 text-primary-300" />
            </div>
            <div className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
              7:00 PM
            </div>
            <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
              - 11:00 PM
            </div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary-300" />
            </div>
            <div className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
              Heritage
            </div>
            <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
              Hotel
            </div>
          </div>
          
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Users className="w-8 h-8 text-primary-300" />
            </div>
            <div className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
              200
            </div>
            <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
              Guests Max
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/events/winterball-2026/purchase"
            className="btn-primary text-lg px-10 py-5 shadow-2xl hover:shadow-glow-gold flex items-center space-x-3"
          >
            <Ticket className="w-6 h-6" />
            <span>Pre-Order Tickets - $65</span>
          </Link>
          <Link
            href="#event-details"
            className="btn-secondary text-lg px-10 py-5 text-white border-white/30 hover:bg-white hover:text-neutral-900"
          >
            Event Details
          </Link>
        </motion.div>

        {/* Early Bird Notice */}
        <motion.div
          variants={itemVariants}
          className="mt-8 inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/30"
        >
          <span className="text-green-300 font-medium text-sm">
            🎉 Early Bird Special: Save $20! Regular price $85
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
