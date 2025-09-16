'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Ticket, Star } from 'lucide-react';
import Link from 'next/link';

export function UpcomingEvents() {
  const events = [
    {
      id: 'winter-ball-2025',
      title: 'Winter Ball 2025',
      date: 'February 14, 2025',
      time: '7:00 PM - 11:00 PM',
      location: 'Grand Ballroom at Heritage Hotel',
      description: 'An elegant evening of worship, fellowship, and celebration under the winter stars. Join us for gourmet dining, live music, and dancing.',
      price: 45,
      originalPrice: 55,
      earlyBird: true,
      featured: true,
      attendees: '200',
      category: 'Formal Event',
      image: '/images/events/winter-ball-2025.jpg'
    },
    {
      id: 'worship-conference-2025',
      title: 'Annual Worship Conference',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 9:00 PM',
      location: 'Convention Center, Downtown',
      description: 'A three-day worship conference featuring renowned speakers, worship leaders, and breakout sessions. Complete audio-visual production included.',
      price: 99,
      originalPrice: null,
      earlyBird: false,
      featured: false,
      attendees: '500',
      category: 'Conference',
      image: '/images/events/worship-conference.jpg'
    },
    {
      id: 'youth-concert-2025',
      title: 'Youth Revival Concert',
      date: 'April 20, 2025',
      time: '7:00 PM - 10:00 PM',
      location: 'Community Center',
      description: 'High-energy worship concert for youth featuring contemporary Christian artists, dynamic lighting, and interactive elements.',
      price: 25,
      originalPrice: null,
      earlyBird: false,
      featured: false,
      attendees: '300',
      category: 'Concert',
      image: '/images/events/youth-concert.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
    <section id="upcoming-events" className="section-padding bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
      <div className="max-width-content container-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Join us for these exciting upcoming events. From intimate worship gatherings 
            to grand celebrations, there's something for everyone.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              className={`group relative ${event.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="luxury-card p-0 overflow-hidden h-full">
                {/* Event Image */}
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMkQxQjY5Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRDRBRjM3IiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMjQiPkV2ZW50IEltYWdlPC90ZXh0Pgo8L3N2Zz4=')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  {event.featured && (
                    <div className="absolute top-4 left-4 bg-primary-300 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Featured</span>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>

                  {/* Early Bird Badge */}
                  {event.earlyBird && (
                    <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Early Bird
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                    {event.title}
                  </h3>
                  
                  <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary-300">
                          ${event.price}
                        </span>
                        {event.originalPrice && (
                          <span className="text-lg text-neutral-400 line-through">
                            ${event.originalPrice}
                          </span>
                        )}
                      </div>
                      {event.earlyBird && (
                        <p className="text-sm text-green-600 font-medium">
                          Save ${event.originalPrice! - event.price} with Early Bird pricing!
                        </p>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={event.featured ? "/events/winterball" : "#"}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Get Tickets</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
