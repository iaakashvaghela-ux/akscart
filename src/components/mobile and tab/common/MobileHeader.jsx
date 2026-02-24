"use client"

import React, { useState, useEffect } from 'react'
import { useShop } from '@/context/ShopContext'
import {
  Menu, Search, ShoppingCart, User, X, ChevronRight,
  Home, Heart, LayoutGrid, Sparkles, ShoppingBag,
  Instagram, Twitter, Facebook, ArrowRight
} from 'lucide-react'

export default function MobileHeader() {
  const { brandName, getCartCount } = useShop()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const categories = [
    { title: "Casual Wear", icon: <LayoutGrid size={18} /> },
    { title: "Limited Edition", icon: <Sparkles size={18} /> },
    { title: "Office Style", icon: <ShoppingBag size={18} /> },
    { title: "Accessories", icon: <LayoutGrid size={18} /> },
  ]

  const popularSearches = ["Summer Collection", "Gucci Sale", "Minimalist Tops", "Leather Bags"]

  return (
    <div className="w-full sm:hidden sticky top-0 z-50">

      {/* 1. Announcement Bar (Dynamic Height) */}
      <div className={`bg-zinc-950 text-white transition-all duration-300 overflow-hidden ${showTopBar ? 'h-10 opacity-100' : 'h-0 opacity-0'}`}>
        <div className="px-4 h-full flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex-1 flex justify-center items-center gap-2">
            <span className="animate-pulse">✨</span> 20% OFF ON FIRST ORDER
          </div>
          <button onClick={() => setShowTopBar(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X size={12} />
          </button>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Glassmorphism */}
      <nav className={`px-5 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-2xl shadow-lg border-b border-zinc-100' : 'bg-white border-b border-transparent'
        }`}>
        {/* Left Side: Brand Identity */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full active:scale-90 transition-transform shadow-sm"
          >
            <Menu size={20} className="text-zinc-900" />
          </button>
          <div className="text-xl font-black italic tracking-tighter uppercase text-zinc-900 leading-none">
            {brandName}
          </div>
        </div>

        {/* Right Side: Quick Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setIsSearchOpen(!isSearchOpen); if (isMenuOpen) setIsMenuOpen(false); }}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${isSearchOpen ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 rotate-90' : 'bg-zinc-50 text-zinc-600 shadow-sm'}`}
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} strokeWidth={2.5} />}
          </button>

          <button className="relative w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full text-zinc-600 active:scale-90 transition-transform shadow-sm">
            <ShoppingCart size={20} strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center border-2 border-white">
              {getCartCount()}
            </span>
          </button>
        </div>
      </nav>

      {/* 3. Advanced Search Experience */}
      <div
        className={`bg-white/90 backdrop-blur-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isSearchOpen ? 'max-h-[350px] border-b border-zinc-200' : 'max-h-0'
          }`}
      >
        <div className="p-5 space-y-6">
          <div className="flex items-center bg-zinc-100/80 rounded-2xl px-5 py-4 border border-zinc-200 focus-within:ring-2 ring-blue-500/20 transition-all shadow-inner">
            <Search size={18} className="text-zinc-400 mr-3" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent w-full outline-none text-base font-semibold placeholder:text-zinc-400 placeholder:font-normal"
              autoFocus={isSearchOpen}
            />
          </div>

          <div className="space-y-3">
            <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-1">Popular Discovery</h4>
            <div className="flex flex-wrap gap-2 pb-2">
              {popularSearches.map((tag) => (
                <button key={tag} className="px-4 py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 rounded-full text-xs font-bold text-zinc-600 transition-all active:scale-95">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Luxury App-style Drawer */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-zinc-950/40 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className={`absolute inset-y-0 left-0 w-[85%] bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-8 h-full flex flex-col overflow-y-auto scroll-smooth">

            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-zinc-950 rounded-2xl flex items-center justify-center text-white font-black text-xl italic shadow-xl">
                  {brandName[0]}
                </div>
                <div>
                  <h2 className="text-lg font-black tracking-tight tracking-tight uppercase">{brandName}</h2>
                  <p className="text-[10px] text-zinc-400 font-bold tracking-[0.2em] uppercase">Premium Hub</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center text-zinc-400 active:rotate-90 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-8 flex-1">
              <div>
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Shop Categories</h4>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat, i) => (
                    <button key={i} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-50 flex flex-col items-start gap-2 hover:bg-zinc-100 transition-all group">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-zinc-900 shadow-sm transition-transform group-hover:scale-110">
                        {cat.icon}
                      </div>
                      <span className="text-[11px] font-bold text-zinc-600">{cat.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-4">Navigation</h4>
                {["Our Story", "Trend Bulletin", "Wishlist", "Help"].map((link, i) => (
                  <button key={i} className="w-full flex items-center justify-between py-4 border-b border-zinc-50 text-base font-extrabold text-zinc-800 active:translate-x-2 transition-transform">
                    {link}
                    <ArrowRight size={16} className="text-zinc-300" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-10 space-y-6">
              <div className="p-6 bg-zinc-950 rounded-3xl text-white space-y-4 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full transition-transform group-hover:scale-150" />
                <p className="text-xs font-medium text-white/60 tracking-wider">Join Member Club</p>
                <h3 className="text-xl font-black italic tracking-tight">UP TO 30% REWARDS</h3>
                <button className="w-full py-3 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest">Login Now</button>
              </div>

              <div className="flex justify-center gap-6 text-zinc-300">
                <Instagram size={20} />
                <Twitter size={20} />
                <Facebook size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. APP-STYLE BOTTOM NAVIGATION (THE WOW FACTOR) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-16 bg-white/80 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center justify-between px-8 z-[60]">
        <button className="flex flex-col items-center gap-1 text-blue-600 transition-colors">
          <Home size={22} strokeWidth={2.5} />
          <span className="text-[9px] font-black uppercase tracking-[0.1em]">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors">
          <LayoutGrid size={22} />
          <span className="text-[9px] font-black uppercase tracking-[0.1em]">Shop</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors relative">
          <Heart size={22} />
          <span className="text-[9px] font-black uppercase tracking-[0.1em]">Saved</span>
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full pulse"></span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600 transition-colors">
          <User size={22} />
          <span className="text-[9px] font-black uppercase tracking-[0.1em]">Me</span>
        </button>
      </div>

    </div>
  )
}
