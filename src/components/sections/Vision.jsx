import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-cow-brown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-goat-yellow mb-6">Our Vision</h2>
          <div className="w-24 h-1 bg-chicken-orange mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <img  class="w-full h-full object-cover" alt="A herd of healthy cattle grazing in a green pasture" src="https://images.unsplash.com/photo-1694184890026-0eed317f35e1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-goat-yellow mb-2">Vision</h3>
              <p className="text-black/80 leading-relaxed">
                To become the leading meat processing company in West Africa, setting the standard for quality,
                innovation, and sustainable practices in the industry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-chicken-orange mb-2">Mission</h3>
              <p className="text-black/80 leading-relaxed">
                To provide premium quality meat products while maintaining the highest standards of hygiene,
                safety, and customer satisfaction, contributing to community development and economic growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-cow-brown mb-2">Values</h3>
              <p className="text-black/80 leading-relaxed">
                Quality, Integrity, Innovation, Sustainability, and Community. These core values guide every
                decision we make and every product we deliver.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;