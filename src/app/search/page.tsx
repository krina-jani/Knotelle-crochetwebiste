"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Sparkles, ArrowRight, SlidersHorizontal } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/ui/ProductCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BotanicalFlourish } from "@/components/ui/BotanicalDecorations";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return PRODUCTS;

    return PRODUCTS.filter((product) => {
      const matchName = product.name.toLowerCase().includes(q);
      const matchCategory = product.category.toLowerCase().includes(q);
      const matchTags = product.tags.some((t) => t.toLowerCase().includes(q));
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchMaterial = product.materials?.some((m) => m.toLowerCase().includes(q));

      const matchesQuery = matchName || matchCategory || matchTags || matchDesc || matchMaterial;
      const matchesCat = selectedCategory === "all" || product.categorySlug === selectedCategory;

      return matchesQuery && matchesCat;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [query, selectedCategory, sortBy]);

  return (
    <div className="bg-[#FFF8F5] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: "Search", href: "/search" },
            { label: query ? `"${query}"` : "All Results" },
          ]}
          className="mb-6"
        />

        {/* Search Header Banner */}
        <div className="bg-white rounded-3xl border border-[#E8D4CF] p-8 sm:p-10 mb-8 shadow-boutique text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-2">
            <BotanicalFlourish className="w-20 h-4 text-[#E9AAA3]" />
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#3A211D] mb-2">
            {query ? (
              <>
                Search Results for{" "}
                <span className="text-[#8F3032] italic">&ldquo;{query}&rdquo;</span>
              </>
            ) : (
              "Explore All Creations"
            )}
          </h1>

          <p className="text-xs sm:text-sm text-[#78635E] mb-6">
            Found {searchResults.length} matching handmade crochet creations
          </p>

          {/* Search Input Bar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex items-center max-w-md mx-auto"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search flowers, bouquets, bags, plushies..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-[#FFF8F5] border border-[#E8D4CF] text-sm text-[#3A211D] placeholder-[#78635E]/60 focus:outline-none focus:border-[#8F3032]"
            />
            <Search className="w-5 h-5 text-[#8F3032] absolute left-4 top-1/2 -translate-y-1/2" />
          </form>
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E8D4CF] mb-8 shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-[#8F3032] text-white"
                  : "bg-[#FFF8F5] text-[#78635E] border border-[#E8D4CF] hover:text-[#3A211D]"
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.slug
                    ? "bg-[#8F3032] text-white"
                    : "bg-[#FFF8F5] text-[#78635E] border border-[#E8D4CF] hover:text-[#3A211D]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <label htmlFor="search-sort-select" className="text-xs text-[#78635E]">Sort:</label>
            <select
              id="search-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FFF8F5] border border-[#E8D4CF] rounded-full px-3 py-1.5 text-xs font-semibold text-[#3A211D] focus:outline-none cursor-pointer"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Results Grid or Empty State */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#E8D4CF] p-12 sm:p-16 text-center max-w-2xl mx-auto shadow-boutique">
            <div className="w-16 h-16 rounded-full bg-[#FDE9E5] border border-[#E8D4CF] flex items-center justify-center text-[#8F3032] mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#3A211D] mb-2">
              No little stitch found.
            </h3>

            <p className="text-sm text-[#78635E] mb-6 leading-relaxed">
              Try another search keyword, browse our curated category collections, or request a custom order crafted just for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/shop"
                className="px-6 py-2.5 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors"
              >
                Explore All Products →
              </Link>
              <Link
                href="/custom-order"
                className="px-6 py-2.5 rounded-full bg-[#FDE9E5] text-[#8F3032] text-xs font-semibold hover:bg-[#F4C7C1] border border-[#E8D4CF] transition-colors"
              >
                Create Custom Order ✨
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFF8F5] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#8F3032] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
