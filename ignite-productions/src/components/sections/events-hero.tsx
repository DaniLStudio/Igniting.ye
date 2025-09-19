'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Sparkles, Ticket } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function EventsHero() {
  const upcomingEvents = [
    {
      title: 'Winter Ball 2025',
      date: 'February 14, 2025',
      time: '7:00 PM - 11:00 PM',
      location: 'Grand Ballroom at Heritage Hotel',
      status: 'Early Bird Available',
      price: '$45',
      originalPrice: '$55',
      featured: true
    },
    {
      title: 'Worship Conference 2025',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 9:00 PM',
      location: 'Convention Center',
      status: 'Registration Open',
      price: '$99',
      originalPrice: null,
      featured: false
    }
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
      {/* Background Image - Using the home background photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/home-background.jpeg?v=3"
          alt="Events Background - Elegant Formal Event"
          className="absolute inset-0 w-full h-full object-cover"
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
            <Sparkles className="w-6 h-6 text-white/30" />
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="relative z-20 max-width-content container-padding"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span className="text-white font-medium uppercase tracking-wider text-sm">
                Upcoming Events
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-none tracking-tight"
              style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.6)' }}
            >
              Join Us for
              <span className="block text-white">
                Amazing Events
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8"
              style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}
            >
              From intimate worship gatherings to grand celebrations, 
              we create unforgettable experiences that bring our community together in faith and fellowship.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#upcoming-events"
                className="btn-primary px-8 py-4"
              >
                View All Events
              </Link>
              <Link
                href="/events/winterball"
                className="btn-secondary px-8 py-4"
              >
                Winter Ball 2025
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Featured Events */}
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                variants={itemVariants}
                className={cn(
                  "luxury-card p-6 relative overflow-hidden bg-white/95 backdrop-blur-sm",
                  event.featured && "ring-2 ring-primary-300/50 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"
                )}
              >
                {event.featured && (
                  <div className="absolute top-4 right-4 bg-primary-300 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-black mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-black">
                        {event.price}
                      </span>
                      {event.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {event.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      {event.status}
                    </p>
                  </div>
                  <Link
                    href={event.featured ? "/events/winterball" : "#"}
                    className="btn-primary px-6 py-3 text-sm flex items-center space-x-2"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Get Tickets</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
