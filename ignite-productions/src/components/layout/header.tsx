'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CartToggle } from '@/components/ui/cart-toggle';

const navigationItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Live Shows & Concerts', href: '/services/live-shows' },
      { name: 'Music Production', href: '/services/production' },
      { name: 'Event Planning', href: '/services/events' },
      { name: 'Digital Marketing', href: '/services/marketing' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { 
    name: 'Events', 
    href: '/events',
    submenu: [
      { name: 'All Events', href: '/events' },
      { name: 'Winter Ball 2025', href: '/events/winterball', featured: true },
      { name: 'Past Events', href: '/events/past' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring' as const,
        damping: 40,
        stiffness: 300,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        damping: 40,
        stiffness: 300,
      },
    },
  };

  const submenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-white/20 dark:border-neutral-700/50'
            : 'bg-transparent'
        )}
      >
        <nav className="max-width-content container-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-luxury-gradient rounded-xl shadow-luxury group-hover:shadow-glow-gold transition-all duration-300" />
                <div className="absolute inset-0 w-10 h-10 bg-luxury-gradient rounded-xl opacity-50 scale-110 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold gradient-text">
                  Ignite
                </h1>
                <p className="text-xs font-accent text-neutral-600 dark:text-neutral-400 -mt-1">
                  PRODUCTIONS
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                      'hover:bg-primary-300/10 hover:text-primary-300',
                      'focus:outline-none focus:ring-2 focus:ring-primary-300/50',
                      isScrolled
                        ? 'text-neutral-700 dark:text-neutral-200'
                        : 'text-white'
                    )}
                  >
                    {item.name}
                  </Link>

                  {/* Desktop Submenu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute top-full left-0 mt-2 w-64 luxury-card py-2 shadow-2xl"
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className={cn(
                                'block px-4 py-3 text-sm transition-colors',
                                'hover:bg-primary-300/10 hover:text-primary-300',
                                subitem.featured &&
                                  'text-primary-300 font-semibold bg-primary-300/5'
                              )}
                            >
                              {subitem.name}
                              {subitem.featured && (
                                <span className="ml-2 text-xs bg-primary-300 text-white px-2 py-0.5 rounded-full">
                                  Featured
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Contact Info (Hidden on mobile) */}
              <div className="hidden xl:flex items-center space-x-6 text-sm">
                <a
                  href="tel:+1234567890"
                  className={cn(
                    'flex items-center space-x-2 hover:text-primary-300 transition-colors',
                    isScrolled
                      ? 'text-neutral-600 dark:text-neutral-400'
                      : 'text-white/80'
                  )}
                >
                  <Phone className="w-4 h-4" />
                  <span>(123) 456-7890</span>
                </a>
                <a
                  href="mailto:hello@igniteproductions.com"
                  className={cn(
                    'flex items-center space-x-2 hover:text-primary-300 transition-colors',
                    isScrolled
                      ? 'text-neutral-600 dark:text-neutral-400'
                      : 'text-white/80'
                  )}
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@igniteproductions.com</span>
                </a>
              </div>

              {/* Shopping Cart */}
              <CartToggle />

              {/* Book Consultation Button */}
              <Link
                href="/contact"
                className={cn(
                  'hidden sm:flex items-center space-x-2 btn-primary text-sm',
                  'transform hover:scale-105 active:scale-95 transition-transform'
                )}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-full transition-colors',
                  'hover:bg-primary-300/10 focus:outline-none focus:ring-2 focus:ring-primary-300/50',
                  isScrolled
                    ? 'text-neutral-700 dark:text-neutral-200'
                    : 'text-white'
                )}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-l border-white/20 dark:border-neutral-700/50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/20 dark:border-neutral-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-luxury-gradient rounded-lg" />
                    <div>
                      <h2 className="text-lg font-serif font-bold gradient-text">
                        Ignite
                      </h2>
                      <p className="text-xs font-accent text-neutral-600 dark:text-neutral-400 -mt-1">
                        PRODUCTIONS
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Navigation */}
                <nav className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-2 px-6">
                    {navigationItems.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary-300 transition-colors"
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 space-y-1">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  'block py-2 text-sm transition-colors',
                                  subitem.featured
                                    ? 'text-primary-300 font-semibold'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-primary-300'
                                )}
                              >
                                {subitem.name}
                                {subitem.featured && (
                                  <span className="ml-2 text-xs bg-primary-300 text-white px-2 py-0.5 rounded-full">
                                    Featured
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-white/20 dark:border-neutral-700/50 space-y-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation</span>
                  </Link>
                  
                  <div className="space-y-2 text-sm">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-300 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>(123) 456-7890</span>
                    </a>
                    <a
                      href="mailto:hello@igniteproductions.com"
                      className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-300 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>hello@igniteproductions.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}