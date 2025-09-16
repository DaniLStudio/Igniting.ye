'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Eye, Users } from 'lucide-react';

export function MissionSection() {
  const values = [
    {
      icon: Heart,
      title: 'Our Mission',
      description: 'To serve the body of Christ through excellence in music production, live events, and creative services that glorify God and bring people together in meaningful ways.'
    },
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To be the leading provider of Christ-centered event production services, creating unforgettable experiences that inspire faith, build community, and advance the Kingdom of God.'
    },
    {
      icon: Eye,
      title: 'Our Values',
      description: 'We are committed to integrity, excellence, creativity, and service. Every project reflects our faith and our dedication to honoring God through our work.'
    },
    {
      icon: Users,
      title: 'Our Impact',
      description: 'Through our services, we have touched thousands of lives, strengthened communities, and created spaces where people can encounter God and grow in their faith.'
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
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
      <div className="max-width-content container-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-text mb-6">
            Our Mission & Values
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Everything we do is rooted in our faith and our commitment to serving 
            the body of Christ with excellence and integrity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="luxury-card p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-300/10 border border-primary-300/20 mb-6">
                <value.icon className="w-8 h-8 text-primary-300" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {value.title}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
