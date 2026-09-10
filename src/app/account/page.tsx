"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Package, Clock, CheckCircle2, Heart, ArrowRight, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useWishlist } from "@/context/WishlistContext";
import { FlowerIcon } from "@/components/ui/BotanicalDecorations";

export default function AccountDashboardPage() {
  const { user, orders } = useAuth();
  const { wishlistCount } = useWishlist();

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status !== "Delivered" && o.status !== "Cancelled").length;
  const deliveredOrders = orders.filter((o) => o.status === "Delivered").length;

  const stats = [
    { title: "Total Orders", value: totalOrders, icon: Package, href: "/account/orders" },
    { title: "In Crafting / Transit", value: pendingOrders, icon: Clock, href: "/account/orders" },
    { title: "Delivered With Love", value: deliveredOrders, icon: CheckCircle2, href: "/account/orders" },
    { title: "Saved in Wishlist", value: wishlistCount, icon: Heart, href: "/account/wishlist" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in">
      
      {/* Welcome Banner */}
      <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-8 shadow-boutique flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8F3032] mb-1">
            <FlowerIcon className="w-4 h-4 text-[#8F3032]" />
            <span>KNOTELLE Member Atelier</span>
          </div>
          <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#3A211D]">
            Welcome back, {user?.name || "Ananya"}!
          </h1>
          <p className="text-xs sm:text-sm text-[#78635E] mt-1">
            Manage your bespoke crochet orders, track artisan progress, and saved favorites.
          </p>
        </div>

        <Link
          href="/shop"
          className="px-6 py-2.5 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] shadow-sm transition-all shrink-0"
        >
          Explore Shop →
        </Link>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Link
              key={idx}
              href={stat.href}
              className="bg-white rounded-3xl border border-[#E8D4CF] p-5 shadow-boutique hover:shadow-boutique-hover transition-all group block"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#FDE9E5] border border-[#E8D4CF] flex items-center justify-center text-[#8F3032] mb-3 group-hover:bg-[#8F3032] group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <p className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#3A211D]">
                {stat.value}
              </p>
              <p className="text-xs text-[#78635E] mt-0.5 group-hover:text-[#8F3032] transition-colors">
                {stat.title}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-8 shadow-boutique space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E8D4CF]">
          <h2 className="font-serif-luxury text-xl font-bold text-[#3A211D]">
            Recent Orders
          </h2>
          <Link
            href="/account/orders"
            className="text-xs font-semibold text-[#8F3032] hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {orders.length > 0 ? (
          <div className="space-y-4">
            {orders.slice(0, 2).map((order) => (
              <div
                key={order.id}
                className="p-5 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#3A211D]">
                      {order.orderNumber}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FDE9E5] text-[#8F3032] font-semibold border border-[#E8D4CF]">
                      {order.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#78635E]">
                    Placed on {order.orderDate} &bull; {order.items.length} handmade item(s)
                  </p>
                  <p className="text-xs font-bold text-[#8F3032] pt-1">
                    Total: ₹{order.total.toLocaleString("en-IN")}
                  </p>
                </div>

                <Link
                  href={`/account/orders/${order.id}`}
                  className="px-5 py-2 rounded-full bg-white text-[#8F3032] border border-[#E8D4CF] text-xs font-semibold hover:bg-[#FDE9E5] transition-colors"
                >
                  Track Order Timeline →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-[#78635E] py-4">No recent orders found.</p>
        )}
      </div>

    </div>
  );
}
