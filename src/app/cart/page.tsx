"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Heart,
  Truck,
  Tag,
  ShieldCheck,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BotanicalFlourish, FlowerIcon } from "@/components/ui/BotanicalDecorations";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    shipping,
    discount,
    total,
    promoCode,
    applyPromoCode,
    removePromoCode,
    amountToFreeShipping,
    freeShippingThreshold,
  } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();
  const [couponInput, setCouponInput] = useState("");
  const [giftNote, setGiftNote] = useState("");
  const [includeGiftWrap, setIncludeGiftWrap] = useState(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyPromoCode(couponInput);
      setCouponInput("");
    }
  };

  const freeShippingProgress = Math.min(
    100,
    Math.round(((freeShippingThreshold - amountToFreeShipping) / freeShippingThreshold) * 100)
  );

  return (
    <div className="bg-[#FFF8F5] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Shopping Cart" }]} className="mb-6" />

        {/* Page Title */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8D4CF]">
          <div>
            <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#3A211D]">
              Your Cart
            </h1>
            <p className="text-xs sm:text-sm text-[#78635E] mt-1">
              Review your handcrafted items before we prepare our yarn.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-xs font-semibold text-[#8F3032] hover:underline flex items-center gap-1"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {items.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-3xl border border-[#E8D4CF] p-12 sm:p-20 text-center max-w-xl mx-auto shadow-boutique">
            <div className="w-20 h-20 rounded-full bg-[#FFF8F5] border border-[#E8D4CF] flex items-center justify-center text-[#8F3032] mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 stroke-1" />
            </div>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#3A211D] mb-2">
              Your cart is waiting for a little handmade happiness.
            </h2>

            <p className="text-sm text-[#78635E] mb-8 leading-relaxed">
              Explore our bestselling crochet bouquets, lovable amigurumi toys, and custom creations made with love.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] shadow-md hover:shadow-boutique-hover transition-all"
            >
              <span>Explore Boutique Collections</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* Cart Content Layout: Items on Left, Order Summary on Right */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Items Column (Spans 8 cols on lg) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Free Shipping Progress Ribbon */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8D4CF] shadow-xs">
                <div className="flex items-center justify-between text-xs font-medium text-[#3A211D] mb-2">
                  <span className="flex items-center gap-1.5 text-[#8F3032]">
                    <Truck className="w-4 h-4" />
                    {amountToFreeShipping > 0 ? (
                      <span>
                        Add <strong>₹{amountToFreeShipping}</strong> more for <strong>FREE Pan-India Delivery</strong>
                      </span>
                    ) : (
                      <span className="text-emerald-800 font-semibold">
                        🎉 Congratulations! You have unlocked FREE Pan-India Shipping!
                      </span>
                    )}
                  </span>
                  <span className="text-xs text-[#78635E]">{freeShippingProgress}%</span>
                </div>
                <div className="w-full h-2 bg-[#FDE9E5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#8F3032] transition-all duration-500 rounded-full"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 shadow-boutique divide-y divide-[#E8D4CF]/70">
                {items.map((item) => (
                  <div key={item.id} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                    
                    {/* Item Image + Details */}
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#FFF8F5] shrink-0 border border-[#E8D4CF]"
                      >
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </Link>

                      <div className="space-y-1 min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-[#78635E] font-medium">
                          {item.product.category}
                        </span>
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-serif-luxury text-base sm:text-lg font-bold text-[#3A211D] hover:text-[#8F3032] transition-colors line-clamp-1 block"
                        >
                          {item.product.name}
                        </Link>

                        {/* Customization Details */}
                        {item.customization && (
                          <div className="text-xs text-[#78635E] space-y-0.5 pt-0.5">
                            {item.customization.color && (
                              <div className="flex items-center gap-1.5">
                                <span
                                  className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                                  style={{ backgroundColor: item.customization.color.hex }}
                                />
                                <span>Color: {item.customization.color.name}</span>
                              </div>
                            )}
                            {item.customization.size && (
                              <p>Size: {item.customization.size}</p>
                            )}
                            {item.customization.customText && (
                              <p className="text-[#8F3032] font-medium">
                                Tag Note: &ldquo;{item.customization.customText}&rdquo;
                              </p>
                            )}
                          </div>
                        )}

                        <div className="pt-2 flex items-center gap-4 text-xs">
                          <button
                            onClick={() => toggleWishlist(item.product)}
                            className="text-[#78635E] hover:text-[#8F3032] flex items-center gap-1 transition-colors"
                          >
                            <Heart className={`w-3.5 h-3.5 ${isInWishlist(item.product.id) ? "fill-[#8F3032] text-[#8F3032]" : ""}`} />
                            <span>Save to Wishlist</span>
                          </button>
                          <span className="text-[#E8D4CF]">|</span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#78635E] hover:text-[#8F3032] flex items-center gap-1 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Quantity Selector & Price */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E8D4CF]/60">
                      <div className="flex items-center border border-[#E8D4CF] rounded-full bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-[#78635E] hover:text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-bold text-[#3A211D] min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-[#78635E] hover:text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-bold text-base sm:text-lg text-[#8F3032]">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                        <p className="text-[10px] text-[#78635E]">
                          (₹{item.price.toLocaleString("en-IN")} each)
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Gift Wrap & Note Accordion */}
              <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 shadow-boutique space-y-4">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2.5 text-xs font-bold text-[#3A211D] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeGiftWrap}
                      onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                      className="rounded border-[#E8D4CF] text-[#8F3032] focus:ring-[#8F3032]"
                    />
                    <Sparkles className="w-4 h-4 text-[#C69A5A]" />
                    <span>Include Luxury Handmade Gift Wrap (+₹99)</span>
                  </label>
                </div>

                {includeGiftWrap && (
                  <div className="space-y-2 pt-2 animate-in fade-in">
                    <label className="text-xs font-medium text-[#78635E] block">
                      Handwritten Letter / Card Message:
                    </label>
                    <textarea
                      rows={2}
                      value={giftNote}
                      onChange={(e) => setGiftNote(e.target.value)}
                      placeholder="Write your personal message. We will handwrite this with gold ink on pressed handmade paper."
                      className="w-full px-3.5 py-2 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] placeholder-[#78635E]/50 focus:outline-none focus:border-[#8F3032]"
                    />
                  </div>
                )}
              </div>

            </div>

            {/* Right Order Summary Column (Spans 4 cols on lg) */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              
              <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-8 shadow-boutique space-y-6">
                <h3 className="font-serif-luxury text-xl font-bold text-[#3A211D] pb-3 border-b border-[#E8D4CF]">
                  Order Summary
                </h3>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <label className="text-xs font-semibold text-[#3A211D] flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#8F3032]" />
                    <span>Promo or Gift Voucher:</span>
                  </label>
                  {promoCode ? (
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FDE9E5] border border-[#E8D4CF] text-xs">
                      <span className="font-bold text-[#8F3032]">{promoCode} Applied!</span>
                      <button
                        type="button"
                        onClick={removePromoCode}
                        className="text-xs font-semibold text-[#78635E] hover:text-[#8F3032]"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        placeholder="Try KNOTELLE10"
                        className="flex-1 px-3.5 py-2 rounded-full bg-[#FFF8F5] border border-[#E8D4CF] text-xs uppercase text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-full bg-[#3A211D] text-white text-xs font-semibold hover:bg-[#8F3032] transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </form>

                {/* Price Breakdown */}
                <div className="space-y-3 text-xs text-[#78635E] pt-2 border-t border-[#E8D4CF]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#3A211D]">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-[#8F3032]">
                      <span>Discount ({promoCode})</span>
                      <span className="font-bold">
                        -₹{discount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}

                  {includeGiftWrap && (
                    <div className="flex justify-between">
                      <span>Luxury Gift Wrap</span>
                      <span className="font-semibold text-[#3A211D]">₹99</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <strong className="text-emerald-700 font-bold">FREE</strong>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-base font-bold text-[#3A211D] pt-3 border-t border-[#E8D4CF]">
                    <span>Total Amount</span>
                    <span className="text-[#8F3032] text-xl">
                      ₹{(total + (includeGiftWrap ? 99 : 0)).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="w-full py-4 px-6 rounded-full bg-[#8F3032] text-white text-xs sm:text-sm font-semibold hover:bg-[#722628] shadow-md hover:shadow-boutique-hover transition-all flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#78635E]">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Guaranteed safe & secure checkout</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
