"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function StayUpToDate() {
  return (
    <section className="px-4 md:px-8 relative z-20 -mb-20">
      <div className="max-w-[1440px] mx-auto bg-black rounded-[20px] md:rounded-[40px] px-6 py-9 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl font-[900] tracking-tighter uppercase leading-[1.1] max-w-[550px]"
        >
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-3 w-full md:w-[350px]"
        >
          {/* Email Input */}
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-black transition-colors">
              <Mail size={20} />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-12 md:h-14 pl-12 pr-4 bg-white rounded-full text-zinc-900 font-medium placeholder:text-zinc-400 focus:outline-hidden transition-all text-sm md:text-base"
            />
          </div>

          {/* Subscribe Button */}
          <button className="w-full h-12 md:h-14 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 active:scale-95 transition-all text-sm md:text-base">
            Subscribe to Newsletter
          </button>
        </motion.div>
      </div>
    </section>
  )
}
