'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Music, Camera, Users } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'David Thompson',
      role: 'Founder & Creative Director',
      bio: 'With over 10 years in event production, David leads our team with passion and vision.',
      expertise: ['Event Planning', 'Creative Direction', 'Team Leadership'],
      icon: Music
    },
    {
      name: 'Sarah Martinez',
      role: 'Production Manager',
      bio: 'Sarah ensures every detail is perfect, from initial planning to final execution.',
      expertise: ['Production Management', 'Logistics', 'Quality Control'],
      icon: Camera
    },
    {
      name: 'Michael Chen',
      role: 'Audio Engineer',
      bio: 'Michael brings technical excellence to every project with state-of-the-art equipment.',
      expertise: ['Audio Engineering', 'Sound Design', 'Technical Setup'],
      icon: Music
    },
    {
      name: 'Jennifer Williams',
      role: 'Client Relations',
      bio: 'Jennifer builds lasting relationships with our clients and ensures their satisfaction.',
      expertise: ['Client Relations', 'Communication', 'Project Coordination'],
      icon: Users
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
            Meet Our Team
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Our talented team brings together years of experience in event production, 
            music, and creative services to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="luxury-card p-8 h-full">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-300 to-secondary-500 flex items-center justify-center">
                  <member.icon className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary-300 font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed text-sm">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-300/10 text-primary-300 text-xs rounded-full border border-primary-300/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
