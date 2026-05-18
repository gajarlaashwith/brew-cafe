import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu as MenuIcon, X, Coffee } from 'lucide-react';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav py-4 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-coffee-500 flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <Coffee size={20} />
          </div>
          <span className="text-xl font-bold tracking-wider font-serif text-coffee-800 dark:text-coffee-100 group-hover:text-coffee-500 dark:group-hover:text-coffee-400 transition-colors">
            BREW HAVEN
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-coffee-800 dark:text-coffee-200 hover:text-coffee-500 dark:hover:text-coffee-400 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-coffee-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-coffee-200/50 dark:hover:bg-coffee-850/50 text-coffee-800 dark:text-coffee-200 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Book a Table Link */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-coffee-600 hover:bg-coffee-700 text-white dark:bg-coffee-500 dark:hover:bg-coffee-600 shadow-md transition-all duration-300 hover:scale-105"
          >
            Book Table
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-coffee-200/50 dark:hover:bg-coffee-850/50 text-coffee-800 dark:text-coffee-200 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-coffee-800 dark:text-coffee-200 p-1"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-[72px] right-0 w-3/4 max-w-sm h-[calc(100vh-72px)] bg-coffee-100 dark:bg-[#0e0a08] shadow-2xl p-8 transform transition-transform duration-300 ease-in-out border-l border-coffee-200/20 dark:border-coffee-900/30 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-coffee-800 dark:text-coffee-200 hover:text-coffee-500 dark:hover:text-coffee-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 rounded-full text-center text-sm font-semibold uppercase tracking-wider bg-coffee-600 dark:bg-coffee-500 text-white shadow-md"
          >
            Book Table
          </a>
        </div>
      </div>
    </nav>
  );
}
