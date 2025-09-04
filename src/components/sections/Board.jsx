import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './board.css';

const Board = ({ boardMembers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % boardMembers.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + boardMembers.length) % boardMembers.length);
  const goToSlide = index => setCurrentSlide(index);

  return (
    <section id="board" className="board-section bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="board-title">
            Nigerian Food Company <span className="board-title-accent">Board Members</span>
          </h2>
          <div className="board-divider mx-auto mb-8"></div>
          <p className="board-lead">
            Meet our distinguished board members who provide strategic leadership and governance to ensure
            Nigerian Food Company continues to excel in the protein supply and processing industry.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="board-card"
            >
              <div className="board-avatar">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="board-avatar-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="board-name">{member.name}</h3>
              <p className="board-title-text">{member.title}</p>
              {member.subtitle && (
                <p className="board-subtitle">{member.subtitle}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {boardMembers.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="board-card board-card-mobile">
                      <div className="board-avatar">
                        {member.image ? (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="board-avatar-initials">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                      <h3 className="board-name">{member.name}</h3>
                      <p className="board-title-text">{member.title}</p>
                      {member.subtitle && (
                        <p className="board-subtitle">{member.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={prevSlide}
              className="board-nav board-nav-left"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="board-nav board-nav-right"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {boardMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`board-dot ${index === currentSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;