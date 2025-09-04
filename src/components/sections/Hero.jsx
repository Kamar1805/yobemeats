import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import './hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero-simple relative min-h-[100vh] flex items-center justify-center bg-meat bg-cover bg-center">
      <div className="hero-overlay-simple absolute inset-0" />
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center">
        <motion.h1
          className="hero-title-simple mb-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Nigerian <span>Food Company</span>
        </motion.h1>
        <motion.p
          className="hero-lead-simple mb-7"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Delivering premium, traceable meat products nationwide with disciplined cold-chain logistics, ethical sourcing, and uncompromising food safety.
        </motion.p>
        <motion.ul
          className="hero-points-simple mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
                delayChildren: 0.22
              }
            }
          }}
        >
          {[
            'Cold-chain integrity & hygiene',
            'Traceable processing',
            'Nutrient & flavor preservation',
            'Regulatory compliance'
          ].map(item => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 }
              }}
              className="hero-point-simple"
            >
              <span className="tick-simple">✓</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
        <Button
          onClick={() => scrollToSection && scrollToSection('contact')}
          className="contactbtn"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;