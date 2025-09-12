'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock, Users, Sparkles, Snowflake } from 'lucide-react';
import Link from 'next/link';
import Cookies from 'js-cookie';

interface WinterballPopupProps {
  eventDate?: string;
  eventTime?: string;
  venue?: string;
  ticketPrice?: number;
  earlyBirdPrice?: number;
  earlyBirdUntil?: string;
}

export function WinterballPopup({
  eventDate = "2025-02-14T19:00:00",
  eventTime = "7:00 PM - 11:00 PM",
  venue = "Grand Ballroom at Heritage Hotel",
  ticketPrice = 55,
  earlyBirdPrice = 45,
  earlyBirdUntil = "2025-01-15T23:59:59"
}: WinterballPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSnowflakes] = useState(true);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  const POPUP_COOKIE_NAME = 'winterball-popup-dismissed';
  const POPUP_DELAY = 3000; // 3 seconds after page load

  // Check if popup should be shown
  useEffect(() => {
    const isPopupEnabled = process.env.NEXT_PUBLIC_ENABLE_WINTERBALL_POPUP === 'true';
    const hasBeenDismissed = Cookies.get(POPUP_COOKIE_NAME);
    const eventDateObj = new Date(eventDate);
    const isEventInFuture = eventDateObj > new Date();

    if (isPopupEnabled && !hasBeenDismissed && isEventInFuture) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }
  }, [eventDate]);

  // Countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const eventTime = new Date(eventDate).getTime();
      const distance = eventTime - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [eventDate]);

  const closePopup = (rememberChoice = false) => {
    setIsVisible(false);
    if (rememberChoice) {
      // Remember for 30 days
      Cookies.set(POPUP_COOKIE_NAME, 'true', { expires: 30 });
    }
  };

  const isEarlyBird = new Date() < new Date(earlyBirdUntil);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.6,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
      }
    }
  };

  const snowflakeVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  const sparkleVariants = {
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => closePopup()}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative max-w-2xl w-full max-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full bg-repeat opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
          </div>

          {/* Floating Winter Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {showSnowflakes && [...Array(12)].map((_, i) => (
              <motion.div
                key={`snowflake-${i}`}
                className="absolute text-white/20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={snowflakeVariants}
                animate="animate"
                transition={{ delay: i * 0.2 }}
              >
                <Snowflake className="w-4 h-4" />
              </motion.div>
            ))}
            
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute text-yellow-300/30"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                variants={sparkleVariants}
                animate="animate"
                transition={{ delay: i * 0.3 }}
              >
                <Sparkles className="w-3 h-3" />
              </motion.div>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={() => closePopup(true)}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-all duration-300 group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Snowflake className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
                  Special Event
                </span>
              </motion.div>

              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", damping: 20 }}
                className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
              >
                You&apos;re Invited to
                <span className="block bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent">
                  Winter Ball 2025
                </span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-blue-100 font-light leading-relaxed"
              >
                An elegant evening of worship, fellowship, and celebration under the winter stars
              </motion.p>
            </div>

            {/* Event Details */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              <div className="glass-effect rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-400/20 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium">Date</div>
                    <div className="text-white font-semibold">
                      {formatDate(eventDate)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-400/20 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium">Time</div>
                    <div className="text-white font-semibold">{eventTime}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-400/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-sm font-medium">Venue</div>
                    <div className="text-white font-semibold">{venue}</div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-blue-200 text-sm font-medium mb-2">Event Countdown</div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">{countdown.days}</div>
                      <div className="text-xs text-blue-200">Days</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">{countdown.hours}</div>
                      <div className="text-xs text-blue-200">Hours</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">{countdown.minutes}</div>
                      <div className="text-xs text-blue-200">Minutes</div>
                    </div>
                  </div>
                  
                  {isEarlyBird && (
                    <div className="bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-lg p-3 border border-green-400/30">
                      <div className="text-green-300 text-sm font-bold">🎉 Early Bird Special</div>
                      <div className="text-white">
                        <span className="line-through text-white/60">${ticketPrice}</span>
                        <span className="ml-2 text-xl font-bold">${earlyBirdPrice}</span>
                      </div>
                      <div className="text-xs text-green-200">
                        Save ${ticketPrice - earlyBirdPrice}! Limited time offer
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Dress Code & Highlights */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="glass-effect rounded-2xl p-6 mb-8"
            >
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-300" />
                What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-blue-200 font-medium mb-1">Dress Code</div>
                  <div className="text-white">Formal / Semi-Formal Attire</div>
                </div>
                <div>
                  <div className="text-blue-200 font-medium mb-1">Includes</div>
                  <div className="text-white">Dinner • Live Music • Dancing • Photography</div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/events/winterball"
                onClick={() => closePopup()}
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-glow-gold text-center"
              >
                Learn More & Get Tickets
              </Link>
              
              <button
                onClick={() => closePopup()}
                className="sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 border border-white/20"
              >
                Maybe Later
              </button>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-6"
            >
              <p className="text-blue-200 text-sm">
                Don&apos;t miss this special evening of fellowship and celebration
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}