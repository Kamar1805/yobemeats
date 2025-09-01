import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { boardMembers } from '@/data/team';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Vision from '@/components/sections/Vision';
import Board from '@/components/sections/Board';
import Contact from '@/components/sections/Contact';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuote = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Yobe Meats - Premium Quality Meat Products | Damaturu Modern Abattoir</title>
        <meta name="description" content="Yobe Meats is your trusted source for premium quality meat products from Damaturu Modern Abattoir. Committed to excellence in meat processing and distribution." />
      </Helmet>

      <Header scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Vision />
        <Board boardMembers={boardMembers} />
        <Contact handleGetQuote={handleGetQuote} />
      </main>

      <Footer scrollToSection={scrollToSection} />
      <Toaster />
    </div>
  );
}

export default App;