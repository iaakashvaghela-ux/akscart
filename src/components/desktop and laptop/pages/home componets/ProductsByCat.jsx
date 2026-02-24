"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: "Sarees",
    image: "https://images.unsplash.com/photo-1610189020376-70d6c97f8e3e?q=80&w=300&auto=format&fit=crop",
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    name: "Kurtas & Kurtis",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300&auto=format&fit=crop",
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    name: "Salwar Suits",
    image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=300&auto=format&fit=crop",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    name: "Lehenga",
    image: "https://images.unsplash.com/photo-1593032465171-8b37d7f8f2f0?q=80&w=300&auto=format&fit=crop",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    name: "Ethnic Gowns",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=300&auto=format&fit=crop",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&auto=format&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Tops & Shirts",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=300&auto=format&fit=crop",
    color: "from-pink-500/20 to-orange-500/20"
  },
  {
    name: "Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=300&auto=format&fit=crop",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b09a89?q=80&w=300&auto=format&fit=crop",
    color: "from-rose-500/20 to-purple-500/20"
  },
  {
    name: "Hoodies & Sweatshirts",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=300&auto=format&fit=crop",
    color: "from-gray-500/20 to-slate-500/20"
  },
  {
    name: "Oversized",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=300&auto=format&fit=crop",
    color: "from-fuchsia-500/20 to-pink-500/20"
  },
  {
    name: "Activewear",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=300&auto=format&fit=crop",
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function ProductsByCat() {
  const scrollRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 max-w-[1440px] mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          Shop by <span className="text-blue-600">Category</span>
        </h2>
        <motion.button
          whileHover={{ x: 5 }}
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          View All <span>&rarr;</span>
        </motion.button>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}

      >
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex  overflow-x-auto gap-6 md:gap-8 cursor-grab select-none no-scrollbar"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mb-4 p-1 rounded-full bg-linear-to-tr from-blue-100 to-purple-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                </div>
                <div className={`absolute inset-0 rounded-full bg-linear-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>

              <h3 className="text-sm md:text-base font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-center">
                {cat.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
