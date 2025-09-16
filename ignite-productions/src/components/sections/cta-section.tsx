'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

export function CTASection() {
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
    <section className="section-padding bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-width-content container-padding text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Let's work together to create something extraordinary. Every great event 
            starts with a conversation, and we're here to listen to your vision.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/contact"
            className="bg-white text-primary-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <a
            href="tel:+1234567890"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/30 flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Us Now</span>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-white/80"
        >
          <p className="text-sm">
            Available Monday - Friday: 9:00 AM - 6:00 PM EST
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
