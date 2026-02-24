"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BRANDS } from "@/lib/dummyData";

export default function BrandSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const totalWidth = sliderRef.current.scrollWidth;
    gsap.to(sliderRef.current, {
      x: -totalWidth / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-20 text-white bg-gray-50 dark:bg-zinc-950 overflow-hidden border-y dark:border-zinc-900">
      <div className="max-w-[1440px] mx-auto px-6 mb-10 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">Collaborating with the best</span>
      </div>
      <div className="flex whitespace-nowrap" ref={sliderRef}>
        {[1, 2].map((loop) => (
          <div key={loop} className="flex gap-20 items-center px-10">
            {BRANDS.map((brand) => (
              <div key={brand.id} className="text-3xl lg:text-5xl font-black italic tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default uppercase">
                {brand.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
