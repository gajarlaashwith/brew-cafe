import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop')"
      }}
    >
      {/* Dark overlay with dynamic warm tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-coffee-900/40 dark:to-[#0c0806]"></div>

      {/* Coffee smoke ambient animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,139,90,0.05),transparent)] pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-slide-up">
        {/* Aesthetic subhead with a line decoration */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-coffee-400"></span>
          <span className="text-sm font-semibold uppercase tracking-widest text-coffee-300">
            Est. 2024 • Specialty Coffee Roasters
          </span>
          <span className="h-[1px] w-8 bg-coffee-400"></span>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-semibold text-white tracking-wide mb-6 leading-tight">
          Sip the Warmth of <br />
          <span className="text-coffee-300 italic font-normal">Brew Haven</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Step into a cozy urban sanctuary. Experience artisanal, locally sourced beans meticulously handcrafted by expert baristas.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#menu"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-coffee-500 hover:bg-coffee-600 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl shadow-coffee-900/30 hover:scale-105"
          >
            Explore Our Menu
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="#about"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-105"
          >
            <Play size={14} className="fill-white" />
            Our Story
          </a>
        </div>
      </div>

      {/* Ambient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-coffee-100 to-transparent dark:from-[#0c0806] pointer-events-none"></div>
    </section>
  );
}
