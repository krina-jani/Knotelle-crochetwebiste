"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Heart, Sparkles, ArrowRight, Package, Printer } from "lucide-react";
import { BotanicalFlourish, FlowerIcon } from "@/components/ui/BotanicalDecorations";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber") || "KNT-8092-IN";
  const orderId = searchParams.get("orderId") || "ord-8092";

  return (
    <div className="bg-[#FFF8F5] min-h-screen py-12 lg:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Animated Check Icon Box */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div className="w-24 h-24 rounded-full bg-[#FDE9E5] border-2 border-[#E8D4CF] flex items-center justify-center text-[#8F3032] shadow-lg animate-in zoom-in-50 duration-500">
            <CheckCircle2 className="w-12 h-12 text-[#8F3032]" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border border-[#E8D4CF] flex items-center justify-center text-[#C69A5A] shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Heading & Brand Message */}
        <div className="space-y-3 mb-8">
          <div className="flex justify-center mb-1">
            <BotanicalFlourish className="w-24 h-5 text-[#E9AAA3]" />
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3A211D] tracking-tight">
            Thank You for Your Order!
          </h1>

          <p className="text-sm sm:text-base text-[#78635E] max-w-md mx-auto leading-relaxed">
            Your handmade creation is now on its way to becoming something special. Our artisan is preparing soft cotton yarns with love.
          </p>
        </div>

        {/* Order Details Receipt Box */}
        <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-8 shadow-boutique text-left space-y-4 mb-8">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8D4CF]">
            <div>
              <p className="text-[10px] uppercase font-bold text-[#78635E] tracking-wider">
                Order Reference
              </p>
              <p className="font-mono text-sm sm:text-base font-bold text-[#8F3032]">
                {orderNumber}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
              Payment Confirmed
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs text-[#78635E]">
            <div>
              <p className="text-[10px] uppercase font-semibold text-[#78635E]/80">Order Date</p>
              <p className="font-medium text-[#3A211D] mt-0.5">
                {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-semibold text-[#78635E]/80">Estimated Delivery</p>
              <p className="font-medium text-[#3A211D] mt-0.5">
                {new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
              </p>
            </div>
          </div>

          {/* Handmade Progress Callout */}
          <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] flex items-center gap-3 text-xs text-[#3A211D]">
            <FlowerIcon className="w-5 h-5 text-[#8F3032] shrink-0" />
            <span>
              <strong>Crafting Notification:</strong> We will send you progress photos as your flowers or plushies take shape on our wooden hooks.
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href={`/account/orders/${orderId}`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8F3032] text-white text-xs sm:text-sm font-semibold hover:bg-[#722628] shadow-md hover:shadow-boutique-hover transition-all flex items-center justify-center gap-2"
          >
            <Package className="w-4 h-4" />
            <span>Track Order Timeline</span>
          </Link>
          <Link
            href="/shop"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#8F3032] border border-[#E8D4CF] text-xs sm:text-sm font-semibold hover:bg-[#FDE9E5] transition-all flex items-center justify-center gap-2"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-1 text-[11px] text-[#78635E] mt-8">
          <Heart className="w-3.5 h-3.5 fill-[#8F3032] text-[#8F3032]" />
          <span>Made with love by KNOTELLE Atelier</span>
        </div>

      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFF8F5] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#8F3032] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
