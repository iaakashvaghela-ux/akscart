"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/desktop and laptop/common/ProductCard'

const products = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    discount: null,
    category: "Streetwear"
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    discount: "-20%",
    category: "Denim"
  },
  {
    id: 3,
    title: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1598411037848-038676c7030d?q=80&w=1000&auto=format&fit=crop",
    discount: null,
    category: "Formal"
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1503341455353-80272046ca4b?q=80&w=1000&auto=format&fit=crop",
    discount: "-30%",
    category: "Casual"
  }
]

export default function NewArrivals() {
  return (
    <section className="hidden md:block py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center mb-14 tracking-tighter uppercase"
        >
          New Arrivals
        </motion.h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button className="px-14 py-4 border border-zinc-200 rounded-full font-bold text-zinc-900 hover:bg-zinc-950 hover:text-white transition-all duration-300 active:scale-95">
            View All
          </button>
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="container mx-auto px-6 mt-20">
        <div className="h-[1px] w-full bg-zinc-100" />
      </div>
    </section>
  )
}
