import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
  cta?: string;
}

export default function Hero({ image, title, subtitle, cta = 'Explore Collection' }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToShop = () => {
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const chevronVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden pt-16">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: scrollY * 0.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={image}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl"
        >
          {/* Title */}
          <motion.h1
            variants={titleVariants}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToShop}
            className="px-8 sm:px-12 py-3 sm:py-4 bg-accent text-white font-heading text-sm sm:text-base rounded-lg hover:bg-accent/90 transition-colors duration-200 shadow-lg"
          >
            {cta}
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={chevronVariants}
          animate="animate"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToShop}
        >
          <ChevronDown size={32} className="text-white opacity-70" />
        </motion.div>
      </div>
    </div>
  );
}
