"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Heart,
  User,
  MapPin,
  LogOut,
  Sparkles,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { wishlistCount } = useWishlist();

  const navItems = [
    { name: "Overview", href: "/account", icon: LayoutDashboard },
    { name: "My Orders", href: "/account/orders", icon: Package },
    { name: "Wishlist", href: "/account/wishlist", icon: Heart, badge: wishlistCount },
    { name: "Profile Settings", href: "/account/profile", icon: User },
    { name: "My Addresses", href: "/account/addresses", icon: MapPin },
  ];

  return (
    <div className="bg-[#FFF8F5] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "My Account", href: "/account" },
            { label: navItems.find((n) => n.href === pathname)?.name || "Dashboard" },
          ]}
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Account Sidebar (Spans 4 cols on lg) */}
          <aside className="lg:col-span-4 bg-white rounded-3xl border border-[#E8D4CF] p-6 shadow-boutique space-y-6">
            
            {/* User Greeting Card */}
            <div className="flex items-center gap-4 pb-6 border-b border-[#E8D4CF]">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#8F3032] shrink-0 bg-[#FFF8F5]">
                <Image
                  src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"}
                  alt={user?.name || "User"}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#8F3032] tracking-wider bg-[#FDE9E5] px-2 py-0.5 rounded-full">
                    KNOTELLE Member
                  </span>
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#3A211D] truncate mt-1">
                  {user?.name || "Ananya Sharma"}
                </h3>
                <p className="text-xs text-[#78635E] truncate">{user?.email || "ananya@example.com"}</p>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-[#8F3032] text-white shadow-xs"
                        : "text-[#3A211D] hover:bg-[#FDE9E5] hover:text-[#8F3032]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white text-[#8F3032]"
                            : "bg-[#FDE9E5] text-[#8F3032]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              {/* Logout Button */}
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-[#78635E] hover:bg-rose-50 hover:text-rose-700 transition-colors text-left pt-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </nav>

            {/* Custom Order Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FDE9E5] to-[#FFF8F5] border border-[#E8D4CF] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8F3032]">
                <Sparkles className="w-3.5 h-3.5 text-[#C69A5A]" />
                <span>Need a Custom Creation?</span>
              </div>
              <p className="text-[11px] text-[#78635E] leading-relaxed">
                Have a unique design in mind? Work directly with our master artisans.
              </p>
              <Link
                href="/custom-order"
                className="inline-block text-xs font-semibold text-[#8F3032] hover:underline pt-1"
              >
                Request Custom Order →
              </Link>
            </div>

          </aside>

          {/* Right Main Content (Spans 8 cols on lg) */}
          <main className="lg:col-span-8">{children}</main>

        </div>

      </div>
    </div>
  );
}
