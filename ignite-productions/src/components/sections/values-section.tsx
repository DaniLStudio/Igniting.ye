'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Lightbulb, HandHeart } from 'lucide-react';

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct all business with honesty, transparency, and moral excellence, reflecting Christ-like character in every interaction.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from planning to execution, ensuring every detail exceeds expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Creativity',
      description: 'We bring innovative ideas and fresh perspectives to every project, creating unique experiences that inspire and engage.'
    },
    {
      icon: HandHeart,
      title: 'Service',
      description: 'We serve with humility and love, putting the needs of our clients and community first in all that we do.'
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
            Our Core Values
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            These values guide everything we do and shape how we serve our clients 
            and community with Christ-centered excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="luxury-card p-8 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-300/10 border border-primary-300/20 mb-6 group-hover:bg-primary-300/20 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary-300" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
