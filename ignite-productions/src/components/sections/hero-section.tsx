'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, Sparkles, Music, Calendar, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  showVideo?: boolean;
  videoUrl?: string;
  fallbackImageUrl?: string;
}

export function HeroSection({ 
  showVideo = false, 
  videoUrl = "/videos/hero-background.mp4",
  fallbackImageUrl = "/images/formal-event.jpg"
}: HeroSectionProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const rotatingTexts = [
    "IGNITING PURPOSE THROUGH SOUND",
    "WHERE FAITH MEETS EXCELLENCE",
    "CREATING MOMENTS THAT MATTER",
    "SERVING THE BODY OF CHRIST"
  ];

  const stats = [
    { number: "500+", label: "Events Produced", icon: Calendar },
    { number: "50+", label: "Artists Served", icon: Music },
    { number: "10K+", label: "Lives Touched", icon: Users },
  ];

  // Rotate text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  // Video handling
  useEffect(() => {
    if (videoRef.current && showVideo) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, [showVideo]);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const scrollToContent = () => {
    const nextSection = document.getElementById('services-preview');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      rotateX: -90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 1.2,
      },
    },
  };

  const rotatingTextVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 200,
        duration: 0.8,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        delay: 0.8,
      },
    },
  };

  const statsVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        {showVideo ? (
          <>
            <video
              ref={videoRef}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
                isVideoLoaded ? "opacity-100" : "opacity-0"
              )}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div 
              className={cn(
                "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
                isVideoLoaded ? "opacity-0" : "opacity-100"
              )}
              style={{ backgroundImage: `url(${fallbackImageUrl})` }}
            />
          </>
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fallbackImageUrl})` }}
          />
        )}
        
        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
        <div className="absolute inset-0 bg-white/20" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{ 
              y: [0, -30, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Sparkles className="w-6 h-6 text-primary-300/30" />
          </motion.div>
        ))}
      </div>

      {/* Video Controls */}
      {showVideo && (
        <motion.button
          onClick={toggleVideo}
          className="absolute top-8 right-8 z-30 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Play className={cn("w-5 h-5", !isVideoPlaying && "hidden")} />
          <div className={cn("w-5 h-5 border-2 border-current", isVideoPlaying && "hidden")} />
        </motion.button>
      )}

      {/* Main Content */}
      <motion.div 
        className="relative z-20 max-width-content container-padding text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
      >
        {/* Rotating Main Headline */}
        <div className="mb-8 h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTextIndex}
              variants={rotatingTextVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white leading-none tracking-tight luxury-text-shadow"
              style={{
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
              }}
            >
              {rotatingTexts[currentTextIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.div
          variants={textVariants}
          className="mb-12 max-w-4xl mx-auto"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed mb-4">
            Christ-centered music production, live events, and creative services
          </p>
          <p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto">
            Serving churches, ministries, and individuals with professional excellence 
            rooted in faith, creating unforgettable experiences that glorify God.
          </p>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div 
          variants={buttonVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link
            href="/services"
            className="btn-primary text-lg px-10 py-5 shadow-2xl hover:shadow-glow-gold"
          >
            Explore Our Services
          </Link>
          <Link
            href="/contact"
            className="btn-secondary text-lg px-10 py-5 text-white border-white/30 hover:bg-white hover:text-neutral-900"
          >
            Book Consultation
          </Link>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          variants={statsVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:bg-white/20 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-primary-300" />
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-white/70 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 p-2 text-white/60 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(45, 27, 105, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>
    </section>
  );
}