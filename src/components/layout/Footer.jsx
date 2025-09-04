import React from 'react';
import './footer.css';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer-main bg-cow-brown py-12 text-inner-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="head.png"
              alt="Nigerian Food Company Logo"
              className="h-20 w-auto mb-4 rounded-lg shadow"
            />
            <p className="footer-desc">
              Nigerian Food Company delivers premium, traceable meat products from Damaturu, Yobe State. We are committed to quality, safety, and supporting sustainable food systems across Nigeria and Africa.
            </p>
          </div>

          <div>
            <span className="footer-heading">Quick Links</span>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('about')} className="footer-link">About Us</button>
              <button onClick={() => scrollToSection('vision')} className="footer-link">Our Vision</button>
              <button onClick={() => scrollToSection('board')} className="footer-link">Board Members</button>
              <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
            </div>
          </div>

          <div>
            <span className="footer-heading">Contact Info</span>
            <div className="space-y-2 footer-contact">
              <p>info@nigerianfoodcompany.com</p>
              <p>sales@nigerianfoodcompany.com</p>
              <p>Damaturu, Yobe State, Nigeria</p>
              <p>Mon-Fri: 8am - 6pm</p>
              <p>Sat: 8am - 4pm</p>
              <p>© {new Date().getFullYear()} Nigerian Food Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;