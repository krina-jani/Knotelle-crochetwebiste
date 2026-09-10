"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    subtotal,
    total,
    totalItemsCount,
    amountToFreeShipping,
    freeShippingThreshold,
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingProgress = Math.min(
    100,
    Math.round(((freeShippingThreshold - amountToFreeShipping) / freeShippingThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E8D4CF] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-[#E8D4CF] flex items-center justify-between bg-[#FFF8F5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#8F3032]" />
              <h2 className="font-serif-luxury text-lg font-bold text-[#3A211D]">
                Your Shopping Basket
              </h2>
              <span className="text-xs bg-[#FDE9E5] text-[#8F3032] font-semibold px-2 py-0.5 rounded-full">
                {totalItemsCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-[#78635E] hover:text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-5 py-3 bg-[#FDE9E5]/60 border-b border-[#E8D4CF]">
            <div className="flex items-center justify-between text-xs font-medium text-[#3A211D] mb-1.5">
              <span className="flex items-center gap-1 text-[#8F3032]">
                <Truck className="w-3.5 h-3.5" />
                {amountToFreeShipping > 0 ? (
                  <span>
                    Add <strong className="font-bold">₹{amountToFreeShipping}</strong> more for{" "}
                    <strong>FREE Delivery</strong>
                  </span>
                ) : (
                  <span className="font-semibold text-emerald-800">
                    🎉 You&apos;ve unlocked FREE Pan-India Shipping!
                  </span>
                )}
              </span>
              <span className="text-[11px] text-[#78635E]">
                {freeShippingProgress}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#E8D4CF] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8F3032] transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#FFF8F5] border border-[#E8D4CF] flex items-center justify-center text-[#8F3032] mb-4">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-serif-luxury text-lg font-semibold text-[#3A211D] mb-1">
                  Your basket is empty
                </h3>
                <p className="text-xs text-[#78635E] max-w-xs mb-6 leading-relaxed">
                  Your cart is waiting for a little handmade happiness. Explore our bestselling crochet items.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors"
                >
                  Start Shopping →
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF]/80 transition-all hover:border-[#8F3032]/30"
                >
                  {/* Image */}
                  <Link
                    href={`/product/${item.product.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="relative w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0 border border-[#E8D4CF]"
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif-luxury text-sm font-semibold text-[#3A211D] hover:text-[#8F3032] transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#78635E] hover:text-[#8F3032] p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Customization Details */}
                      {item.customization && (
                        <div className="mt-1 text-[11px] text-[#78635E] space-y-0.5">
                          {item.customization.color && (
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block shrink-0"
                                style={{ backgroundColor: item.customization.color.hex }}
                              />
                              <span className="truncate">{item.customization.color.name}</span>
                            </div>
                          )}
                          {item.customization.size && (
                            <p>Size: {item.customization.size}</p>
                          )}
                          {item.customization.customText && (
                            <p className="text-[#8F3032] font-medium truncate">
                              &ldquo;{item.customization.customText}&rdquo;
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Price & Quantity Controls */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E8D4CF]/60">
                      <div className="flex items-center border border-[#E8D4CF] rounded-full bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-[#78635E] hover:text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#3A211D] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-[#78635E] hover:text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#8F3032]">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout CTA */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#E8D4CF] bg-[#FFF8F5] space-y-3">
              <div className="space-y-1.5 text-xs text-[#78635E]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#3A211D]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {amountToFreeShipping === 0 ? (
                      <span className="text-emerald-700 font-semibold">FREE</span>
                    ) : (
                      "Calculated at next step"
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#3A211D] pt-1.5 border-t border-[#E8D4CF]">
                  <span>Estimated Total</span>
                  <span className="text-[#8F3032]">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="py-3 px-4 rounded-full border border-[#8F3032] text-[#8F3032] text-xs font-semibold hover:bg-[#FDE9E5] transition-colors text-center"
                >
                  View Full Cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="py-3 px-4 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-1 text-[11px] text-[#78635E] text-center pt-1">
                <Sparkles className="w-3 h-3 text-[#C69A5A]" />
                <span>Every item is carefully handcrafted with love</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
