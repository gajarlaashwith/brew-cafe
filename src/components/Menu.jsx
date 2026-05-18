import React, { useState } from 'react';
import { Star, Coffee as CoffeeIcon } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Specialties' },
    { id: 'coffee', name: 'Artisanal Coffee' },
    { id: 'snacks', name: 'Snacks & Bites' },
    { id: 'desserts', name: 'Warm Desserts' }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Gold Dust Cappuccino",
      category: "coffee",
      price: "₹249",
      rating: 4.9,
      desc: "Double espresso, textured velvet oat milk, and a delicate dusting of 24k edible gold flakes.",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Classic Pour Over",
      category: "coffee",
      price: "₹189",
      rating: 4.8,
      desc: "Single-origin Ethiopian Yirgacheffe slow-brewed using our custom brass dripper.",
      image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Pistachio Matcha Latte",
      category: "coffee",
      price: "₹219",
      rating: 4.7,
      desc: "Stone-ground ceremonial Japanese Uji Matcha paired with house-made pistachio cream.",
      image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Truffle Sourdough Panini",
      category: "snacks",
      price: "₹279",
      rating: 4.9,
      desc: "Warm pressed artisanal sourdough stuffed with wild mushrooms, truffle oil, and molten fontina cheese.",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Maldon Sea Salt Croissant",
      category: "snacks",
      price: "₹159",
      rating: 4.6,
      desc: "Flaky, multi-layered French butter croissant sprinkled with organic Maldon sea salt flakes.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Espresso Infused Tiramisu",
      category: "desserts",
      price: "₹229",
      rating: 5.0,
      desc: "Traditional Italian savoiardi sponge dipped in our standard house-blend espresso & layered with mascarpone.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Belgium Fudge Brownie",
      category: "desserts",
      price: "₹189",
      rating: 4.8,
      desc: "Indulgent warm chocolate fudge brownie loaded with molten core and single-origin Madagascar cocoa nibs.",
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Rose Petal Macarons",
      category: "desserts",
      price: "₹169",
      rating: 4.7,
      desc: "Three delicate almond shells filled with cream infused with organic rose-water extract and white chocolate.",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white dark:bg-[#0e0a08] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-coffee-500 dark:text-coffee-400">
            Handcrafted Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 dark:text-coffee-50">
            Popular Specialties
          </h2>
          <div className="h-[2px] w-16 bg-coffee-400 mx-auto"></div>
          <p className="text-coffee-700 dark:text-coffee-450 font-light">
            Indulge in a premium selection of gourmet brewing recipes, freshly toasted savory bites, and artisanal pastry desserts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-coffee-600 dark:bg-coffee-500 text-white shadow-lg scale-105'
                  : 'bg-coffee-100 hover:bg-coffee-200/70 text-coffee-800 dark:bg-coffee-900/40 dark:text-coffee-300 dark:hover:bg-coffee-900/70'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-coffee-50 dark:bg-[#120d0b] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-103 transition-all duration-300 border border-coffee-200/10 dark:border-coffee-900/20"
            >
              {/* Image & Ribbon */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120d0b]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#120d0b]/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-coffee-900 dark:text-coffee-100">{item.rating}</span>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-bold text-coffee-950 dark:text-coffee-50 font-serif leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-lg font-extrabold text-coffee-600 dark:text-coffee-400 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-xs text-coffee-700 dark:text-coffee-400 font-light leading-relaxed h-12 overflow-hidden line-clamp-3">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-coffee-200/40 dark:border-coffee-900/30 flex justify-between items-center">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-coffee-400 dark:text-coffee-500 flex items-center gap-1">
                    <CoffeeIcon size={12} /> {item.category}
                  </span>
                  
                  <button className="text-xs font-bold text-coffee-600 hover:text-coffee-700 dark:text-coffee-400 dark:hover:text-coffee-300 flex items-center gap-1 group/btn">
                    Quick Order
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
