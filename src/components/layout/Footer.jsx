import React from 'react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-cow-brown py-12 text-inner-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://horizons-cdn.hostinger.com/f2126a34-b61c-429a-92e5-573283323be1/1c04f44dd592007978de766f14edc1ae.png"
              alt="Yobe Meats Logo"
              className="h-24 w-auto mb-4"
            />
            <p className="text-inner-glow/80 leading-relaxed">
              Premium quality meat products from Damaturu Modern Abattoir.
              Committed to excellence, sustainability, and community development.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold text-goat-yellow mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('about')} className="block text-inner-glow/80 hover:text-goat-yellow transition-colors">About Us</button>
              <button onClick={() => scrollToSection('vision')} className="block text-inner-glow/80 hover:text-goat-yellow transition-colors">Our Vision</button>
              <button onClick={() => scrollToSection('board')} className="block text-inner-glow/80 hover:text-goat-yellow transition-colors">Our Board</button>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold text-goat-yellow mb-4 block">Contact Info</span>
            <div className="space-y-2 text-inner-glow/80">
              <p>info@yobemeats.com</p>
              <p>Damaturu, Yobe State, Nigeria</p>
              <p>© {new Date().getFullYear()} Yobe Meats. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;