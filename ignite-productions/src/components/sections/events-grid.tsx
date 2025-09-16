'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Ticket } from 'lucide-react';
import Link from 'next/link';

export function EventsGrid() {
  const pastEvents = [
    {
      id: 'winter-ball-2024',
      title: 'Winter Ball 2024',
      date: 'February 14, 2024',
      location: 'Grand Ballroom, Heritage Hotel',
      attendees: '200+',
      description: 'An elegant evening of worship, fellowship, and celebration.',
      image: '/images/events/winter-ball-2024.jpg',
      category: 'Formal Event'
    },
    {
      id: 'worship-conference-2024',
      title: 'Annual Worship Conference',
      date: 'March 15-17, 2024',
      location: 'Convention Center',
      attendees: '500+',
      description: 'Three days of worship, teaching, and fellowship.',
      image: '/images/events/worship-conference.jpg',
      category: 'Conference'
    },
    {
      id: 'youth-concert-2024',
      title: 'Youth Revival Concert',
      date: 'April 20, 2024',
      location: 'Community Center',
      attendees: '300+',
      description: 'High-energy worship concert for youth.',
      image: '/images/events/youth-concert.jpg',
      category: 'Concert'
    },
    {
      id: 'community-festival',
      title: 'Community Unity Festival',
      date: 'June 10, 2024',
      location: 'City Park',
      attendees: '1000+',
      description: 'Large-scale community festival celebrating unity and faith.',
      image: '/images/events/community-festival.jpg',
      category: 'Festival'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-width-content container-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            Past Events
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Take a look at some of our recent successful events and see the 
            quality and care we bring to every project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pastEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              className="group"
            >
              <div className="luxury-card p-0 overflow-hidden h-full">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMkQxQjY5Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRDRBRjM3IiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTgiPkV2ZW50IEltYWdlPC90ZXh0Pgo8L3N2Zz4=')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                    {event.category}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-3 h-3" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
