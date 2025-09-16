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
              className="inline-flex items-center space-x-2 bg-primary-300/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary-300/20"
            >
              <Calendar className="w-5 h-5 text-primary-300" />
              <span className="text-primary-300 font-medium uppercase tracking-wider text-sm">
                Upcoming Events
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold gradient-text mb-8 leading-none tracking-tight"
            >
              Join Us for
              <span className="block bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
                Amazing Events
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed mb-8"
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
                  "luxury-card p-6 relative overflow-hidden",
                  event.featured && "ring-2 ring-primary-300/50 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"
                )}
              >
                {event.featured && (
                  <div className="absolute top-4 right-4 bg-primary-300 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl font-bold text-primary-300">
                        {event.price}
                      </span>
                      {event.originalPrice && (
                        <span className="text-lg text-neutral-400 line-through">
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
