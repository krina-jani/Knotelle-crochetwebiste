"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BotanicalCornerFlourish } from "@/components/ui/BotanicalDecorations";

const HERO_SLIDES = [
  {
    id: 1,
    titleLine1: "Little",
    titleLine2: "Stitches",
    titleHighlight: "Big Happiness",
    subtitle: "Handmade crochet products that add warmth to your everyday life.",
    bgImage: "/images/hero/hero-enhanced.jpg",
    mobileImage: "/images/hero/hero-banner.png",
    cardNote: "Good Things Are Handmade",
    scriptAccent: "Yarn Crafts Happiness",
  },
  {
    id: 2,
    titleLine1: "Custom",
    titleLine2: "Crochet",
    titleHighlight: "Made With Love",
    subtitle: "Turn your ideas into handmade reality with customized crochet creations.",
    bgImage: "/images/hero/hero-enhanced.jpg",
    mobileImage: "/images/hero/hero-banner.png",
    cardNote: "Every Stitch Has A Story",
    scriptAccent: "Custom Crochet Just For You",
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
    <section className="relative overflow-hidden bg-[#FFF9F6] border-b border-[#E7D1CC]/60 py-6 sm:py-10 lg:py-12">
      {/* Decorative Botanical Flourish on Left & Right */}
      <div className="absolute top-2 left-2 text-[#EFB8B0]/30 pointer-events-none hidden sm:block">
        <BotanicalCornerFlourish className="w-24 h-24" />
      </div>
      <div className="absolute bottom-2 right-2 text-[#EFB8B0]/30 pointer-events-none transform rotate-180 hidden sm:block">
        <BotanicalCornerFlourish className="w-24 h-24" />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left Vertical Script Note ("Made with Love ♡") */}
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1 text-[#913638] -rotate-90 origin-center pointer-events-none select-none">
          <span className="font-script-boutique text-2xl font-bold tracking-wider">
            Made with Love
          </span>
          <span className="text-sm">♡</span>
        </div>

        {/* Carousel Navigation Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] hover:bg-white flex items-center justify-center shadow-md transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Carousel Navigation Arrow Right */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] hover:bg-white flex items-center justify-center shadow-md transition-all active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Main Hero Container — Panoramic Boutique Card */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFF5F2] via-[#FCE9E5] to-[#FCE6E1] border border-[#E7D1CC]/80 shadow-lg min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center">
          
          {/* High-Resolution Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.bgImage}
              alt="KNOTELLE Handmade Crochet Bunny & Florals"
              fill
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center lg:object-right"
            />
            {/* Subtle Gradient Overlay for Content Readability on the Left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5F2]/95 via-[#FFF5F2]/80 sm:via-[#FFF5F2]/60 to-transparent lg:w-[60%]" />
          </div>

          {/* Top Right Script Accent ("Yarn Crafts Happiness ♡") */}
          <div className="absolute top-4 right-6 sm:top-6 sm:right-10 text-center hidden sm:block z-20 pointer-events-none select-none">
            <span className="font-script-boutique text-2xl sm:text-3xl font-bold text-[#913638] drop-shadow-xs">
              {slide.scriptAccent}
            </span>
            <span className="text-xs text-[#913638] block mt-0.5">♡</span>
          </div>

          {/* Kraft Note on the Right ("Good Things Are Handmade ♡") */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 hidden lg:flex flex-col items-center z-20 pointer-events-none">
            <div className="relative px-4 py-6 bg-[#E8D1B5]/90 backdrop-blur-xs rounded-sm shadow-md border border-[#CBB396] text-center w-28 sm:w-32 transform rotate-1">
              <div className="w-3 h-3 bg-[#A88B69] rounded-full mx-auto -mt-4 mb-2 shadow-inner border border-[#8C6F4F]" />
              <p className="font-script-boutique text-base sm:text-lg font-bold text-[#422C1A] leading-tight">
                Good Things<br />Are<br />Handmade
              </p>
              <span className="text-sm text-[#422C1A] block mt-1">♡</span>
            </div>
          </div>

          {/* Content Layer (Left Side) */}
          <div className="relative z-10 w-full max-w-xl px-6 sm:px-12 lg:px-16 py-8 sm:py-12 flex flex-col items-start space-y-4 sm:space-y-6">
            
            {/* Main Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#2E211E] leading-[1.08] tracking-tight">
              {slide.titleLine1} <br />
              {slide.titleLine2} <br />
              <span className="text-[#913638] italic font-serif font-normal">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-[#786864] font-normal leading-relaxed max-w-md">
              {slide.subtitle}
            </p>

            {/* Buttons Matching Reference Screenshot */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <Link
                href="/shop"
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#913638] text-white text-xs sm:text-sm font-semibold hover:bg-[#74292B] shadow-sm hover:shadow-boutique-hover transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/shop"
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-[#FFF9F6]/80 backdrop-blur-xs text-[#913638] border border-[#913638]/40 hover:border-[#913638] hover:bg-[#FCE9E5] text-xs sm:text-sm font-semibold transition-all flex items-center justify-center active:scale-95"
              >
                Explore Collections
              </Link>
            </div>

          </div>

        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-[#913638] w-6" : "bg-[#E7D1CC] w-2 hover:bg-[#EFB8B0]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

