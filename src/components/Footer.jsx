import React from 'react';
import { Coffee, Instagram, Facebook, Twitter, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Instagram size={18} />, href: "https://instagram.com" },
    { icon: <Facebook size={18} />, href: "https://facebook.com" },
    { icon: <Twitter size={18} />, href: "https://twitter.com" },
    { icon: <Youtube size={18} />, href: "https://youtube.com" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Story", href: "#about" },
    { name: "Artisanal Menu", href: "#menu" },
    { name: "Visual Gallery", href: "#gallery" },
    { name: "Guest Reviews", href: "#reviews" },
    { name: "Table Booking", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-coffee-900 text-coffee-100 dark:bg-[#080504] border-t border-coffee-950 dark:border-coffee-950/20 transition-colors duration-500 pt-16 pb-8 relative overflow-hidden">
      
      {/* Subtle bottom design accent */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-coffee-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand details */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-coffee-500 flex items-center justify-center text-white transition-transform group-hover:rotate-12">
                <Coffee size={20} />
              </div>
              <span className="text-xl font-bold tracking-wider font-serif text-white">
                BREW HAVEN
              </span>
            </a>
            
            <p className="text-xs text-coffee-400 font-light leading-relaxed">
              Crafting premium specialty coffee and serving aesthetic urban vibes daily. Experience elite culinary recipes and organic beans in a luxurious environment.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-coffee-800/60 dark:bg-coffee-900/60 hover:bg-coffee-500 dark:hover:bg-coffee-500 flex items-center justify-center text-coffee-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick navigation links */}
          <div className="space-y-6">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Quick Explore
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-light text-coffee-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-coffee-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Newsletter signup */}
          <div className="space-y-6">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Newsletter
            </h4>
            <p className="text-xs text-coffee-400 font-light leading-relaxed">
              Subscribe to unlock special invite-only tasting events, secret menus, and discount codes.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed successfully!"); }} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email..."
                className="bg-coffee-800/40 dark:bg-coffee-900/40 px-4 py-2.5 rounded-l-2xl border border-coffee-850 focus:border-coffee-500 focus:outline-none text-xs text-white placeholder-coffee-600 w-full"
              />
              <button
                type="submit"
                className="bg-coffee-500 hover:bg-coffee-600 px-4 rounded-r-2xl text-xs font-semibold text-white uppercase tracking-wider transition-all shrink-0"
              >
                Join
              </button>
            </form>
          </div>

          {/* Col 4: Quick Opening hours info */}
          <div className="space-y-6">
            <h4 className="font-serif font-bold text-base text-white tracking-wide">
              Our Hours
            </h4>
            <ul className="space-y-3 text-xs font-light text-coffee-400">
              <li className="flex justify-between border-b border-coffee-800/40 pb-1.5">
                <span>Weekdays (Mon-Fri)</span>
                <span className="font-semibold text-coffee-300">08:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-coffee-800/40 pb-1.5">
                <span>Weekends (Sat-Sun)</span>
                <span className="font-semibold text-coffee-300">09:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between text-coffee-500 text-[10px] font-bold tracking-widest uppercase">
                <span>* Happy Hour Daily</span>
                <span>04:00 PM - 06:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 border-t border-coffee-800/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-coffee-500">
          <p>
            &copy; {new Date().getFullYear()} Brew Haven Cafe. All rights reserved. Designed with passion for gourmet coffee.
          </p>
          
          <div className="flex gap-6">
            <a href="#home" className="hover:text-coffee-300 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-coffee-300 transition-colors">Terms of Service</a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-coffee-800/80 hover:bg-coffee-500 flex items-center justify-center text-coffee-300 hover:text-white transition-all shadow-md hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
