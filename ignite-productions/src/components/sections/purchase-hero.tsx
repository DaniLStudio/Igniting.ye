'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function PurchaseHero() {
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
    <section className="relative py-16 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-width-content container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/events/winterball-2026"
              className="inline-flex items-center space-x-2 text-primary-300 hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Event Details</span>
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-primary-300/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-300/20"
          >
            <Star className="w-5 h-5 text-primary-300" />
            <span className="text-primary-300 font-medium uppercase tracking-wider text-sm">
              Secure Your Tickets
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-serif font-bold gradient-text mb-6 leading-tight"
          >
            Winter Ball 2026
            <span className="block text-2xl md:text-3xl text-neutral-600 dark:text-neutral-300 font-normal mt-2">
              Ticket Purchase
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-12"
          >
            Complete your purchase below to secure your spot at this exclusive formal event. 
            Early bird pricing available until December 31, 2025.
          </motion.p>

          {/* Event Quick Info */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-300/10 border border-primary-300/20 mb-3 group-hover:bg-primary-300/20 transition-all duration-300">
                <Calendar className="w-6 h-6 text-primary-300" />
              </div>
              <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                January 18, 2026
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Saturday Evening
              </div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-300/10 border border-primary-300/20 mb-3 group-hover:bg-primary-300/20 transition-all duration-300">
                <Clock className="w-6 h-6 text-primary-300" />
              </div>
              <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                7:00 PM - 11:00 PM
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                4 Hours of Elegance
              </div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-300/10 border border-primary-300/20 mb-3 group-hover:bg-primary-300/20 transition-all duration-300">
                <MapPin className="w-6 h-6 text-primary-300" />
              </div>
              <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                Heritage Hotel
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Grand Ballroom
              </div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-300/10 border border-primary-300/20 mb-3 group-hover:bg-primary-300/20 transition-all duration-300">
                <Users className="w-6 h-6 text-primary-300" />
              </div>
              <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                Limited Seating
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                200 Guests Max
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
