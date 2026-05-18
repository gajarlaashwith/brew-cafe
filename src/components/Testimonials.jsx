import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "The Gold Flake Cappuccino is an absolute work of art. The atmosphere is quiet, warm, and highly elegant—an elite spot for catching up on designs or reading."
    },
    {
      id: 2,
      name: "Meera Iyer",
      role: "Digital Nomad",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "My absolute go-to office away from home. The high-speed internet is extremely stable, the staff is incredibly hospitable, and their truffle sourdough panini is a pure gourmet dream."
    },
    {
      id: 3,
      name: "Kabir Malhotra",
      role: "Coffee Aficionado",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      comment: "As a specialist roaster myself, I am very picky about my pour-overs. Brew Haven's slow-dripped Ethiopian micro-lot is simply perfect. Perfectly extracted with bright citric notes."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-[#0e0a08] transition-colors duration-500 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-coffee-500 dark:text-coffee-400">
            Guest Journal
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-coffee-50">
            Reviews & Stories
          </h2>
          <div className="h-[2px] w-16 bg-coffee-400 mx-auto"></div>
          <p className="text-coffee-700 dark:text-coffee-400 font-light">
            Read high-end testimonials from our community of dedicated gourmet coffee lovers and daily writers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative bg-coffee-100 dark:bg-[#120d0b] p-8 rounded-3xl border border-coffee-250/20 dark:border-coffee-900/10 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102 flex flex-col justify-between"
            >
              {/* Quote Decor */}
              <Quote className="absolute top-6 right-8 text-coffee-300/35 dark:text-coffee-800/30 w-12 h-12" />

              {/* Body */}
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-coffee-800 dark:text-coffee-300 leading-relaxed font-light italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-coffee-250/50 dark:border-coffee-900/25">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-coffee-400/50"
                />
                <div>
                  <h4 className="font-bold text-sm text-coffee-950 dark:text-coffee-50">
                    {review.name}
                  </h4>
                  <p className="text-xs text-coffee-400 dark:text-coffee-500 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
