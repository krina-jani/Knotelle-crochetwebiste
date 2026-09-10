"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { User, Mail, Phone, Lock, CheckCircle2 } from "lucide-react";

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();

  const nameParts = (user?.name || "Ananya Sharma").split(" ");
  const [firstName, setFirstName] = useState(nameParts[0] || "Ananya");
  const [lastName, setLastName] = useState(nameParts.slice(1).join(" ") || "Sharma");
  const [email, setEmail] = useState(user?.email || "ananya.sharma@example.com");
  const [phone, setPhone] = useState(user?.phone || "+91 98765 43210");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-8 shadow-boutique space-y-6 animate-in fade-in">
      <div className="pb-4 border-b border-[#E8D4CF]">
        <h1 className="font-serif-luxury text-2xl font-bold text-[#3A211D]">
          Profile Settings
        </h1>
        <p className="text-xs text-[#78635E] mt-0.5">
          Update your contact information and boutique preferences.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#3A211D] block">
              First Name *
            </label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#3A211D] block">
              Last Name *
            </label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#3A211D] block">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#3A211D] block">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
            />
          </div>
        </div>

        {/* Change Password Section */}
        <div className="pt-4 border-t border-[#E8D4CF] space-y-4">
          <h3 className="font-serif-luxury text-base font-bold text-[#3A211D]">
            Security & Password
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#3A211D] block">
                Current Password
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#3A211D] block">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>Save Changes</span>
          </button>
        </div>

      </form>
    </div>
  );
}
