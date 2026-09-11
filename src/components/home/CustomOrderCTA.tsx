"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { FlowerIcon, BotanicalFlourish } from "@/components/ui/BotanicalDecorations";

const ROTATING_TITLES = [
  { line1: "Your Idea.", line2: "Our Yarn.", accent: "Bespoke Handcrafting" },
  { line1: "Your Memory.", line2: "Our Craft.", accent: "Woven With Love" },
  { line1: "Your Wish.", line2: "Our Magic.", accent: "Artisanal Perfection" },
  { line1: "Your Story.", line2: "Our Stitches.", accent: "Handmade Treasures" },
  { line1: "Your Vision.", line2: "Our Creation.", accent: "Crafted For You" },
];

export function CustomOrderCTA() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Rotate title every 2 seconds (2000ms) with smooth fade
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        setIsFading(false);
      }, 300); // quick fade transition
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const current = ROTATING_TITLES[currentIndex];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FFF9F6] relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#FCE9E5]/60 via-[#F7D2CC]/40 to-[#EFB8B0]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Main Enhanced Luxury Card Container */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-b from-[#FFF5F2] via-[#FDE9E5]/90 to-[#FCE3DC]/95 border-2 border-[#E7D1CC] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_rgba(145,54,56,0.08)] overflow-hidden transition-all hover:shadow-[0_25px_60px_rgba(145,54,56,0.12)]">
          
          {/* Corner Floating Floral & Botanical Motifs */}
          <div className="absolute -top-3 -left-3 text-[#913638]/15 animate-pulse duration-1000 hidden sm:block pointer-events-none">
            <FlowerIcon className="w-16 h-16 transform -rotate-12" />
          </div>
          <div className="absolute -bottom-3 -right-3 text-[#913638]/15 animate-pulse duration-1000 hidden sm:block pointer-events-none">
            <FlowerIcon className="w-16 h-16 transform rotate-45" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-7 relative z-10">
            
            {/* Dynamic Accent Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#E7D1CC] text-xs font-semibold text-[#913638] shadow-xs transition-all duration-300">
              <Sparkles className="w-3.5 h-3.5 text-[#C89B61] animate-spin duration-3000" />
              <span className="tracking-wide">{current.accent}</span>
              <Heart className="w-3 h-3 fill-[#913638] text-[#913638]" />
            </div>

            {/* Dynamic Animated Title (Changes every 2 seconds) */}
            <div className="space-y-3 min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center">
              <h2
                className={`font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-[#2E211E] tracking-tight leading-[1.12] transition-all duration-300 transform ${
                  isFading
                    ? "opacity-0 -translate-y-2 scale-98"
                    : "opacity-100 translate-y-0 scale-100"
                }`}
              >
                <span>{current.line1}</span>
                <span className="block text-[#913638] italic font-serif font-normal mt-1">
                  {current.line2}
                </span>
              </h2>

              <div className="flex justify-center pt-1">
                <BotanicalFlourish className="w-28 h-5 text-[#EFB8B0]" />
              </div>
            </div>

            {/* Explanatory Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#786864] max-w-xl mx-auto leading-relaxed">
              From custom color palettes and personalized initials to unique floral bouquets and character plushies — let&apos;s create something made especially for you.
            </p>

            {/* CTA Button & Indicator Dots */}
            <div className="pt-2 flex flex-col items-center gap-4">
              <Link
                href="/custom-order"
                className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#913638] text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-[#74292B] shadow-md hover:shadow-boutique-hover hover:scale-105 transition-all group active:scale-95"
              >
                <span>Start a Custom Order</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              {/* 2-Second Rotating Indicator Dots */}
              <div className="flex items-center gap-2 pt-1">
                {ROTATING_TITLES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === i
                        ? "w-6 bg-[#913638]"
                        : "w-1.5 bg-[#E7D1CC] hover:bg-[#EFB8B0]"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
