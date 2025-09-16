'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@igniting.ye', 'support@igniting.ye'],
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(123) 456-7890', '(123) 456-7891'],
      description: 'Speak directly with our team during business hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Serving Nationwide', 'Based in Your City'],
      description: 'We travel to serve events across the country'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: 'Available for consultations and support'
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
            Contact Information
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Multiple ways to reach us. Choose the method that works best for you, 
            and we'll be happy to help with your next project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactDetails.map((contact, index) => (
            <motion.div
              key={contact.title}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="luxury-card p-8 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-300/10 border border-primary-300/20 mb-6 group-hover:bg-primary-300/20 transition-all duration-300">
                  <contact.icon className="w-8 h-8 text-primary-300" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  {contact.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {contact.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-primary-300 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {contact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="luxury-card p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-300/20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MessageCircle className="w-6 h-6 text-primary-300" />
              <h3 className="text-2xl font-serif font-bold">
                Need Immediate Assistance?
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              For urgent event support or last-minute requests, call our emergency line. 
              We're here to help ensure your event runs smoothly.
            </p>
            <a
              href="tel:+1234567890"
              className="btn-primary px-8 py-4 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency Line: (123) 456-7890</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
