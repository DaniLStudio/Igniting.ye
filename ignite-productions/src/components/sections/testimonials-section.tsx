'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Pastor Michael Chen',
      role: 'Senior Pastor, Grace Community Church',
      content: 'Igniting.ye transformed our annual conference into an unforgettable experience. Their attention to detail and spiritual focus made all the difference.',
      rating: 5,
      event: 'Annual Worship Conference 2024'
    },
    {
      name: 'Sarah Johnson',
      role: 'Event Coordinator, Heritage Hotel',
      content: 'Working with Igniting.ye was a dream come true. They handled every aspect of our Winter Ball with professionalism and grace.',
      rating: 5,
      event: 'Winter Ball 2024'
    },
    {
      name: 'David Martinez',
      role: 'Youth Pastor, New Life Church',
      content: 'The energy and quality they brought to our youth concert was incredible. Our young people are still talking about it months later.',
      rating: 5,
      event: 'Youth Revival Concert 2024'
    },
    {
      name: 'Jennifer Williams',
      role: 'Bride, Wedding Celebration',
      content: 'Our wedding day was perfect thanks to Igniting.ye. Every detail was handled with care and our guests were amazed by the production quality.',
      rating: 5,
      event: 'Wedding Celebration 2024'
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
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-width-content container-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with Igniting.ye.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="luxury-card p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary-300 mb-4" />
              
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {testimonial.role}
                </p>
                <p className="text-xs text-primary-300 font-medium mt-1">
                  {testimonial.event}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
