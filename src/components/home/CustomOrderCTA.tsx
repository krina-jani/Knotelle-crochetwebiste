import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FlowerIcon, BotanicalFlourish } from "@/components/ui/BotanicalDecorations";

export function CustomOrderCTA() {
  return (
    <section className="py-16 lg:py-20 bg-[#FFF8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[3rem] bg-gradient-to-b from-[#FDE9E5] via-[#FFF8F5] to-[#FDE9E5] border border-[#E8D4CF] p-8 sm:p-14 lg:p-16 shadow-boutique overflow-hidden">
          
          {/* Subtle floral accents */}
          <div className="absolute top-6 left-8 text-[#8F3032]/20 hidden sm:block">
            <FlowerIcon className="w-12 h-12" />
          </div>
          <div className="absolute bottom-6 right-8 text-[#8F3032]/20 hidden sm:block">
            <FlowerIcon className="w-12 h-12" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8D4CF] text-xs font-semibold text-[#8F3032]">
              <Sparkles className="w-3.5 h-3.5 text-[#C69A5A]" />
              <span>Bespoke Handcrafting</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A211D] tracking-tight leading-[1.15]">
                Your Idea.
                <span className="block text-[#8F3032] italic">
                  Our Yarn.
                </span>
              </h2>
              <div className="flex justify-center">
                <BotanicalFlourish className="w-24 h-5 text-[#E9AAA3]" />
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#78635E] leading-relaxed">
              From custom color palettes and personalized initials to unique floral bouquets and character plushies — let&apos;s create something made especially for you.
            </p>

            <div className="pt-2">
              <Link
                href="/custom-order"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#8F3032] text-white text-sm font-semibold hover:bg-[#722628] shadow-md hover:shadow-boutique-hover transition-all group"
              >
                <span>Start a Custom Order</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
