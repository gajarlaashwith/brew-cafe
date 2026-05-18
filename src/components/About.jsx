import React from 'react';
import { ShieldCheck, Heart, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <ShieldCheck className="text-coffee-600 dark:text-coffee-400" size={24} />,
      title: "100% Organic Beans",
      desc: "Directly sourced from sustainable premium micro-lots across the globe."
    },
    {
      icon: <Award className="text-coffee-600 dark:text-coffee-400" size={24} />,
      title: "Master Roasters",
      desc: "Handcrafted roasting processes customized to bring out elite flavor profiles."
    },
    {
      icon: <Heart className="text-coffee-600 dark:text-coffee-400" size={24} />,
      title: "Cozy Spaces",
      desc: "A warm, high-end design environment ideal for focused work or relaxed chats."
    }
  ];

  return (
    <section id="about" className="py-24 bg-coffee-100 dark:bg-[#0c0806] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            {/* Ambient gold glow behind images */}
            <div className="absolute inset-0 bg-coffee-400/10 dark:bg-coffee-500/5 blur-3xl rounded-full scale-75"></div>
            
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop"
                alt="Cozy Coffee cup"
                className="rounded-3xl shadow-2xl hover:scale-102 transition-transform duration-500 object-cover w-full h-80"
              />
              <img
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop"
                alt="Pouring Cold Coffee"
                className="rounded-3xl shadow-xl hover:scale-102 transition-transform duration-500 object-cover w-full h-48"
              />
            </div>
            
            <div className="space-y-4 pt-12">
              <img
                src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=600&auto=format&fit=crop"
                alt="Cafe Interior"
                className="rounded-3xl shadow-xl hover:scale-102 transition-transform duration-500 object-cover w-full h-48"
              />
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop"
                alt="Espresso Machine"
                className="rounded-3xl shadow-2xl hover:scale-102 transition-transform duration-500 object-cover w-full h-80"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-coffee-500 dark:text-coffee-400">
                Discover Our Craft
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-coffee-50 leading-tight">
                Designed for Coffee Lovers & Atmosphere Seekers
              </h2>
            </div>
            
            <p className="text-lg text-coffee-800 dark:text-coffee-300 font-light leading-relaxed">
              Brew Haven Cafe is more than a spot for premium espresso. It is a carefully curated retreat designed to inspire and soothe. From our meticulously calibrated roasts to our architectural glass-house space, we are dedicated to providing a luxurious, relaxing coffee house experience.
            </p>
            
            <p className="text-base text-coffee-700 dark:text-coffee-400 font-light leading-relaxed">
              Whether you are drafting your next venture, sharing cozy moments with close friends, or discovering the dynamic tasting notes of single-origin pour-overs, Brew Haven welcomes you to slow down and savor the craftsmanship.
            </p>

            {/* Highlights list */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-coffee-200/55 dark:border-coffee-900/35">
              {highlights.map((hl, idx) => (
                <div key={idx} className="space-y-3 hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-coffee-200/50 dark:bg-coffee-900/40 flex items-center justify-center">
                    {hl.icon}
                  </div>
                  <h4 className="font-semibold text-coffee-900 dark:text-coffee-100 text-sm">
                    {hl.title}
                  </h4>
                  <p className="text-xs text-coffee-600 dark:text-coffee-400 font-light leading-relaxed">
                    {hl.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
