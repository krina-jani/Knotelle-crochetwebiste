import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";

export function Testimonials() {
  const testimonials = [
    {
      id: "t-1",
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      review: "Absolutely in love with my crochet bouquet! The quality and detailing are amazing. Will definitely order again.",
      productName: "Rose Bouquet",
      productImage: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "t-2",
      name: "Ananya Verma",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      review: "The bunny keychain is so cute! Perfect for gifting. Beautiful craftsmanship and super soft.",
      productName: "Cute Bunny Keychain",
      productImage: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "t-3",
      name: "Riya Patel",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      review: "I ordered a custom bag and it turned out even more beautiful than I imagined. Highly recommend KNOTELLE!",
      productName: "Custom Handbag",
      productImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#FFF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E211E]">
            What Our Customers Say
          </h2>
          <p className="text-xs sm:text-sm text-[#786864] mt-1">
            Real people. Real stories. Real happiness.
          </p>
        </div>

        {/* Carousel Layout with Edge Arrows */}
        <div className="relative max-w-5xl mx-auto">
          {/* Arrow Left */}
          <button
            aria-label="Previous testimonial"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] flex items-center justify-center shadow-md transition-all hidden sm:flex"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-[#E7D1CC] p-6 shadow-boutique flex flex-col justify-between"
              >
                <div>
                  {/* Avatar, Name & Stars */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E7D1CC] shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-[#2E211E]">
                        {item.name}
                      </h3>
                      <StarRating rating={item.rating} size="sm" />
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-[#786864] leading-relaxed mb-4 italic">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Bottom Product Info */}
                <div className="pt-3 border-t border-[#E7D1CC]/60 flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-[#FCE9E5] border border-[#E7D1CC] shrink-0">
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-medium text-[#2E211E]">
                    {item.productName}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Right */}
          <button
            aria-label="Next testimonial"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#E7D1CC] text-[#2E211E] hover:text-[#913638] flex items-center justify-center shadow-md transition-all hidden sm:flex"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
