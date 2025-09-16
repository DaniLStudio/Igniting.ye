'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Settings, CheckCircle } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We start with a conversation to understand your vision, goals, and requirements.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Creative Planning',
      description: 'Our team develops a comprehensive plan tailored to your specific needs and budget.',
      icon: Lightbulb,
    },
    {
      number: '03',
      title: 'Production & Setup',
      description: 'We handle all technical aspects, from equipment setup to live production.',
      icon: Settings,
    },
    {
      number: '04',
      title: 'Event Execution',
      description: 'On the day of your event, we ensure everything runs smoothly and exceeds expectations.',
      icon: CheckCircle,
    },
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
            Our Process
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            From initial concept to final execution, we follow a proven process 
            that ensures your event is nothing short of extraordinary.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="luxury-card p-8 h-full">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-300/10 border border-primary-300/20 mb-6 group-hover:bg-primary-300/20 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-primary-300" />
                </div>
                
                <div className="text-4xl font-bold text-primary-300 mb-4">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
