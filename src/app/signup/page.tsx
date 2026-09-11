"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FlowerIcon, KnotelleCrownLogo } from "@/components/ui/BotanicalDecorations";
import { useAuth } from "@/context/AuthContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || "ananya.sharma@example.com");
    router.push("/account");
  };

  return (
    <div className="bg-[#FFF8F5] min-h-screen py-12 sm:py-16 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl border border-[#E8D4CF] p-8 sm:p-10 shadow-boutique space-y-6">
        
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-2">
            <KnotelleCrownLogo className="h-16 w-16 sm:h-20 sm:w-20" />
          </div>
          <h1 className="font-serif-luxury text-3xl font-bold text-[#3A211D]">
            Create Your Account
          </h1>
          <p className="text-xs text-[#78635E]">
            Join the KNOTELLE community & receive 10% off your first handmade order.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D] block">
                First Name *
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ananya"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D] block">
                Last Name *
              </label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Sharma"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D] block">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D] block">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D] block">
                Password *
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#3A211D] block">
                Confirm Password *
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] shadow-md hover:shadow-boutique-hover transition-all flex items-center justify-center gap-2"
            >
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-[#78635E]">
          Already have an account?{" "}
          <Link href="/login" className="text-[#8F3032] font-semibold hover:underline">
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
}
