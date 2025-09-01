import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Contact = ({ handleGetQuote }) => {
  return (
    <section id="contact" className="py-20 bg-white text-cow-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-goat-yellow mb-6">Reach Out to Us</h2>
          <div className="w-24 h-1 bg-chicken-orange mx-auto mb-8"></div>
          <p className="text-cow-brown/80 max-w-3xl mx-auto text-lg">
            Ready to experience the finest quality meat products? Get in touch with us for quotes,
            partnerships, or any inquiries about our services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-goat-yellow mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-chicken-orange mb-2">Email</h4>
                  <p className="text-cow-brown/80">info@yobemeats.com</p>
                  <p className="text-cow-brown/80">sales@yobemeats.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-chicken-orange mb-2">Address</h4>
                  <p className="text-cow-brown/80">
                    Damaturu Modern Abattoir<br />
                    Damaturu, Yobe State<br />
                    Nigeria
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-chicken-orange mb-2">Business Hours</h4>
                  <p className="text-cow-brown/80">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-chicken-orange mb-6">Get a Quote</h3>
              <p className="text-cow-brown/80 mb-6">
                Interested in our premium meat products? Contact us for competitive pricing and
                customized solutions for your business needs.
              </p>
              <Button
                onClick={handleGetQuote}
                className="w-full bg-chicken-orange hover:bg-goat-yellow text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Request Quote
              </Button>
              <div className="mt-6 p-4 bg-goat-yellow/10 rounded-lg">
                <p className="text-cow-brown/80 text-sm">
                  <strong className="text-goat-yellow">Quick Response:</strong> We typically respond to all
                  quote requests within 24 hours during business days.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;