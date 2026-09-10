"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ui/ProductCard";

export default function WishlistPage() {
  const { wishlistItems, toggleWishlist } = useWishlist();
  const { addItem, setIsCartOpen } = useCart();

  return (
    <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-8 shadow-boutique space-y-6 animate-in fade-in">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8D4CF]">
        <div>
          <h1 className="font-serif-luxury text-2xl font-bold text-[#3A211D]">
            My Wishlist
          </h1>
          <p className="text-xs text-[#78635E] mt-0.5">
            Your saved handmade favorites and dream creations.
          </p>
        </div>
        <span className="text-xs font-semibold bg-[#FDE9E5] text-[#8F3032] px-3 py-1 rounded-full">
          {wishlistItems.length} Saved
        </span>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="py-12 text-center">
          <Heart className="w-12 h-12 text-[#E8D4CF] mx-auto mb-3" />
          <p className="text-sm font-semibold text-[#3A211D]">Your wishlist is currently empty</p>
          <p className="text-xs text-[#78635E] mt-1 mb-6">
            Tap the little heart on any crochet bouquet, bag, or plushie to save it here.
          </p>
          <Link
            href="/shop"
            className="px-6 py-2.5 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors"
          >
            Explore Creations →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
