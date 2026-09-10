import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Gift, Smile } from "lucide-react";
import { HandmadePaperTag } from "@/components/ui/BotanicalDecorations";

export function BrandStory() {
  const storyFeatures = [
    { title: "Handmade with Love", icon: Heart },
    { title: "Premium Yarn Quality", icon: Sparkles },
    { title: "Support Small Business", icon: Gift },
    { title: "Happiness Guaranteed", icon: Smile },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FCE9E5]/60 border-y border-[#E7D1CC]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Heading & Button (Spans 4 cols on lg) */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#2E211E] leading-[1.15]">
              Every Stitch <br />
              <span className="text-[#913638]">Has a Story</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#786864] leading-relaxed">
              More than just crochet, we create memories, happiness and a little bit of magic.
            </p>

            <div className="pt-1">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#913638] text-white text-xs font-semibold hover:bg-[#74292B] transition-colors"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Center Column: Photo with Tag (Spans 4 cols on lg) */}
          <div className="md:col-span-4 relative flex justify-center">
            <div className="relative w-full max-w-xs aspect-[4/4] rounded-2xl overflow-hidden border-2 border-white shadow-md bg-white">
              <Image
                src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop"
                alt="Handcrafted crochet flower"
                fill
                sizes="(max-width: 1024px) 80vw, 30vw"
                className="object-cover"
              />

              <div className="absolute bottom-3 right-3 z-10">
                <HandmadePaperTag text="Do Small Things With Great Love" />
              </div>
            </div>
          </div>

          {/* Right Column: 4 Feature Items (Spans 4 cols on lg) */}
          <div className="md:col-span-4 space-y-4 pl-0 md:pl-4">
            {storyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#E7D1CC] flex items-center justify-center text-[#913638] shrink-0 shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#2E211E]">
                    {feat.title}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
