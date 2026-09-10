"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export function BestSellers() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller || p.isFeatured);

  const categories = [
    { id: "all", label: "All" },
    { id: "keychain", label: "Keychains" },
    { id: "flower", label: "Flowers" },
    { id: "soft-toys", label: "Soft Toys" },
    { id: "bags", label: "Bags" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? bestSellers
      : activeTab === "flower"
      ? bestSellers.filter((p) => p.categorySlug === "flower" || p.categorySlug === "bouquet")
      : activeTab === "bags"
      ? bestSellers.filter((p) => p.categorySlug === "bags" || p.categorySlug === "coin-purse")
      : bestSellers.filter((p) => p.categorySlug === activeTab);

  return (
    <section className="py-12 sm:py-16 bg-[#FFF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2E211E]">
            Best Sellers
          </h2>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? "bg-[#913638] text-white shadow-xs"
                    : "bg-transparent text-[#786864] hover:text-[#2E211E]"
                }`}
              >
                {cat.label}
              </button>
            ))}

            <Link
              href="/shop"
              className="text-xs font-semibold text-[#786864] hover:text-[#913638] flex items-center gap-1 pl-2 whitespace-nowrap"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Product Grid / Carousel with Edge Arrows */}
        <div className="relative">
          {/* Arrow Left */}
          <button
            aria-label="Scroll left"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] flex items-center justify-center shadow-md transition-all hidden sm:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 6 Products Grid (6 cols on xl/lg, 3 cols tablet, 2 cols mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredProducts.slice(0, 6).map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 4} />
            ))}
          </div>

          {/* Arrow Right */}
          <button
            aria-label="Scroll right"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] flex items-center justify-center shadow-md transition-all hidden sm:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
