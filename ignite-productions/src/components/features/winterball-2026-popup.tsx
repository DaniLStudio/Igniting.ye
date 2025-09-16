'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Clock, Users, Star, Sparkles, Ticket } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function WinterBall2026Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if user has seen this popup before
    const seen = localStorage.getItem('winterball-2026-popup-seen');
    if (!seen) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenPopup(true);
    }
  }, []);

  const closePopup = (dontShowAgain = false) => {
    setIsOpen(false);
    if (dontShowAgain) {
      localStorage.setItem('winterball-2026-popup-seen', 'true');
      setHasSeenPopup(true);
    }
  };

  if (hasSeenPopup) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => closePopup()}
          />

          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => closePopup()}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Left Side - Event Photo */}
              <div className="relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/formal-event.jpg')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{ 
                        x: Math.random() * 600, 
                        y: Math.random() * 800,
                        scale: 0,
                      }}
                      animate={{ 
                        y: [0, -20, 0],
                        scale: [0.8, 1.2, 0.8],
                        rotate: [0, 180, 360],
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-primary-300/40" />
                    </motion.div>
                  ))}
                </div>

                {/* Event Badge */}
                <div className="absolute top-6 left-6 bg-primary-300/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-primary-300/30">
                  ✨ Exclusive Pre-Order
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-primary-300/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-300/20">
                    <Star className="w-4 h-4 text-primary-300" />
                    <span className="text-primary-300 font-medium text-sm uppercase tracking-wider">
                      Winter Ball 2026
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                    An Evening Under the
                    <span className="block bg-gradient-to-r from-primary-300 to-secondary-400 bg-clip-text text-transparent">
                      Winter Stars
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    Join us for an unforgettable evening of elegance, worship, and celebration. 
                    Experience the magic of our signature Winter Ball with gourmet dining, 
                    live music, and dancing under a starry winter sky.
                  </p>

                  {/* Event Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3 text-white/90">
                      <Calendar className="w-5 h-5 text-primary-300" />
                      <span className="font-medium">January 18, 2026</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <Clock className="w-5 h-5 text-primary-300" />
                      <span>7:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <MapPin className="w-5 h-5 text-primary-300" />
                      <span>Grand Ballroom at Heritage Hotel</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <Users className="w-5 h-5 text-primary-300" />
                      <span>Limited to 200 guests</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl p-6 mb-8 border border-primary-300/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-3xl font-bold text-white">
                          $65
                        </div>
                        <div className="text-sm text-white/70">
                          Early Bird Price
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg text-white/60 line-through">
                          $85
                        </div>
                        <div className="text-sm text-green-400 font-medium">
                          Save $20!
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-white/80">
                      <strong>Pre-order ends December 31, 2025</strong>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/events/winterball-2026/purchase"
                      className="flex-1 btn-primary text-center py-4 flex items-center justify-center space-x-2"
                    >
                      <Ticket className="w-5 h-5" />
                      <span>Pre-Order Tickets</span>
                    </Link>
                    <Link
                      href="/events/winterball-2026"
                      className="flex-1 btn-secondary text-center py-4 border-white/30 text-white hover:bg-white hover:text-neutral-900"
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* Don't Show Again */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-6"
                  >
                    <button
                      onClick={() => closePopup(true)}
                      className="text-xs text-white/60 hover:text-white/80 transition-colors underline"
                    >
                      Don't show this again
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
