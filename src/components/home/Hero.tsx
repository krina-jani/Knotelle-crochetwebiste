"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const HERO_SLIDES = [
  {
    id: 1,
    titleLine1: "Little",
    titleLine2: "Stitches",
    titleHighlight: "Big Happiness",
    subtitle: "Handmade crochet products that add warmth to your everyday life.",
    bgImage: "/images/hero/hero-enhanced.jpg",
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
    <section className="relative w-full overflow-hidden bg-[#FFF9F6] border-b border-[#E7D1CC]/60">
      
      {/* Edge-to-Edge Full-Width Panoramic Hero Container */}
      <div className="relative w-full min-h-[420px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px] xl:min-h-[680px] flex items-center">
        
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={slide.bgImage}
            alt="KNOTELLE Handmade Crochet Banner"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-right sm:object-center lg:object-right"
          />
          {/* Responsive Soft Gradient Overlays for Crystal-Clear Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5F2]/95 via-[#FFF5F2]/85 sm:via-[#FFF5F2]/70 md:via-[#FFF5F2]/50 to-transparent w-full md:w-[65%] lg:w-[55%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF5F2]/60 via-transparent to-transparent sm:hidden" />
        </div>

        {/* Carousel Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] flex items-center justify-center shadow-md transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Carousel Arrow Right */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] flex items-center justify-center shadow-md transition-all active:scale-95"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Top-Right Script Accent ("Yarn Crafts Happiness ♡") */}
        <div className="absolute top-4 right-10 sm:top-8 sm:right-16 lg:right-24 text-center hidden sm:block z-20 pointer-events-none select-none">
          <span className="font-script-boutique text-2xl sm:text-3xl lg:text-4xl font-bold text-[#913638] drop-shadow-xs">
            {slide.scriptAccent}
          </span>
          <span className="text-xs sm:text-sm text-[#913638] block mt-0.5">♡</span>
        </div>

        {/* Hanging Kraft Note on the Right ("Good Things Are Handmade ♡") */}
        <div className="absolute bottom-8 right-10 sm:bottom-12 sm:right-16 lg:right-24 hidden lg:flex flex-col items-center z-20 pointer-events-none">
          <div className="relative px-4 sm:px-5 py-6 sm:py-7 bg-[#E8D1B5]/95 backdrop-blur-xs rounded-sm shadow-lg border border-[#CBB396] text-center w-32 sm:w-36 transform rotate-1">
            <div className="w-3.5 h-3.5 bg-[#A88B69] rounded-full mx-auto -mt-5 mb-2.5 shadow-inner border border-[#8C6F4F]" />
            <p className="font-script-boutique text-lg sm:text-xl font-bold text-[#422C1A] leading-tight">
              Good Things<br />Are<br />Handmade
            </p>
            <span className="text-sm sm:text-base text-[#422C1A] block mt-1.5">♡</span>
          </div>
        </div>

        {/* Content Container (Constrained within Max-Width with edge padding for perfect typography) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
          <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6">
            
            {/* Main Headline */}
            <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#2E211E] leading-[1.05] tracking-tight">
              {slide.titleLine1} <br />
              {slide.titleLine2} <br />
              <span className="text-[#913638] italic font-serif font-normal">
                {slide.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg text-[#786864] font-normal leading-relaxed max-w-md lg:max-w-lg">
              {slide.subtitle}
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/shop"
                className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl bg-[#913638] text-white text-xs sm:text-sm md:text-base font-semibold hover:bg-[#74292B] shadow-md hover:shadow-boutique-hover transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/shop"
                className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl bg-[#FFF9F6]/90 backdrop-blur-xs text-[#913638] border border-[#913638]/50 hover:border-[#913638] hover:bg-[#FCE9E5] text-xs sm:text-sm md:text-base font-semibold shadow-xs transition-all flex items-center justify-center active:scale-95"
              >
                Explore Collections
              </Link>
            </div>

          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-[#913638] w-7" : "bg-[#E7D1CC]/90 w-2.5 hover:bg-[#EFB8B0]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


