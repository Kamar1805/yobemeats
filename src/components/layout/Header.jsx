import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 nav-light border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://horizons-cdn.hostinger.com/f2126a34-b61c-429a-92e5-573283323be1/1c04f44dd592007978de766f14edc1ae.png"
              alt="Yobe Meats Logo"
              className="h-16 md:h-20 w-auto"
            />
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['about', 'vision', 'board', 'quote'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleScroll(item === 'quote' ? 'contact' : item)}
                  className="text-cow-brown hover:text-goat-yellow px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item === 'quote' ? 'Get Quote' : item === 'vision' ? 'Our Vision' : item === 'board' ? 'Our Board' : item}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cow-brown hover:text-goat-yellow"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['about', 'vision', 'board', 'quote'].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item === 'quote' ? 'contact' : item)}
                className="text-cow-brown hover:text-goat-yellow block px-3 py-2 text-base font-medium w-full text-left capitalize"
              >
                {item === 'quote' ? 'Get Quote' : item === 'vision' ? 'Our Vision' : item === 'board' ? 'Our Board' : item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;