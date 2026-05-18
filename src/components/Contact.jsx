import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, Users, Coffee, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-coffee-100 dark:bg-[#0c0806] transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Info & Map (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-coffee-500 dark:text-coffee-400">
                Plan a Visit
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-coffee-50">
                Contact & Location
              </h2>
              <div className="h-[2px] w-16 bg-coffee-400"></div>
            </div>

            <p className="text-coffee-800 dark:text-coffee-300 font-light leading-relaxed">
              We are nestled in the heart of the luxury shopping district. Drop by for freshly baked treats, single-origin coffees, or cozy reading time.
            </p>

            {/* Quick Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-coffee-200/60 dark:bg-coffee-900/40 flex items-center justify-center text-coffee-600 dark:text-coffee-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-coffee-950 dark:text-coffee-50 mb-1">Our Haven</h4>
                  <p className="text-xs text-coffee-700 dark:text-coffee-400 font-light leading-relaxed">
                    102, Elite Arcade, Galleria Road,<br />Bandra West, Mumbai - 400050
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-coffee-200/60 dark:bg-coffee-900/40 flex items-center justify-center text-coffee-600 dark:text-coffee-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-coffee-950 dark:text-coffee-50 mb-1">Hours of Joy</h4>
                  <p className="text-xs text-coffee-700 dark:text-coffee-400 font-light leading-relaxed">
                    Mon - Fri: 08:00 AM - 10:00 PM<br />Sat - Sun: 09:00 AM - 11:30 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-coffee-200/60 dark:bg-coffee-900/40 flex items-center justify-center text-coffee-600 dark:text-coffee-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-coffee-950 dark:text-coffee-50 mb-1">Call Us</h4>
                  <p className="text-xs text-coffee-700 dark:text-coffee-400 font-light leading-relaxed">
                    +91 22 4920 1837<br />+91 98200 48201
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-coffee-200/60 dark:bg-coffee-900/40 flex items-center justify-center text-coffee-600 dark:text-coffee-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-coffee-950 dark:text-coffee-50 mb-1">Say Hello</h4>
                  <p className="text-xs text-coffee-700 dark:text-coffee-400 font-light leading-relaxed">
                    hello@brewhavencafe.in<br />reservations@brewhavencafe.in
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Premium Styled Google Map Embed Placeholder */}
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-coffee-200/30 dark:border-coffee-900/20 group">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8039327599026!2d72.8252277!3d19.0283088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced06fffffff%3A0x60b09eb12ffc7a37!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1684349129532!5m2!1sen!2sin"
                className="w-full h-full border-none filter contrast-110 saturate-75 opacity-90 dark:opacity-75 dark:invert"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Column 2: Table Reservation Card (5 columns) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#120d0b] p-8 md:p-10 rounded-3xl border border-coffee-250/20 dark:border-coffee-900/10 shadow-xl relative overflow-hidden">
              
              {/* Card Decor Background Accent */}
              <div className="absolute right-[-10px] top-[-10px] w-24 h-24 bg-coffee-450/10 rounded-full blur-2xl pointer-events-none"></div>

              {isSuccess ? (
                /* Interactive success confirmation */
                <div className="text-center py-10 space-y-6 animate-slide-up">
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-450">
                    <CheckCircle size={44} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-coffee-950 dark:text-coffee-50">
                      Table Reserved!
                    </h3>
                    <p className="text-sm text-coffee-700 dark:text-coffee-400 font-light leading-relaxed">
                      Dear <span className="font-bold">{formData.name}</span>, your table for <span className="font-bold">{formData.guests} guests</span> on <span className="font-bold">{formData.date}</span> at <span className="font-bold">{formData.time}</span> is officially secured.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-coffee-100/50 dark:bg-coffee-900/20 rounded-2xl border border-coffee-200/20 dark:border-coffee-900/20 text-xs text-coffee-600 dark:text-coffee-400 leading-relaxed">
                    A luxurious confirmation receipt with gate pass details has been dispatched to <span className="font-bold text-coffee-900 dark:text-coffee-250">{formData.email}</span>.
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', date: '', time: '', guests: '2', notes: '' });
                    }}
                    className="w-full bg-coffee-600 hover:bg-coffee-700 dark:bg-coffee-500 dark:hover:bg-coffee-600 text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Reserve Another Table
                  </button>
                </div>
              ) : (
                /* Reservation form code */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-coffee-950 dark:text-coffee-50">
                      Reserve a Table
                    </h3>
                    <p className="text-xs text-coffee-500 dark:text-coffee-400 font-light">
                      Reserve your premium seating. We hold reservations for a maximum of 15 minutes.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-coffee-700 dark:text-coffee-350 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rohan Kapoor"
                      className="w-full bg-coffee-100/60 focus:bg-white dark:bg-coffee-900/30 dark:focus:bg-[#0c0806] px-4 py-3 rounded-2xl border border-coffee-200/20 focus:border-coffee-400 dark:border-coffee-900/30 dark:focus:border-coffee-600 text-sm focus:outline-none transition-all dark:text-coffee-50"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-coffee-700 dark:text-coffee-350 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rohan@gmail.com"
                      className="w-full bg-coffee-100/60 focus:bg-white dark:bg-coffee-900/30 dark:focus:bg-[#0c0806] px-4 py-3 rounded-2xl border border-coffee-200/20 focus:border-coffee-400 dark:border-coffee-900/30 dark:focus:border-coffee-600 text-sm focus:outline-none transition-all dark:text-coffee-50"
                    />
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-coffee-700 dark:text-coffee-350 uppercase tracking-wider flex items-center gap-1">
                        <Calendar size={12} /> Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-coffee-100/60 focus:bg-white dark:bg-coffee-900/30 dark:focus:bg-[#0c0806] px-4 py-3 rounded-2xl border border-coffee-200/20 focus:border-coffee-400 dark:border-coffee-900/30 dark:focus:border-coffee-600 text-sm focus:outline-none transition-all dark:text-coffee-50"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-coffee-700 dark:text-coffee-350 uppercase tracking-wider flex items-center gap-1">
                        <Clock size={12} /> Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-coffee-100/60 focus:bg-white dark:bg-coffee-900/30 dark:focus:bg-[#0c0806] px-4 py-3 rounded-2xl border border-coffee-200/20 focus:border-coffee-400 dark:border-coffee-900/30 dark:focus:border-coffee-600 text-sm focus:outline-none transition-all dark:text-coffee-50"
                      />
                    </div>
                  </div>

                  {/* Guests Selector */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-coffee-700 dark:text-coffee-350 uppercase tracking-wider flex items-center gap-1">
                      <Users size={12} /> Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-coffee-100/60 focus:bg-white dark:bg-coffee-900/30 dark:focus:bg-[#0c0806] px-4 py-3 rounded-2xl border border-coffee-200/20 focus:border-coffee-400 dark:border-coffee-900/30 dark:focus:border-coffee-600 text-sm focus:outline-none transition-all dark:text-coffee-50 cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ People (Group Lounge)</option>
                    </select>
                  </div>

                  {/* Special notes */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-coffee-700 dark:text-coffee-350 uppercase tracking-wider">Special Requests</label>
                    <textarea
                      name="notes"
                      rows="2"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="e.g. Window seat, anniversary flower setups, silent corner..."
                      className="w-full bg-coffee-100/60 focus:bg-white dark:bg-coffee-900/30 dark:focus:bg-[#0c0806] px-4 py-3 rounded-2xl border border-coffee-200/20 focus:border-coffee-400 dark:border-coffee-900/30 dark:focus:border-coffee-600 text-sm focus:outline-none transition-all dark:text-coffee-50 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-coffee-600 hover:bg-coffee-700 dark:bg-coffee-500 dark:hover:bg-coffee-600 disabled:bg-coffee-400 dark:disabled:bg-coffee-800 disabled:cursor-not-allowed text-white py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg hover:scale-103 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Securing Seats...
                      </>
                    ) : (
                      <>
                        <Coffee size={14} />
                        Confirm Reservation
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
