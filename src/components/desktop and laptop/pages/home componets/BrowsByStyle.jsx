"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function BrowsByStyle() {
  const styles = [
    {
      name: 'Casual',
      image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1000&auto=format&fit=crop',
      grid: 'md:col-span-4'
    },
    {
      name: 'Formal',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
      grid: 'md:col-span-6'
    },
    {
      name: 'Party',
      image: 'https://clothsvilla.com/cdn/shop/files/blue-elegant-party-wear-gown-long-koti-set-with-embroidery-and-sequins_4_1024x1024.jpg?v=1736416701',
      grid: 'md:col-span-6'
    },
    {
      name: 'Gym',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
      grid: 'md:col-span-4'
    },
  ]

  return (
    <section className="px-4 md:px-8 py-10 max-w-[1440px] mx-auto">
      <div className="bg-[#f0f0f0] rounded-[24px] md:rounded-[40px] px-6 py-12 md:p-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-[900] mb-12 tracking-tighter uppercase text-zinc-900"
        >
          Browse by Dress Style
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
          {styles.map((style, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative h-[200px] sm:h-[250px] md:h-[289px] bg-white rounded-[20px] overflow-hidden group cursor-pointer ${style.grid}`}
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 z-10">
                 <div className="bg-white/10 backdrop-blur-sm/20  rounded-xl">
    <span className="text-2xl md:text-3xl font-bold text-zinc-900">
      {style.name}
    </span>
  </div>
              </div>

              {/* Subtle hover overlay for premium feel */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
