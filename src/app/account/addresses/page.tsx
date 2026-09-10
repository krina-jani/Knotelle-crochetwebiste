"use client";

import React, { useState } from "react";
import { Plus, MapPin, Check, Trash2, Edit3, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { ShippingAddress } from "@/types/order";

export default function AddressesPage() {
  const { user, addAddress, deleteAddress, setDefaultAddress } = useAuth();
  const [isAddingNew, setIsAddingNew] = useState(false);

  // New Address Form State
  const [fullName, setFullName] = useState(user?.name || "Ananya Sharma");
  const [email, setEmail] = useState(user?.email || "ananya.sharma@example.com");
  const [phone, setPhone] = useState(user?.phone || "+91 98765 43210");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const handleCreateAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressLine1 || !city || !state || !pincode) return;

    addAddress({
      fullName,
      email,
      phone,
      addressLine1,
      addressLine2,
      city,
      state,
      pincode,
      country: "India",
    });

    setIsAddingNew(false);
    setAddressLine1("");
    setAddressLine2("");
    setCity("");
    setState("");
    setPincode("");
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-8 shadow-boutique space-y-6 animate-in fade-in">
      <div className="flex items-center justify-between pb-4 border-b border-[#E8D4CF]">
        <div>
          <h1 className="font-serif-luxury text-2xl font-bold text-[#3A211D]">
            My Addresses
          </h1>
          <p className="text-xs text-[#78635E] mt-0.5">
            Manage your delivery destinations for fast boutique dispatch.
          </p>
        </div>
        <button
          onClick={() => setIsAddingNew(!isAddingNew)}
          className="px-5 py-2 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors flex items-center gap-1.5 shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add New Address</span>
        </button>
      </div>

      {/* Add New Address Modal / Drawer Card */}
      {isAddingNew && (
        <form
          onSubmit={handleCreateAddress}
          className="p-6 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] space-y-4 animate-in fade-in"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#E8D4CF]">
            <h3 className="font-serif-luxury text-base font-bold text-[#3A211D]">
              New Shipping Destination
            </h3>
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="text-[#78635E] hover:text-[#3A211D]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D]">Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D]">Phone *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D]">Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#3A211D]">Street Address *</label>
            <input
              type="text"
              required
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              placeholder="House/Flat number, building name, road"
              className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D]">City *</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D]">State *</label>
              <input
                type="text"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D]">Pincode *</label>
              <input
                type="text"
                required
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="px-5 py-2 rounded-full border border-[#E8D4CF] text-xs font-semibold text-[#78635E] hover:bg-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628]"
            >
              Save Address
            </button>
          </div>
        </form>
      )}

      {/* Address Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {user?.addresses.map((addr) => (
          <div
            key={addr.id}
            className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
              addr.isDefault
                ? "border-[#8F3032] bg-[#FFF8F5] shadow-xs"
                : "border-[#E8D4CF] bg-white"
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#3A211D]">
                  {addr.fullName}
                </span>
                {addr.isDefault && (
                  <span className="text-[10px] font-bold bg-[#8F3032] text-white px-2.5 py-0.5 rounded-full">
                    Default
                  </span>
                )}
              </div>
              <p className="text-xs text-[#78635E] leading-relaxed">
                {addr.addressLine1}
                {addr.addressLine2 && `, ${addr.addressLine2}`}
                <br />
                {addr.city}, {addr.state} - {addr.pincode}
              </p>
              <p className="text-[11px] text-[#78635E]">Phone: {addr.phone}</p>
            </div>

            {/* Actions */}
            <div className="pt-4 mt-3 border-t border-[#E8D4CF]/60 flex items-center justify-between text-xs">
              {!addr.isDefault ? (
                <button
                  onClick={() => setDefaultAddress(addr.id)}
                  className="text-xs font-semibold text-[#8F3032] hover:underline"
                >
                  Set as Default
                </button>
              ) : (
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Default Address</span>
                </span>
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={() => deleteAddress(addr.id)}
                  className="text-[#78635E] hover:text-[#8F3032] transition-colors"
                  aria-label="Delete address"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
