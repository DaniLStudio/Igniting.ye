'use client';

import { motion } from 'framer-motion';
import { 
  Music, 
  Calendar, 
  Users, 
  Megaphone, 
  Mic, 
  Headphones, 
  Camera, 
  Monitor,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'video-production',
    title: 'Video Production',
    subtitle: 'Professional Cinematography & Editing',
    description: 'High-quality video production services including cinematography, editing, and post-production for events, music videos, and promotional content.',
    icon: Camera,
    features: [
      'Professional cinematography',
      'Multi-camera event coverage',
      'Video editing & post-production',
      'Color grading & visual effects',
      'Motion graphics & animation',
      'Live streaming production'
    ],
    startingPrice: '$599',
    href: '/services/video-production',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
  },
  {
    id: 'live-events',
    title: 'Live Shows & Concerts',
    subtitle: 'Unforgettable Live Experiences',
    description: 'Complete live event production including sound, lighting, staging, and technical support for concerts, worship services, and special events.',
    icon: Calendar,
    features: [
      'Professional sound systems',
      'Stage lighting & design',
      'Live streaming capabilities',
      'Technical crew support',
      'Equipment rental',
      'Event coordination'
    ],
    startingPrice: '$1,299',
    href: '/services/live-shows',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
  },
  {
    id: 'event-planning',
    title: 'Event Planning',
    subtitle: 'Complete Event Coordination',
    description: 'Full-service event planning from concept to execution. We handle every detail to ensure your event exceeds expectations.',
    icon: Users,
    features: [
      'Venue selection & booking',
      'Catering coordination',
      'Guest management',
      'Timeline planning',
      'Vendor coordination',
      'Day-of event management'
    ],
    startingPrice: '$899',
    href: '/services/event-planning',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Amplify Your Message',
    description: 'Strategic digital marketing services to grow your audience, promote events, and build meaningful connections with your community.',
    icon: Megaphone,
    features: [
      'Social media management',
      'Content creation',
      'Event promotion',
      'Email marketing',
      'Website development',
      'Analytics & reporting'
    ],
    startingPrice: '$499',
    href: '/services/digital-marketing',
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
  }
];

export function ServicesGrid() {
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
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-width-content container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            Our Service Portfolio
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Each service is crafted with attention to detail and a commitment to 
            excellence that reflects our faith and values.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={cn(
                "luxury-card h-full p-8 bg-gradient-to-br",
                service.bgColor,
                "hover:shadow-2xl transition-all duration-500"
              )}>
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      "p-4 rounded-2xl bg-gradient-to-r text-white shadow-lg",
                      service.color
                    )}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-primary-300 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                      {service.startingPrice}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      starting price
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={service.href}
                  className={cn(
                    "inline-flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 group-hover:scale-105",
                    "bg-gradient-to-r shadow-lg hover:shadow-xl",
                    service.color
                  )}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
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
              Ready to Get Started?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together. 
              Every great event starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary px-8 py-4"
              >
                Book a Consultation
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary px-8 py-4"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
