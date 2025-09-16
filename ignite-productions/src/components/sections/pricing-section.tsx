'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export function PricingSection() {
  const pricingTiers = [
    {
      name: 'Early Bird',
      price: 65,
      originalPrice: 85,
      description: 'Limited time offer',
      features: [
        'Full event access',
        '3-course gourmet dinner',
        'Welcome drink included',
        'Live entertainment',
        'Professional photography',
        'Commemorative gift',
        'Dancing and celebration'
      ],
      popular: true,
      available: true,
      deadline: 'December 31, 2025'
    },
    {
      name: 'Regular Price',
      price: 85,
      originalPrice: null,
      description: 'Standard pricing',
      features: [
        'Full event access',
        '3-course gourmet dinner',
        'Welcome drink included',
        'Live entertainment',
        'Professional photography',
        'Commemorative gift',
        'Dancing and celebration'
      ],
      popular: false,
      available: true,
      deadline: 'January 15, 2026'
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
            Ticket Pricing
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Choose the perfect option for your Winter Ball 2026 experience. 
            Early bird pricing offers significant savings for those who book early.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative ${tier.popular ? 'md:scale-105' : ''}`}
            >
              <div className={`luxury-card p-8 h-full ${tier.popular ? 'ring-2 ring-primary-300/50 bg-gradient-to-br from-primary-500/5 to-secondary-500/5' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-300 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {tier.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-primary-300">
                      ${tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span className="text-xl text-neutral-400 line-through">
                        ${tier.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {tier.originalPrice && (
                    <div className="text-sm text-green-600 font-medium">
                      Save ${tier.originalPrice - tier.price}!
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <Clock className="w-4 h-4" />
                    <span>Available until {tier.deadline}</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <Users className="w-4 h-4" />
                    <span>Limited seating available</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/events/winterball-2026/purchase"
                    className={`w-full py-4 rounded-full font-semibold text-center transition-all duration-300 ${
                      tier.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {tier.available ? 'Purchase Tickets' : 'Sold Out'}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="luxury-card p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-300/20">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Important Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-neutral-600 dark:text-neutral-300">
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Dress Code
                </h4>
                <p>Formal attire required. Black tie optional but encouraged.</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Refund Policy
                </h4>
                <p>Tickets are non-refundable but may be transferable with advance notice.</p>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                  Age Requirement
                </h4>
                <p>This is an adult event. Minimum age 18 years old.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
