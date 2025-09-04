import React from 'react';
import { motion } from 'framer-motion';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="contact-title">
            Reach Out to <span className="contact-title-accent">Nigerian Food Company</span>
          </h2>
          <div className="contact-divider"></div>
          <p className="contact-lead">
            We’re here to answer your questions, discuss partnerships, or provide more information about our premium meat products. Reach out to us and our team will respond promptly.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="contact-card"
          >
            <h3 className="contact-card-title">Contact Information</h3>
            <div className="contact-info">
              <div>
                <h4 className="contact-label">Email</h4>
                <p className="contact-value">info@nigerianfoodcompany.com</p>
                <p className="contact-value">sales@nigerianfoodcompany.com</p>
              </div>
              <div>
                <h4 className="contact-label">Address</h4>
                <p className="contact-value">
                  Nigerian Food Company<br />
                  Damaturu, Yobe State<br />
                  Nigeria
                </p>
              </div>
              <div>
                <h4 className="contact-label">Business Hours</h4>
                <p className="contact-value">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 8:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="contact-card"
          >
            <h3 className="contact-card-title contact-card-title-accent">Contact Us</h3>
            <p className="contact-message">
              Send us an email or visit our office during business hours. We look forward to connecting with you!
            </p>
            <a
              href="mailto:info@nigerianfoodcompany.com"
              className="contact-btn"
            >
              Email Us
            </a>
            <div className="contact-response">
              <p>
                <strong>Quick Response:</strong> We typically reply within 24 hours on business days.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;