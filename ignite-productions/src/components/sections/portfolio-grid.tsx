'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, ExternalLink, Play } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const portfolioItems = [
  {
    id: 'winter-ball-2024',
    title: 'Winter Ball 2024',
    category: 'Formal Event',
    date: 'February 14, 2024',
    location: 'Grand Ballroom, Heritage Hotel',
    attendees: '200+',
    description: 'An elegant evening of worship, fellowship, and celebration under the winter stars. This formal event featured live music, gourmet dining, and professional photography.',
    image: '/images/portfolio/winter-ball-2024.jpg',
    featured: true,
    services: ['Event Planning', 'Live Music', 'Photography', 'Catering Coordination'],
    testimonial: {
      text: "Igniting.ye transformed our vision into reality. The Winter Ball was absolutely magical!",
      author: "Sarah Johnson, Event Coordinator"
    }
  },
  {
    id: 'worship-conference-2024',
    title: 'Annual Worship Conference',
    category: 'Conference',
    date: 'March 15-17, 2024',
    location: 'Convention Center, Downtown',
    attendees: '500+',
    description: 'A three-day worship conference featuring renowned speakers, worship leaders, and breakout sessions. Complete audio-visual production and live streaming.',
    image: '/images/portfolio/worship-conference.jpg',
    featured: false,
    services: ['Live Production', 'Streaming', 'Audio Engineering', 'Stage Design'],
    testimonial: {
      text: "Professional, reliable, and spiritually focused. They made our conference unforgettable.",
      author: "Pastor Michael Chen"
    }
  },
  {
    id: 'youth-concert-2024',
    title: 'Youth Revival Concert',
    category: 'Concert',
    date: 'April 20, 2024',
    location: 'Community Center',
    attendees: '300+',
    description: 'High-energy worship concert for youth featuring contemporary Christian artists, dynamic lighting, and interactive elements.',
    image: '/images/portfolio/youth-concert.jpg',
    featured: false,
    services: ['Concert Production', 'Lighting Design', 'Sound Engineering', 'Artist Coordination'],
    testimonial: {
      text: "The energy was incredible! Our youth are still talking about this event months later.",
      author: "Youth Pastor David Martinez"
    }
  },
  {
    id: 'wedding-celebration',
    title: 'Elegant Wedding Celebration',
    category: 'Wedding',
    date: 'May 25, 2024',
    location: 'Garden Venue, Countryside',
    attendees: '150+',
    description: 'Beautiful outdoor wedding celebration with live music, professional photography, and seamless coordination of all wedding day details.',
    image: '/images/portfolio/wedding-celebration.jpg',
    featured: false,
    services: ['Wedding Planning', 'Live Music', 'Photography', 'Coordination'],
    testimonial: {
      text: "Our wedding day was perfect thanks to Igniting.ye. Every detail was handled with care.",
      author: "Jennifer & Robert Williams"
    }
  },
  {
    id: 'community-festival',
    title: 'Community Unity Festival',
    category: 'Festival',
    date: 'June 10, 2024',
    location: 'City Park',
    attendees: '1000+',
    description: 'Large-scale community festival celebrating unity and faith with multiple stages, food vendors, and family activities.',
    image: '/images/portfolio/community-festival.jpg',
    featured: false,
    services: ['Festival Planning', 'Multi-Stage Production', 'Vendor Coordination', 'Logistics'],
    testimonial: {
      text: "This festival brought our entire community together. Amazing organization and execution.",
      author: "Mayor Patricia Thompson"
    }
  },
  {
    id: 'music-recording',
    title: 'Worship Album Recording',
    category: 'Music Production',
    date: 'July 2024',
    location: 'Studio Sessions',
    attendees: '12 Artists',
    description: 'Professional recording and production of a worship album featuring local artists and musicians. Full production from recording to mastering.',
    image: '/images/portfolio/studio-recording.jpg',
    featured: false,
    services: ['Music Production', 'Recording', 'Mixing', 'Mastering'],
    testimonial: {
      text: "The quality of production exceeded our expectations. This album will bless many hearts.",
      author: "Worship Leader Amanda Foster"
    }
  }
];

export function PortfolioGrid() {
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
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
      <div className="max-width-content container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Each project represents our commitment to excellence and our passion for 
            creating meaningful experiences that bring people together.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={cn(
                "group relative overflow-hidden rounded-3xl",
                item.featured && "lg:col-span-2"
              )}
            >
              <div className="luxury-card p-0 h-full overflow-hidden">
                {/* Image */}
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMkQxQjY5Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRDRBRjM3IiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMjQiPkV2ZW50IEltYWdlPC90ZXh0Pgo8L3N2Zz4=')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-primary-300 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured Project
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>

                  {/* Play Button for Videos */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{item.attendees}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                      Services Provided:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1 bg-primary-300/10 text-primary-300 text-xs rounded-full border border-primary-300/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-4 mb-6">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 italic mb-2">
                      "{item.testimonial.text}"
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      — {item.testimonial.author}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <button className="text-primary-300 hover:text-primary-400 font-semibold text-sm transition-colors">
                      View Full Project
                    </button>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-primary-300 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="luxury-card p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-300/20">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Ready to Create Your Next Event?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              Let's work together to create an unforgettable experience that reflects 
              your vision and values. Every great event starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4">
                Start Your Project
              </button>
              <button className="btn-secondary px-8 py-4">
                View All Projects
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
