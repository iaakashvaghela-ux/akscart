"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield, Crown } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "LEVEL UP\nYOUR STYLE",
    subtitle: "Unlock Premium Access",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop",
    cta: "Equip Now",
    tag: "Epic Grade",
    color: "#6366f1", // Indigo
    icon: <Zap size={14} />
  },
  {
    id: 2,
    title: "MYTHIC\nCOLLECTION",
    subtitle: "Rarity: One of One",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    cta: "Inspect Item",
    tag: "Mythic",
    color: "#fbbf24", // Gold
    icon: <Crown size={14} />
  },
  {
    id: 3,
    title: "SHADOW\nPROTOCOL",
    subtitle: "Stealth Luxury",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
    cta: "Join Shadow",
    tag: "Legendary",
    color: "#f43f5e", // Rose
    icon: <Shield size={14} />
  }
]

export default function MobileHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef(null)

  // Motion Values for Game-like Parallax
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for high-end feel
  const rotateX = useSpring(useTransform(y, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 })

  const handleTouchMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2 * 3
    const centerY = rect.top + rect.height / 2 * 3
    const touchX = e.touches[0].clientX
    const touchY = e.touches[0].clientY

    x.set(touchX - centerX)
    y.set(touchY - centerY)
  }

  const handleTouchEnd = () => {
    x.set(0)
    y.set(0)
    setIsPaused(false)
  }

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div
      ref={containerRef}
      className="sm:hidden relative w-full h-[85vh] bg-black overflow-hidden perspective-[1000px] touch-none"
      onTouchStart={() => setIsPaused(true)}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Interactive 3D Background */}
      <motion.div
        style={{ rotateX, rotateY, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={slides[activeIndex].image}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

            {/* Game Overlay - HUD Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* 2. Floating HUD (Heads-Up Display) Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 pointer-events-none">

        {/* Top HUD: Rarity Tag */}
        <motion.div
          key={`tag-${activeIndex}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex justify-between items-start"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span style={{ color: slides[activeIndex].color }} className="animate-pulse">
                {slides[activeIndex].icon}
              </span>
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                {slides[activeIndex].tag}
              </span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, ease: "linear" }}
                style={{ backgroundColor: slides[activeIndex].color }}
                className="h-full"
              />
            </div>
          </div>

          <div className="text-white/30 text-[10px] font-bold tracking-widest">
            OS // V.1.0.4
          </div>
        </motion.div>

        {/* Bottom HUD: Information & Action */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeIndex}`}
              initial={{ x: -50, opacity: 0, skewX: -10 }}
              animate={{ x: 0, opacity: 1, skewX: 0 }}
              exit={{ x: 50, opacity: 0, skewX: 10 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <p className="text-white/60 text-xs font-bold tracking-[0.4em] uppercase mb-2">
                Mission Log: {slides[activeIndex].subtitle}
              </p>
              <h1 className="text-white text-6xl font-black leading-none tracking-tighter uppercase whitespace-pre-line drop-shadow-2xl">
                {slides[activeIndex].title}
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto"
            >
              <button
                className="group relative px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest overflow-hidden rounded-sm transition-all"
                style={{ '--btn-color': slides[activeIndex].color }}
              >
                {/* Magnetic-like hover effect simulated via scale */}
                <span className="relative z-10 flex items-center gap-3">
                  {slides[activeIndex].cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>

                {/* Glow bar */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-black/10 group-active:h-full transition-all duration-300"
                  style={{ backgroundColor: slides[activeIndex].color, opacity: 0.3 }} />
              </button>
            </motion.div>

            {/* Circle Page Progress (Game Cooldown Style) */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-12 h-12 rotate-[-90deg]">
                <circle cx="24" cy="24" r="20" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <motion.circle
                  cx="24" cy="24" r="20"
                  fill="transparent"
                  stroke={slides[activeIndex].color}
                  strokeWidth="2"
                  strokeDasharray="126"
                  initial={{ strokeDashoffset: 126 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={`circle-${activeIndex}`}
                />
              </svg>
              <span className="absolute text-[10px] text-white font-bold tracking-tighter">
                {activeIndex + 1}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Game VFX: Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: '110%',
              opacity: 0
            }}
            animate={{
              y: '-10%',
              opacity: [0, 1, 0],
              x: (Math.random() * 10 - 5) + (i * 15) + '%'
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* 4. CRT/Scanline Effect Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-30" />

      {/* Corner Brackets (Game UI) */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 z-40 pointer-events-none rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 z-40 pointer-events-none rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20 z-40 pointer-events-none rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 z-40 pointer-events-none rounded-br-lg" />
    </div>
  )
}
