'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { User, Mail, Phone, Users, Plus, Minus } from 'lucide-react';

export function TicketForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guestCount: 1,
    dietaryRestrictions: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Ticket form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const updateGuestCount = (change: number) => {
    const newCount = Math.max(1, Math.min(8, formData.guestCount + change));
    setFormData({
      ...formData,
      guestCount: newCount
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants}>
        <div className="luxury-card p-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-8">
            Ticket Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      placeholder="Your first name"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Count */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                Number of Tickets
              </h3>
              
              <div className="flex items-center justify-between p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary-300" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                      Number of Guests
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      Maximum 8 guests per order
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => updateGuestCount(-1)}
                    disabled={formData.guestCount <= 1}
                    className="w-10 h-10 rounded-full bg-primary-300/10 border border-primary-300/20 flex items-center justify-center hover:bg-primary-300/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4 text-primary-300" />
                  </button>
                  
                  <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 min-w-[3rem] text-center">
                    {formData.guestCount}
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => updateGuestCount(1)}
                    disabled={formData.guestCount >= 8}
                    className="w-10 h-10 rounded-full bg-primary-300/10 border border-primary-300/20 flex items-center justify-center hover:bg-primary-300/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-4 h-4 text-primary-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                Special Requests
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="dietaryRestrictions" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Dietary Restrictions
                  </label>
                  <textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    rows={3}
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 resize-none"
                    placeholder="Please let us know about any dietary restrictions or allergies..."
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="specialRequests" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 resize-none"
                    placeholder="Any special requests or accessibility needs..."
                  />
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
