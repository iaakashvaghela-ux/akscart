"use client"

import { useShop } from '@/context/ShopContext';
import { ShoppingCart, User, ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [showTopBar, setShowTopBar] = useState(true);
  const { brandName } = useShop();
  return (
    <div className="w-full hidden sm:block">

      {/* Top Offer Bar */}
      {showTopBar && (
        <div className="bg-black text-white text-sm flex justify-center items-center relative py-2">
          <p>
            Sign up and get 20% off to your first order.{" "}
            <span className="underline cursor-pointer font-medium">
              Sign Up Now
            </span>
          </p>
          <button
            onClick={() => setShowTopBar(false)}
            className="absolute right-4"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="flex items-center justify-between px-10 py-4 border-b">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight cursor-pointer">
          {brandName}
        </div>

        {/* Nav Links */}
        <nav className="hidden sm:flex gap-6 text-gray-700 font-medium">
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            Shop <ChevronDown size={16} />
          </div>
          <a href="#" className="hover:text-black">On Sale</a>
          <a href="#" className="hover:text-black">New Arrivals</a>
          <a href="#" className="hover:text-black">Brands</a>
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-full w-96">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <ShoppingCart className="cursor-pointer hover:text-black" />
            <User className="cursor-pointer hover:text-black" />
          </div>
        </div>

      </header>
    </div>
  );
}