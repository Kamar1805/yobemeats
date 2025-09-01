import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Board = ({
  boardMembers
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % boardMembers.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + boardMembers.length) % boardMembers.length);
  };
  const goToSlide = index => {
    setCurrentSlide(index);
  };
  return <section id="board" className="py-20 bg-white text-cow-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-goat-yellow mb-6">Yobe Meats Board Members</h2>
          <div className="w-24 h-1 bg-chicken-orange mx-auto mb-8"></div>
          <p className="text-cow-brown/80 max-w-3xl mx-auto text-lg">
            Meet our distinguished board members who provide strategic leadership and governance to ensure
            Yobe Meats continues to excel in the meat processing industry.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-cow-brown/20">
                {member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-goat-yellow">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>}
              </div>
              <h3 className="text-lg font-semibold text-goat-yellow mb-2">{member.name}</h3>
              <p className="text-cow-brown/80 text-sm mb-1">{member.title}</p>
              {member.subtitle && <p className="text-chicken-orange text-sm whitespace-pre-line">{member.subtitle}</p>}
            </motion.div>)}
        </div>

        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div className="flex transition-transform duration-300 ease-in-out" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
                {boardMembers.map((member, index) => <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
                      <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-cow-brown/20">
                        {member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center">
                            <span className="text-4xl font-bold text-goat-yellow">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>}
                      </div>
                      <h3 className="text-xl font-semibold text-goat-yellow mb-2">{member.name}</h3>
                      <p className="text-cow-brown/80 mb-1">{member.title}</p>
                      {member.subtitle && <p className="text-chicken-orange whitespace-pre-line">{member.subtitle}</p>}
                    </div>
                  </div>)}
              </motion.div>
            </div>

            <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-cow-brown p-2 rounded-full transition-colors duration-300 shadow-md">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-cow-brown p-2 rounded-full transition-colors duration-300 shadow-md">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {boardMembers.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-goat-yellow' : 'bg-goat-yellow/30'}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Board;