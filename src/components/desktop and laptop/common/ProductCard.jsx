"use client"

import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { useState } from "react";
import { useShop } from "@/context/ShopContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist: globalWishlist } = useShop();

  if (!product) return null;

  const isSelected = globalWishlist.some((item) => item.id === product.id);
  const { title, price, oldPrice, image, rating, discount, category } = product;

  return (
    <div className="relative w-full rounded-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-200/40 via-pink-200/30 to-yellow-200/40 blur-xl"></div>

      {/* Discount Badge */}
      {discount && (
        <span className="absolute top-4 left-4 z-20 bg-black text-white text-xs px-3 py-1 rounded-full tracking-wide shadow-md">
          {discount}
        </span>
      )}

      {/* Wishlist */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
        className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur p-2 rounded-full shadow-md hover:scale-110 transition active:scale-90"
      >
        <Heart
          size={18}
          className={`transition ${isSelected ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
        />
      </button>

      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-3xl aspect-[1/1.1]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Quick View Button */}
        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white text-black px-6 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-black hover:text-white">
          <Eye size={16} />
          Quick View
        </button>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">

        {/* Category */}
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
          {category || "Premium Collection"}
        </p>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-black transition truncate">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={15}
              className={`${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                } group-hover:scale-110 transition`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">({rating})</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-black">${price}</span>
            {oldPrice && (
              <span className="ml-2 text-sm line-through text-gray-400">
                ${oldPrice}
              </span>
            )}
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>

      </div>
    </div>
  );
}
