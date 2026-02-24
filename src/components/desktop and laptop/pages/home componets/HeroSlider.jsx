"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Up to 50% Off",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Minimalist Essentials",
    subtitle: "New Arrivals",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    cta: "Explore"
  },
  {
    id: 3,
    title: "Luxury Accessories",
    subtitle: "Timeless Elegance",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
    cta: "Discover"
  },
  {
    id: 4,
    title: "Exclusive Footwear",
    subtitle: "Walk in Style",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
    cta: "View All"
  },
  {
    id: 3,
    title: "Luxury Accessories",
    subtitle: "Timeless Elegance",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
    cta: "Discover"
  },
  {
    id: 3,
    title: "Luxury Accessories",
    subtitle: "Timeless Elegance",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
    cta: "Discover"
  },
  {
    id: 3,
    title: "Luxury Accessories",
    subtitle: "Timeless Elegance",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
    cta: "Discover"
  },
]




export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000); // 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="hidden sm:block relative w-full h-[90vh] overflow-hidden group bg-black cursor-pointer select-none"

    >
      {/* Background/Main Image with fade transition */}
      <div
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="absolute inset-0 transition-opacity duration-1000 bg-black">
        <img
          className='w-full h-full object-cover object-center animate-image-zoom'
          src={slides[activeIndex].image}
          key={activeIndex}
          alt={slides[activeIndex].title}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content (Title & Subtitle) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="max-w-[1440px] mx-auto h-full relative px-4 md:px-8">
          <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-4 lg:gap-6 max-w-[90vw] md:max-w-[60vw] lg:max-w-[50vw]">
            <div className="overflow-hidden py-1 lg:py-2">
              <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter opacity-0 animate-luxury whitespace-pre-line">
                {slides[activeIndex].title}
              </h1>
            </div>

            <div className="overflow-hidden py-1">
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light border-l-4 border-white pl-4 lg:pl-6 italic tracking-wide opacity-0 animate-luxury delay-400">
                {slides[activeIndex].subtitle}
              </p>
            </div>

            <div className="pt-2 lg:pt-4 overflow-hidden">
              <div className="opacity-0 animate-luxury delay-600">
                <button className="px-8 py-3 lg:px-12 lg:py-5 bg-white text-black text-xs md:text-sm lg:text-lg font-black hover:bg-transparent hover:text-white border-2 border-white transition-all duration-500 pointer-events-auto uppercase tracking-[0.2em] lg:tracking-[0.3em]">
                  {slides[activeIndex].cta}
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Slider - Alignment within container */}
          <div className="absolute bottom-2 lg:bottom-10 right-4 md:right-8 w-full sm:w-[80%] md:w-[50%] lg:w-[45%] xl:w-[40%] flex items-center overflow-hidden z-20 pointer-events-auto" onMouseDown={(e) => e.stopPropagation()}>
            <div
              className="flex gap-3 lg:gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 140 : 195)}px)`
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={`${slide.id}-${index}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(index);
                  }}
                  className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 rounded-[15px] lg:rounded-[20px] overflow-hidden ${activeIndex === index
                    ? 'w-[160px] h-[220px] lg:w-[220px] lg:h-[300px] ring-2 lg:ring-4 ring-white shadow-2xl scale-105'
                    : 'w-[130px] h-[180px] lg:w-[180px] lg:h-[250px] opacity-40 lg:opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                    }`}
                >
                  <img
                    className='w-full h-full object-cover'
                    src={slide.image}
                    alt={slide.title}
                  />
                  {activeIndex === index && (
                    <div className="absolute inset-0 border-2 lg:border-4 border-white rounded-[15px] lg:rounded-[20px]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Progress / Dots */}
          <div className="absolute bottom-6 lg:bottom-10 left-4 md:left-8 flex gap-2 pointer-events-auto">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 cursor-pointer transition-all duration-300 ${activeIndex === index ? 'w-8 lg:w-12 bg-white' : 'w-3 lg:w-4 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pause indicator (Optional visual hint) */}
      {isPaused && (
        <div className="absolute top-10 right-10 z-50 text-white/50 text-xs font-bold tracking-widest uppercase animate-pulse">
          Paused
        </div>
      )}
    </div>
  )
}
