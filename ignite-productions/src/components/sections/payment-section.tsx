'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CreditCard, Lock, Shield, CheckCircle } from 'lucide-react';

export function PaymentSection() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission here
    console.log('Payment submitted:', paymentData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
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
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
      <div className="max-width-content container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold gradient-text mb-4">
              Secure Payment
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Complete your purchase with our secure payment system. Your information is encrypted and protected.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="luxury-card p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Payment Method Selection */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
                    Payment Method
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 border border-neutral-300 dark:border-neutral-600 rounded-xl hover:border-primary-300 transition-colors cursor-pointer">
                      <CreditCard className="w-6 h-6 text-primary-300" />
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                        Credit/Debit Card
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-neutral-300 dark:border-neutral-600 rounded-xl hover:border-primary-300 transition-colors cursor-pointer">
                      <CreditCard className="w-6 h-6 text-primary-300" />
                      <span className="font-medium text-neutral-900 dark:text-neutral-100">
                        PayPal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
                    Card Information
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Card Number */}
                    <div className="space-y-2">
                      <label htmlFor="cardNumber" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Card Number *
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          required
                          value={paymentData.cardNumber}
                          onChange={(e) => setPaymentData({...paymentData, cardNumber: formatCardNumber(e.target.value)})}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Expiry Date */}
                      <div className="space-y-2">
                        <label htmlFor="expiryDate" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          required
                          value={paymentData.expiryDate}
                          onChange={(e) => setPaymentData({...paymentData, expiryDate: formatExpiryDate(e.target.value)})}
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>

                      {/* CVV */}
                      <div className="space-y-2">
                        <label htmlFor="cvv" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          required
                          value={paymentData.cvv}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>

                    {/* Name on Card */}
                    <div className="space-y-2">
                      <label htmlFor="nameOnCard" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Name on Card *
                      </label>
                      <input
                        type="text"
                        id="nameOnCard"
                        name="nameOnCard"
                        required
                        value={paymentData.nameOnCard}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-neutral-100">
                    Billing Address
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="billingAddress" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="billingAddress"
                        name="billingAddress"
                        required
                        value={paymentData.billingAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="city" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={paymentData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                          placeholder="New York"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="state" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          required
                          value={paymentData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                          placeholder="NY"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="zipCode" className="block text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          required
                          value={paymentData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      required
                      checked={paymentData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 text-primary-300 border-neutral-300 rounded focus:ring-primary-300"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm text-neutral-700 dark:text-neutral-300">
                      I agree to the{' '}
                      <a href="/terms" className="text-primary-300 hover:text-primary-400 underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="/privacy" className="text-primary-300 hover:text-primary-400 underline">
                        Privacy Policy
                      </a>
                      . I understand that tickets are non-refundable but may be transferable.
                    </label>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Secure Payment Processing
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Your payment is processed securely using industry-standard encryption. 
                        We never store your complete card information on our servers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg flex items-center justify-center space-x-3"
                  >
                    <Lock className="w-5 h-5" />
                    <span>Complete Purchase - $65.00</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
