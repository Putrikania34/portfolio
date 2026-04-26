'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroProps {
  children: ReactNode;
}

export const HeroSection = ({ children }: HeroProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {children}
      </div>
    </motion.section>
  );
};

export const HeroContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-accent via-accent-secondary to-accent bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
      >
        Building beautiful, performant web experiences with modern technologies
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4 justify-center pt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
        >
          View My Work
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
