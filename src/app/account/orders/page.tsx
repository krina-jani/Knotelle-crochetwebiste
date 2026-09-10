"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Package, ArrowRight, Clock, Sparkles } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { FlowerIcon } from "@/components/ui/BotanicalDecorations";

export default function MyOrdersPage() {
  const { orders } = useAuth();

  return (
    <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-8 shadow-boutique space-y-6 animate-in fade-in">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8D4CF]">
        <div>
          <h1 className="font-serif-luxury text-2xl font-bold text-[#3A211D]">
            My Orders
          </h1>
          <p className="text-xs text-[#78635E] mt-0.5">
            Track handmade creation progress and view past receipts.
          </p>
        </div>
        <span className="text-xs font-semibold bg-[#FDE9E5] text-[#8F3032] px-3 py-1 rounded-full">
          {orders.length} Orders
        </span>
      </div>

      {orders.length === 0 ? (
        <div className="py-12 text-center">
          <Package className="w-12 h-12 text-[#E8D4CF] mx-auto mb-3" />
          <p className="text-sm font-semibold text-[#3A211D]">No orders placed yet</p>
          <p className="text-xs text-[#78635E] mt-1 mb-4">
            Explore our curated crochet collection to bring home your first piece of happiness.
          </p>
          <Link
            href="/shop"
            className="px-6 py-2 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors"
          >
            Start Shopping →
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#E8D4CF] text-[#78635E] uppercase tracking-wider font-semibold">
                  <th className="pb-3">Order</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Items</th>
                  <th className="pb-3">Total</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8D4CF]/60">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#FFF8F5]/60 transition-colors">
                    <td className="py-4 font-mono font-bold text-[#8F3032]">
                      {order.orderNumber}
                    </td>
                    <td className="py-4 text-[#78635E]">{order.orderDate}</td>
                    <td className="py-4 text-[#3A211D]">
                      <span className="font-semibold">{order.items[0]?.product.name || "Handmade Product"}</span>
                      {order.items.length > 1 && (
                        <span className="text-[#78635E] block text-[11px]">
                          +{order.items.length - 1} other item(s)
                        </span>
                      )}
                    </td>
                    <td className="py-4 font-bold text-[#3A211D]">
                      ₹{order.total.toLocaleString("en-IN")}
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                          order.status === "Delivered"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-[#FDE9E5] text-[#8F3032] border-[#E8D4CF]"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{order.status}</span>
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <Link
                        href={`/account/orders/${order.id}`}
                        className="px-4 py-1.5 rounded-full bg-[#FFF8F5] text-[#8F3032] border border-[#E8D4CF] text-xs font-semibold hover:bg-[#8F3032] hover:text-white transition-all inline-flex items-center gap-1"
                      >
                        <span>View Order</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Card View */}
          <div className="md:hidden space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#8F3032]">
                    {order.orderNumber}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FDE9E5] text-[#8F3032] border border-[#E8D4CF]">
                    {order.status}
                  </span>
                </div>

                <div className="text-xs text-[#78635E] space-y-0.5">
                  <p className="font-semibold text-[#3A211D]">
                    {order.items[0]?.product.name || "Crochet Item"}
                    {order.items.length > 1 && ` (+${order.items.length - 1} more)`}
                  </p>
                  <p>Ordered on {order.orderDate} &bull; ₹{order.total.toLocaleString("en-IN")}</p>
                </div>

                <div className="pt-2 border-t border-[#E8D4CF]/60">
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="w-full py-2 px-4 rounded-full bg-white text-[#8F3032] border border-[#E8D4CF] text-xs font-semibold hover:bg-[#FDE9E5] transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Order Details & Tracking →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
