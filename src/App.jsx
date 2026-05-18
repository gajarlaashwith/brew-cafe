import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c0806] text-coffee-100">
        <div className="relative flex flex-col items-center">
          {/* Coffee Cup Loading Animation */}
          <div className="relative w-20 h-24 border-4 border-coffee-200 rounded-b-3xl border-t-0 flex items-end overflow-hidden mb-4">
            {/* Handle */}
            <div className="absolute right-[-14px] top-4 w-4 h-10 border-4 border-coffee-200 border-l-0 rounded-r-full"></div>
            {/* Liquid Filling Up */}
            <div className="w-full bg-coffee-500 animate-[drip_2s_infinite] h-[75%] rounded-b-2xl origin-bottom"></div>
            {/* Steam */}
            <div className="absolute top-[-20px] left-1/4 w-1 h-5 bg-coffee-300/40 rounded-full blur-[1px] animate-[pulse_1s_infinite]"></div>
            <div className="absolute top-[-20px] left-1/2 w-1 h-6 bg-coffee-300/40 rounded-full blur-[1px] animate-[pulse_1.2s_infinite]"></div>
            <div className="absolute top-[-20px] left-3/4 w-1 h-5 bg-coffee-300/40 rounded-full blur-[1px] animate-[pulse_1.4s_infinite]"></div>
          </div>
          
          <h1 className="text-2xl font-serif tracking-widest uppercase animate-pulse text-coffee-300">
            Brew Haven
          </h1>
          <p className="text-xs tracking-widest text-coffee-400 mt-2">BREWING PERFECTION...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-coffee-500 selection:text-white transition-opacity duration-700 ease-out opacity-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
