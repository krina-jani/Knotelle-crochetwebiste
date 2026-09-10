"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Sparkles } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { StarRating } from "./StarRating";
import { Badge } from "./Badge";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem, setIsCartOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const isWishlisted = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, {
      color: product.colors[0],
      size: product.sizes?.[0],
    });
    setIsCartOpen(true);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div
      className="group relative flex flex-col bg-white rounded-3xl border border-[#E7D1CC]/90 overflow-hidden shadow-boutique hover:shadow-boutique-hover transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Link */}
      <div className="relative aspect-[4/4.8] w-full bg-[#FFF9F6] overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block w-full h-full relative">
          <Image
            src={
              isHovered && product.images[1]
                ? product.images[1]
                : product.images[0]
            }
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            priority={priority}
          />
        </Link>

        {/* Badges Top-Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isBestSeller && (
            <Badge variant="rose" className="shadow-xs text-[10px] uppercase font-bold tracking-wider">
              Best Seller
            </Badge>
          )}
          {product.isNew && !product.isBestSeller && (
            <Badge variant="pink" className="shadow-xs text-[10px] uppercase font-bold tracking-wider">
              New
            </Badge>
          )}
          {product.isCustomizable && (
            <Badge variant="gold" className="shadow-xs text-[10px] uppercase font-bold tracking-wider flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              Customizable
            </Badge>
          )}
        </div>

        {/* Wishlist Button Top-Right */}
        <button
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#E7D1CC] flex items-center justify-center text-[#786864] hover:text-[#913638] hover:bg-white transition-all shadow-xs active:scale-90"
        >
          <Heart
            className={`w-4 h-4 transition-all ${
              isWishlisted
                ? "fill-[#913638] text-[#913638] scale-110"
                : "hover:scale-110"
            }`}
          />
        </button>

        {/* Quick Add Overlay on Desktop Hover */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
          <button
            onClick={handleQuickAdd}
            className="flex-1 py-2 px-3 rounded-full bg-[#913638]/95 hover:bg-[#74292B] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-md backdrop-blur-sm transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Quick Add</span>
          </button>
          <Link
            href={`/product/${product.slug}`}
            className="w-8 h-8 rounded-full bg-white text-[#2E211E] hover:text-[#913638] border border-[#E7D1CC] flex items-center justify-center shadow-md transition-colors shrink-0"
            aria-label={`View ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 bg-white">
        {/* Product Title */}
        <Link
          href={`/product/${product.slug}`}
          className="font-serif-luxury text-base font-bold text-[#2E211E] group-hover:text-[#913638] transition-colors line-clamp-1 mb-1"
        >
          {product.name}
        </Link>

        {/* Price & Rating Row */}
        <div className="mt-auto pt-1 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-[#913638]">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.comparePrice && (
              <span className="text-xs text-[#786864] line-through">
                ₹{product.comparePrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <StarRating rating={product.rating} size="sm" showNumber reviewCount={product.reviewCount} />
        </div>

        {/* Mobile-only Direct Add to Cart Button */}
        <button
          onClick={handleQuickAdd}
          className="mt-3 sm:hidden w-full py-1.5 px-3 rounded-full bg-[#FCE9E5] text-[#913638] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#E7D1CC]"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
