'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Heart,
  Music,
  Calendar,
  Users
} from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Live Shows & Concerts', href: '/services/live-shows' },
    { name: 'Music Production', href: '/services/production' },
    { name: 'Event Planning', href: '/services/events' },
    { name: 'Digital Marketing', href: '/services/marketing' },
  ],
  events: [
    { name: 'All Events', href: '/events' },
    { name: 'Winter Ball 2025', href: '/events/winterball' },
    { name: 'Past Events', href: '/events/past' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refunds' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'Twitter', href: '#', icon: Twitter },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

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
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white">
      {/* Main Footer Content */}
      <div className="max-width-content container-padding section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-luxury-gradient rounded-xl shadow-luxury" />
              <div>
                <h3 className="text-2xl font-serif font-bold gradient-text">
                  Igniting.ye
                </h3>
                <p className="text-xs font-accent text-neutral-400 -mt-1">
                  CHRIST-CENTERED EXCELLENCE
                </p>
              </div>
            </div>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Christ-centered music production, live events, and creative services 
              rooted in Christian excellence. Creating unforgettable experiences 
              that glorify God.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-300">
                <Phone className="w-4 h-4 text-primary-300" />
                <span className="text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Mail className="w-4 h-4 text-primary-300" />
                <span className="text-sm">hello@igniting.ye</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">
                <MapPin className="w-4 h-4 text-primary-300" />
                <span className="text-sm">Serving Nationwide</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Music className="w-5 h-5 mr-2 text-primary-300" />
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Events */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary-300" />
              Events
            </h4>
            <ul className="space-y-3">
              {footerLinks.events.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company & Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-primary-300" />
              Company
            </h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className="text-base font-semibold mb-4 text-neutral-200">
              Support
            </h5>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 luxury-card bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-primary-300/20"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Stay Connected
            </h3>
            <p className="text-neutral-300 mb-6">
              Get updates on upcoming events, exclusive content, and special offers 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 form-input bg-white/90 text-neutral-900 placeholder-neutral-500"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-width-content container-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-neutral-400 text-sm">
              <span>© {currentYear} Igniting.ye. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400" />
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-neutral-800 hover:bg-primary-300/20 text-neutral-400 hover:text-primary-300 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/terms"
                className="text-neutral-400 hover:text-primary-300 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-neutral-400 hover:text-primary-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-neutral-400 hover:text-primary-300 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}