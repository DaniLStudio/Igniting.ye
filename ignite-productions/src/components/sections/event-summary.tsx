'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Star, Shield, CreditCard } from 'lucide-react';

export function EventSummary() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Event Details Card */}
      <motion.div variants={itemVariants}>
        <div className="luxury-card p-6">
          <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Event Summary
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-primary-300" />
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                  January 18, 2026
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Saturday Evening
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-primary-300" />
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                  7:00 PM - 11:00 PM
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  4 Hours of Elegance
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-300" />
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Heritage Hotel
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Grand Ballroom
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-primary-300" />
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Limited Seating
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  200 Guests Maximum
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Pricing Card */}
      <motion.div variants={itemVariants}>
        <div className="luxury-card p-6 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-300/20">
          <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Pricing
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-primary-300">
                  $65
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Early Bird Price
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg text-neutral-400 line-through">
                  $85
                </div>
                <div className="text-sm text-green-600 font-medium">
                  Save $20!
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Pre-order ends December 31, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* What's Included Card */}
      <motion.div variants={itemVariants}>
        <div className="luxury-card p-6">
          <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            What's Included
          </h3>
          
          <div className="space-y-3">
            {[
              'Gourmet 3-course dinner',
              'Live music and entertainment',
              'Professional photography',
              'Complimentary welcome drink',
              'Dancing and celebration',
              'Elegant venue decoration',
              'Memorable keepsake gift'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Security Notice */}
      <motion.div variants={itemVariants}>
        <div className="luxury-card p-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Secure Payment
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Your payment information is encrypted and secure. We use industry-standard 
                security measures to protect your data.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Methods */}
      <motion.div variants={itemVariants}>
        <div className="luxury-card p-6">
          <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Payment Methods
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-primary-300" />
              <span className="text-neutral-700 dark:text-neutral-300">
                Credit/Debit Cards
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-primary-300" />
              <span className="text-neutral-700 dark:text-neutral-300">
                PayPal
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-primary-300" />
              <span className="text-neutral-700 dark:text-neutral-300">
                Apple Pay
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-primary-300" />
              <span className="text-neutral-700 dark:text-neutral-300">
                Google Pay
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
