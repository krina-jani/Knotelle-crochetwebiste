"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, User, ShoppingBag, Menu } from "lucide-react";
import { KnotelleCrownLogo } from "@/components/ui/BotanicalDecorations";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { SearchModal } from "./SearchModal";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const pathname = usePathname();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Custom Order", href: "/custom-order" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 relative w-full overflow-hidden border-b border-[#E7D1CC]/80 shadow-xs transition-all">
        {/* Panoramic Background Image Layer */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none">
          <Image
            src="/images/navbar/navbar-bg.png"
            alt="KNOTELLE Boutique Navbar Banner"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle light overlay to preserve seamless contrast and text readability across screens */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Mobile: Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full text-[#2E211E] hover:bg-[#FCE9E5] transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Left: KNOTELLE Logo with Crown */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group py-1" aria-label="KNOTELLE Home">
                <KnotelleCrownLogo className="h-11 w-11 sm:h-13 sm:w-13" />
              </Link>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium tracking-wide py-2 transition-colors flex flex-col items-center ${
                      isActive
                        ? "text-[#913638] font-bold"
                        : "text-[#2E211E] hover:text-[#913638]"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-[#913638] mb-0.5" />
                    )}
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 w-6 h-0.5 bg-[#913638] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full text-[#2E211E] hover:text-[#913638] hover:bg-[#FCE9E5] transition-colors"
                aria-label="Search store"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/account/wishlist"
                className="relative p-2.5 rounded-full text-[#2E211E] hover:text-[#913638] hover:bg-[#FCE9E5] transition-colors hidden sm:flex items-center justify-center"
                aria-label="View wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#913638] text-white text-[9px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                href="/account"
                className="p-2.5 rounded-full text-[#2E211E] hover:text-[#913638] hover:bg-[#FCE9E5] transition-colors hidden sm:flex items-center justify-center"
                aria-label="My Account"
              >
                <User className="w-5 h-5" />
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full text-[#2E211E] hover:text-[#913638] hover:bg-[#FCE9E5] transition-colors flex items-center justify-center"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#913638] text-white text-[9px] font-bold flex items-center justify-center">
                  {totalItemsCount}
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Search Modal & Mobile Drawer */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => {
          setIsMobileMenuOpen(false);
          setIsSearchOpen(true);
        }}
      />
    </>
  );
}
