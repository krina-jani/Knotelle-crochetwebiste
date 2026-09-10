"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Heart, ShoppingBag, User, Sparkles, ChevronRight, Phone, Mail } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { FlowerIcon } from "@/components/ui/BotanicalDecorations";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileDrawer({ isOpen, onClose, onOpenSearch }: MobileDrawerProps) {
  const pathname = usePathname();
  const { wishlistCount } = useWishlist();
  const { totalItemsCount } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const mainNav = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop" },
    { name: "Custom Order", href: "/custom-order", highlight: true },
    { name: "About Story", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-12">
        <div className="w-screen max-w-sm bg-[#FFF8F5] border-r border-[#E8D4CF] shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
          {/* Top Brand Header */}
          <div className="p-5 border-b border-[#E8D4CF] flex items-center justify-between bg-white">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2 group"
            >
              <FlowerIcon className="w-6 h-6 text-[#8F3032]" />
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl font-bold tracking-widest text-[#3A211D]">
                  KNOTELLE
                </span>
                <span className="text-[9px] tracking-widest text-[#78635E] uppercase -mt-1 font-sans">
                  Crochet Boutique
                </span>
              </div>
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#78635E] hover:text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Pills */}
          <div className="grid grid-cols-3 gap-2 p-4 bg-white border-b border-[#E8D4CF]">
            <Link
              href="/account/wishlist"
              onClick={onClose}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] hover:bg-[#FDE9E5] transition-colors relative"
            >
              <Heart className="w-4 h-4 text-[#8F3032] mb-1" />
              <span>Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-2 w-4 h-4 rounded-full bg-[#8F3032] text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              onClick={onClose}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
            >
              <User className="w-4 h-4 text-[#8F3032] mb-1" />
              <span>Account</span>
            </Link>

            <Link
              href="/cart"
              onClick={onClose}
              className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] hover:bg-[#FDE9E5] transition-colors relative"
            >
              <ShoppingBag className="w-4 h-4 text-[#8F3032] mb-1" />
              <span>Cart</span>
              {totalItemsCount > 0 && (
                <span className="absolute top-1.5 right-2 w-4 h-4 rounded-full bg-[#8F3032] text-white text-[9px] font-bold flex items-center justify-center">
                  {totalItemsCount}
                </span>
              )}
            </Link>
          </div>

          {/* Nav Links Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* Primary Nav */}
            <div className="space-y-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                      item.highlight
                        ? "bg-[#FDE9E5] text-[#8F3032] border border-[#E8D4CF] font-semibold"
                        : isActive
                        ? "bg-[#8F3032] text-white"
                        : "text-[#3A211D] hover:bg-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.highlight && <Sparkles className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-[#78635E]"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Explore Categories */}
            <div>
              <p className="text-xs uppercase font-bold text-[#78635E] tracking-wider mb-3 px-1">
                Shop By Category
              </p>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.slice(0, 8).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    onClick={onClose}
                    className="p-3 rounded-xl bg-white border border-[#E8D4CF]/70 text-xs font-medium text-[#3A211D] hover:border-[#8F3032] hover:text-[#8F3032] transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Custom Order Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FDE9E5] to-[#F4C7C1]/50 border border-[#E8D4CF] text-center">
              <Sparkles className="w-5 h-5 text-[#8F3032] mx-auto mb-1.5" />
              <h4 className="font-serif-luxury text-sm font-bold text-[#3A211D]">
                Have a Custom Idea?
              </h4>
              <p className="text-[11px] text-[#78635E] mt-0.5 mb-3">
                Your imagination, our yarn. We craft custom dreams.
              </p>
              <Link
                href="/custom-order"
                onClick={onClose}
                className="inline-block w-full py-2 px-4 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors"
              >
                Start Custom Order →
              </Link>
            </div>

            {/* Contact Support */}
            <div className="pt-2 border-t border-[#E8D4CF] space-y-2 text-xs text-[#78635E]">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-[#8F3032] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:hello@knotelle.com"
                className="flex items-center gap-2 hover:text-[#8F3032] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>hello@knotelle.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
