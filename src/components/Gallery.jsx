import React from 'react';
import { Heart, MessageCircle, Instagram } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=600&auto=format&fit=crop",
      likes: "2.4k",
      comments: 184,
      tag: "@brew_haven"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop",
      likes: "1.9k",
      comments: 92,
      tag: "#cozyvibes"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
      likes: "3.2k",
      comments: 245,
      tag: "#freshbaked"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop",
      likes: "4.1k",
      comments: 310,
      tag: "#specialtycoffee"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop",
      likes: "1.5k",
      comments: 78,
      tag: "#baristacraft"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
      likes: "2.8k",
      comments: 153,
      tag: "#dessertheaven"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-coffee-100 dark:bg-[#0c0806] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-coffee-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-widest text-coffee-500 dark:text-coffee-400">
              Visual Craft
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-coffee-50">
              Aesthetic Moments
            </h2>
            <div className="h-[2px] w-16 bg-coffee-400"></div>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-coffee-600 hover:bg-coffee-700 dark:bg-coffee-500 dark:hover:bg-coffee-600 text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:scale-105 transition-all"
            >
              <Instagram size={16} />
              Follow @brewhaven
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-coffee-200/10 dark:border-coffee-900/10 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="Instagram post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Dark Hover Mask */}
              <div className="absolute inset-0 bg-coffee-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                
                {/* Top Corner Instagram Tag */}
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-coffee-300 tracking-wider">
                    {item.tag}
                  </span>
                  <Instagram size={18} className="text-white" />
                </div>

                {/* Center Hover Action Stats */}
                <div className="flex justify-center items-center gap-8 text-white">
                  <div className="flex items-center gap-2">
                    <Heart size={20} className="fill-white" />
                    <span className="text-sm font-bold">{item.likes}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MessageCircle size={20} className="fill-white" />
                    <span className="text-sm font-bold">{item.comments}</span>
                  </div>
                </div>

                {/* Bottom Decor */}
                <span className="text-[10px] font-semibold text-coffee-400 uppercase tracking-widest text-center">
                  Click to Open Post
                </span>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
