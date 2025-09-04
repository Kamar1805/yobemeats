import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './footer.css';

const NAV_ITEMS = [
  { id: 'about', label: 'About Us' },
  { id: 'vision', label: 'Our Vision' },
  { id: 'board', label: 'Board Members' },
  { id: 'contact', label: 'Contact' }
];

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="header-main fixed top-0 w-full z-50 border-b border-[#e8bb63] bg-[#2f2418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
           <img
  src="/head.png"
  alt="Nigerian Food Company Logo"
  className="h-14 md:h-20 w-auto rounded-full shadow header-logo"
/>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.07 }}
                >
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="header-link"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header-menu-btn"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="header-mobile-menu md:hidden bg-[#2f2418] border-t border-[#e8bb63] shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className="header-link-mobile"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;