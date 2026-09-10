"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { YarnHeartArt } from "@/components/ui/BotanicalDecorations";
import { useToast } from "@/context/ToastContext";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      showToast("Subscribed! 💌", "Thank you for joining our creative family. Use code KNOTELLE10 for 10% off!", "success");
      setEmail("");
    }
  };

  return (
    <section className="py-8 sm:py-10 bg-[#FFF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FCE9E5] border border-[#E7D1CC] p-6 sm:p-8 lg:p-10 shadow-boutique">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Heading & Description (Spans 5 cols on lg) */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-1">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2E211E]">
                Join Our Creative Journey
              </h2>
              <p className="text-xs sm:text-sm text-[#786864]">
                Get updates on new products, offers and handmade stories.
              </p>
            </div>

            {/* Center: Input Form (Spans 4 cols on lg) */}
            <div className="lg:col-span-4">
              {isSubscribed ? (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#913638] text-xs font-semibold border border-[#E7D1CC]">
                  <CheckCircle2 className="w-4 h-4 text-[#913638]" />
                  <span>Welcome to the KNOTELLE family!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#E7D1CC] text-xs text-[#2E211E] placeholder-[#786864]/60 focus:outline-none focus:border-[#913638]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#913638] text-white text-xs font-semibold hover:bg-[#74292B] transition-colors shrink-0 flex items-center gap-1"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Yarn Heart Art ("A Kinder, Cozier World. ♡") (Spans 3 cols on lg) */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-end gap-3 text-center lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E7D1CC]/70">
              <YarnHeartArt className="w-12 h-12 text-[#EFB8B0]" />
              <div className="text-left">
                <p className="font-script-boutique text-base sm:text-lg font-bold text-[#913638] leading-tight">
                  A Kinder, <br />
                  Cozier World.
                </p>
                <span className="text-xs text-[#913638] block">♡</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
