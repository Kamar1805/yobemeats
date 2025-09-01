import React from 'react';
import { motion } from 'framer-motion';

const Management = ({ managementTeam }) => {
  return (
    <section id="management" className="py-20 bg-cow-brown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-goat-yellow mb-6">Management Team</h2>
          <div className="w-24 h-1 bg-chicken-orange mx-auto mb-8"></div>
          <p className="text-cow-brown/80 max-w-3xl mx-auto text-lg">
            Our experienced management team brings together decades of expertise in meat processing,
            operations, and business development to drive Yobe Meats forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managementTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-cow-brown/20">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-chicken-orange">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-chicken-orange mb-2">{member.name}</h3>
              <p className="text-cow-brown/80 text-sm mb-1">{member.title}</p>
              <p className="text-goat-yellow text-sm">{member.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;