import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img  class="w-full h-full object-cover" alt="Workers in an abattoir processing meat" src="https://horizons-cdn.hostinger.com/f2126a34-b61c-429a-92e5-573283323be1/4a1d4ee585bf8648eeaf51a78aa7584b.jpg" />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Welcome to <span className="text-goat-yellow">Yobe Meats</span>
          </h1>
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="https://horizons-cdn.hostinger.com/f2126a34-b61c-429a-92e5-573283323be1/1c04f44dd592007978de766f14edc1ae.png"
              alt="Yobe Meats Logo"
              className="h-24 w-auto"
            />
          </motion.div>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your trusted source for premium quality meat products from Damaturu Modern Abattoir.
            We are committed to excellence in meat processing and distribution, serving communities with the highest standards of quality and safety.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-goat-yellow hover:bg-chicken-orange text-cow-brown font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;