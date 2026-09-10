"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BotanicalCornerFlourish, HandmadePaperTag } from "@/components/ui/BotanicalDecorations";

const HERO_SLIDES = [
  {
    titleLine1: "Little",
    titleLine2: "Stitches",
    titleHighlight: "Big Happiness",
    subtitle: "Handmade crochet products that add warmth to your everyday life.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1200&auto=format&fit=crop",
    tagText: "Good Things Are Handmade",
    scriptAccent: "Yarn Crafts Happiness",
  },
  {
    titleLine1: "Custom",
    titleLine2: "Crochet",
    titleHighlight: "Made With Love",
    subtitle: "Everlasting floral bouquets and bespoke plushies crafted just for you.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop",
    tagText: "Handmade With Love",
    scriptAccent: "Every Stitch Has A Story",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden bg-[#FFF9F6] border-b border-[#E7D1CC]/70 py-10 lg:py-14">
      {/* Delicate Floral Corner Accents */}
      <div className="absolute top-2 left-2 text-[#EFB8B0]/40 pointer-events-none">
        <BotanicalCornerFlourish className="w-28 h-28" />
      </div>
      <div className="absolute bottom-2 right-2 text-[#EFB8B0]/40 pointer-events-none transform rotate-180">
        <BotanicalCornerFlourish className="w-28 h-28" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left Script Note ("Made with Love ♡") */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1 text-[#2E211E] -rotate-90 origin-center pointer-events-none">
          <span className="font-script-boutique text-2xl font-bold text-[#913638]">
            Made with Love
          </span>
          <span className="text-sm text-[#913638]">♡</span>
        </div>

        {/* Carousel Navigation Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] hover:bg-white flex items-center justify-center shadow-sm transition-all"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Carousel Navigation Arrow Right */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] hover:bg-white flex items-center justify-center shadow-sm transition-all"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* 2-Column Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Heading & Buttons (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-5 flex flex-col items-center lg:items-start">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#2E211E] leading-[1.08] tracking-tight">
              {slide.titleLine1} <br />
              {slide.titleLine2} <br />
              <span className="text-[#913638] italic font-serif font-normal">
                {slide.titleHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#786864] font-normal leading-relaxed max-w-md">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#913638] text-white text-xs sm:text-sm font-semibold hover:bg-[#74292B] shadow-sm hover:shadow-boutique-hover transition-all flex items-center justify-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/shop"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-transparent text-[#2E211E] border border-[#E7D1CC] text-xs sm:text-sm font-semibold hover:bg-[#FCE9E5] hover:border-[#913638] transition-all flex items-center justify-center"
              >
                Explore Collections
              </Link>
            </div>
          </div>

          {/* Right Column: Crochet Hero Composition (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Top Right Script Accent ("Yarn Crafts Happiness ♡") */}
            <div className="absolute -top-6 right-2 sm:right-6 text-center hidden sm:block z-10">
              <span className="font-script-boutique text-2xl sm:text-3xl font-bold text-[#913638]">
                {slide.scriptAccent}
              </span>
              <span className="text-xs text-[#913638] block">♡</span>
            </div>

            {/* Main Rounded Image Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/3.8] rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-white p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#FCE9E5]">
                <Image
                  src={slide.image}
                  alt="KNOTELLE Handmade Crochet Creation"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Hanging Tag on Right ("Good Things Are Handmade ♡") */}
              <div className="absolute -bottom-3 -right-2 sm:bottom-4 sm:-right-4 z-10">
                <HandmadePaperTag text={slide.tagText} />
              </div>
            </div>

          </div>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentSlide === i ? "bg-[#913638] w-6" : "bg-[#E7D1CC]"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
