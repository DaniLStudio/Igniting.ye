'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Award, Heart } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Events Produced',
      icon: Calendar,
      description: 'Successful events across various categories'
    },
    {
      number: '50+',
      label: 'Artists Served',
      icon: Users,
      description: 'Musicians and performers we\'ve worked with'
    },
    {
      number: '10K+',
      label: 'Lives Touched',
      icon: Heart,
      description: 'People impacted through our events'
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      icon: Award,
      description: 'Happy clients who recommend our services'
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
    <section className="section-padding bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-width-content container-padding"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            These numbers represent more than just statistics—they represent lives changed, 
            communities strengthened, and God's love shared through our work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 group-hover:bg-white/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-white/80">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
