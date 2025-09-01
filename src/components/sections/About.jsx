import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const meatProducts = [
    { name: 'Beef', description: 'Tender, flavorful beef from locally raised cattle.' },
    { name: 'Goat Meat', description: 'High-quality, lean goat meat, a regional favorite.' },
    { name: 'Chicken', description: 'Fresh and succulent chicken, perfect for any dish.' },
    { name: 'Ram Meat', description: 'Premium ram meat, known for its rich taste.' },
  ];

  return (
    <section id="about" className="py-20 bg-white text-cow-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-goat-yellow mb-6">About Yobe Meats</h2>
          <div className="w-24 h-1 bg-chicken-orange mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-cow-brown mb-6">Excellence in Meat Processing</h3>
            <p className="text-cow-brown/80 mb-6 leading-relaxed">
              Yobe Meats stands as a beacon of quality in the meat processing industry. Operating from the state-of-the-art
              Damaturu Modern Abattoir, we have established ourselves as the premier destination for high-quality meat products
              in the region.
            </p>
            <p className="text-cow-brown/80 leading-relaxed">
              Our commitment to excellence extends beyond just processing. We ensure that every step of our operation,
              from sourcing to distribution, meets the highest international standards of quality, safety, and hygiene.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img  class="w-full h-full object-cover" alt="A clean, modern meat processing facility" src="https://images.unsplash.com/photo-1690269787009-a97a17ebe987" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-chicken-orange mb-10">Our Premium Meat Selection</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {meatProducts.map((meat, index) => (
              <motion.div
                key={meat.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center"
              >
                <h4 className="text-xl font-semibold text-cow-brown mb-2">{meat.name}</h4>
                <p className="text-cow-brown/70">{meat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;