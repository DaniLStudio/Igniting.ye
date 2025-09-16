'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Utensils, Music, Camera, Gift } from 'lucide-react';

export function EventDetails() {
  const details = [
    {
      icon: Utensils,
      title: 'Gourmet Dining',
      description: 'Enjoy a luxurious 3-course dinner prepared by our award-winning chefs, featuring seasonal ingredients and elegant presentation.'
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Experience beautiful live music throughout the evening, featuring talented musicians and vocalists in an intimate setting.'
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Capture your memories with our professional photographer, including candid moments and formal portraits.'
    },
    {
      icon: Gift,
      title: 'Commemorative Gift',
      description: 'Take home a special keepsake to remember this magical evening, carefully selected to reflect the elegance of the event.'
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
    <section id="event-details" className="section-padding bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
      <div className="max-width-content container-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            Event Details
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Discover what makes Winter Ball 2026 an unforgettable experience. 
            Every detail has been carefully crafted to create a magical evening.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="luxury-card p-8 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-300/10 border border-primary-300/20 mb-6 group-hover:bg-primary-300/20 transition-all duration-300">
                  <detail.icon className="w-8 h-8 text-primary-300" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  {detail.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Schedule */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="luxury-card p-8">
            <h3 className="text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-8 text-center">
              Evening Schedule
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-300/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      7:00 PM - Welcome Reception
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                      Arrive and enjoy welcome drinks and hors d'oeuvres while mingling with other guests.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-300/10 flex items-center justify-center">
                    <Utensils className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      7:30 PM - Gourmet Dinner
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                      Three-course dinner featuring seasonal ingredients and elegant presentation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-300/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      9:00 PM - Live Entertainment
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                      Beautiful live music and entertainment to set the perfect atmosphere.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-300/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                      10:00 PM - Dancing & Celebration
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                      Dance the night away and celebrate with fellow guests until 11:00 PM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
