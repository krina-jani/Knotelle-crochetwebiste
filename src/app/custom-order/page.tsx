"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  UploadCloud,
  CheckCircle2,
  Check,
  Clock,
  ArrowRight,
  ArrowLeft,
  Heart,
  Palette,
  Send,
  HelpCircle,
  Pipette,
  Plus,
  X,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { FlowerIcon } from "@/components/ui/BotanicalDecorations";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { useToast } from "@/context/ToastContext";

const PALETTE_OPTIONS = [
  { name: "Blush Garden", colors: ["#F4C7C1", "#8F3032", "#FFF8F5", "#9CAF88"] },
  { name: "Warm Sunset", colors: ["#E8A317", "#E07A5F", "#8D6E63", "#FFF8DC"] },
  { name: "Lavender Mist", colors: ["#D8C7E8", "#C8A2C8", "#FFFDF9", "#7D9D8B"] },
  { name: "Vintage Earth", colors: ["#C68B59", "#3A211D", "#E8D4CF", "#6A7B66"] },
  { name: "Pastel Meadow", colors: ["#FDFD96", "#A8BBA2", "#F8C8C8", "#87CEEB"] },
];

const QUICK_YARN_SWATCHES = [
  { name: "Cream White", hex: "#FFFDF9" },
  { name: "Powder Pink", hex: "#F8C8C8" },
  { name: "Blush Rose", hex: "#F4C7C1" },
  { name: "Victorian Berry", hex: "#8F3032" },
  { name: "Sage Olive", hex: "#9CAF88" },
  { name: "Lavender Mist", hex: "#D8C7E8" },
  { name: "Sunset Gold", hex: "#E8A317" },
  { name: "Terracotta", hex: "#E07A5F" },
  { name: "Mocha Brown", hex: "#8D6E63" },
  { name: "Baby Blue", hex: "#87CEEB" },
  { name: "Lemon Chiffon", hex: "#FDFD96" },
  { name: "Mint Sprig", hex: "#A8DADC" },
];

export default function CustomOrderPage() {
  const { showToast } = useToast();
  const colorInputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderReferenceId, setOrderReferenceId] = useState("");

  // Form State
  const [category, setCategory] = useState("Bouquet");
  const [selectedPalette, setSelectedPalette] = useState("Blush Garden");
  const [customColors, setCustomColors] = useState<string[]>([]);
  const [pickerColor, setPickerColor] = useState<string>("#F8C8C8");
  const [customColorNotes, setCustomColorNotes] = useState("");
  const [sizePreference, setSizePreference] = useState("Standard / Medium");
  const [personalization, setPersonalization] = useState("");
  const [designNotes, setDesignNotes] = useState("");
  const [urgency, setUrgency] = useState("Standard (7-10 days)");
  const [budgetRange, setBudgetRange] = useState("₹1,000 – ₹2,500");
  const [customerName, setCustomerName] = useState("Ananya Sharma");
  const [customerEmail, setCustomerEmail] = useState("ananya.sharma@example.com");
  const [customerPhone, setCustomerPhone] = useState("+91 98765 43210");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const getSwatchDetails = (hex: string) => {
    const matched = QUICK_YARN_SWATCHES.find((s) => s.hex.toLowerCase() === hex.toLowerCase());
    return {
      name: matched ? matched.name : hex.toUpperCase(),
      hex: hex,
    };
  };

  const handleOpenColorPalette = () => {
    if (colorInputRef.current) {
      if ("showPicker" in HTMLInputElement.prototype) {
        try {
          colorInputRef.current.showPicker();
          return;
        } catch {
          // Fallback to click
        }
      }
      colorInputRef.current.click();
    }
  };

  const toggleColorSelection = (hex: string, name?: string) => {
    setPickerColor(hex);
    setCustomColors((prev) => {
      const isSelected = prev.some((c) => c.toLowerCase() === hex.toLowerCase());
      if (isSelected) {
        const updated = prev.filter((c) => c.toLowerCase() !== hex.toLowerCase());
        showToast("Yarn Shade Removed", `Removed ${name || hex.toUpperCase()} (${updated.length}/6)`, "info");
        return updated;
      } else {
        if (prev.length >= 6) {
          showToast("Maximum 6 Colors", "You can select up to 6 custom yarn shades.", "error");
          return prev;
        }
        const updated = [...prev, hex];
        showToast("Yarn Shade Selected 🎨", `Selected ${name || hex.toUpperCase()} (${updated.length}/6)`, "success");
        return updated;
      }
    });
  };

  const handleColorPicked = (newColor: string) => {
    setPickerColor(newColor);
    setCustomColors((prev) => {
      const isSelected = prev.some((c) => c.toLowerCase() === newColor.toLowerCase());
      if (isSelected) {
        return prev;
      }
      if (prev.length >= 6) {
        showToast("Maximum 6 Colors", "You can select up to 6 custom yarn shades.", "error");
        return prev;
      }
      const updated = [...prev, newColor];
      showToast("Yarn Shade Added 🎨", `Added ${newColor.toUpperCase()} (${updated.length}/6)`, "success");
      return updated;
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
      showToast("Reference Image Attached 📸", e.target.files[0].name, "success");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `KNT-CUSTOM-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderReferenceId(refId);
    setIsSubmitted(true);
    showToast("Custom Request Sent! 🌸", `Reference #${refId} received. Our artisan will contact you within 24 hours.`, "success");
  };

  return (
    <div className="bg-[#FFF8F5] min-h-screen py-8 lg:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: "Custom Order Request" }]} className="mb-6" />

        {/* Wizard Form Container */}
        {isSubmitted ? (
          <div className="bg-white rounded-3xl border border-[#E8D4CF] p-8 sm:p-14 text-center max-w-2xl mx-auto shadow-boutique animate-in zoom-in-95">
            <div className="w-20 h-20 rounded-full bg-[#FDE9E5] border border-[#E8D4CF] flex items-center justify-center text-[#8F3032] mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#8F3032]" />
            </div>

            <span className="text-xs uppercase font-bold text-[#8F3032] tracking-wider bg-[#FDE9E5] px-3 py-1 rounded-full">
              Reference #{orderReferenceId}
            </span>

            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#3A211D] mt-4 mb-2">
              Custom Request Received!
            </h2>

            <p className="text-sm text-[#78635E] leading-relaxed mb-6">
              Thank you, <strong>{customerName}</strong>! Our lead artisan has received your custom <strong>{category}</strong> inquiry. We will review your specifications, color palette, and notes, then share an exact quote and yarn preview via WhatsApp and Email within <strong>24 hours</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-left text-xs text-[#78635E] space-y-2 mb-8">
              <p><strong>Item:</strong> Custom {category}</p>
              <p><strong>Palette:</strong> {selectedPalette} {customColorNotes && `(${customColorNotes})`}</p>
              <p><strong>Estimated Timeline:</strong> {urgency}</p>
              <p><strong>Contact:</strong> {customerPhone} / {customerEmail}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors"
              >
                Continue Browsing Boutique →
              </Link>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FFF8F5] text-[#8F3032] border border-[#E8D4CF] text-xs font-semibold hover:bg-[#FDE9E5] transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-10 shadow-boutique">
            
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between max-w-xl mx-auto mb-10">
              {[
                { num: 1, title: "Category" },
                { num: 2, title: "Colors" },
                { num: 3, title: "Details" },
                { num: 4, title: "Review" },
              ].map((s, idx) => (
                <div key={s.num} className="flex items-center gap-2">
                  <button
                    onClick={() => s.num < step && setStep(s.num)}
                    className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                      step === s.num
                        ? "bg-[#8F3032] text-white ring-4 ring-[#8F3032]/20"
                        : step > s.num
                        ? "bg-[#FDE9E5] text-[#8F3032] border border-[#E8D4CF]"
                        : "bg-[#FFF8F5] text-[#78635E] border border-[#E8D4CF]"
                    }`}
                  >
                    {step > s.num ? "✓" : s.num}
                  </button>
                  <span className={`text-xs font-semibold hidden sm:inline ${step >= s.num ? "text-[#3A211D]" : "text-[#78635E]"}`}>
                    {s.title}
                  </span>
                  {idx < 3 && <div className="w-8 sm:w-16 h-0.5 bg-[#E8D4CF] ml-2" />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: Select Category */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="text-center sm:text-left">
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#3A211D]">
                      Step 1: Choose Your Item Type
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78635E] mt-1">
                      Select what category of handmade creation you would like us to craft.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {CATEGORIES.map((cat) => (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setCategory(cat.name)}
                        className={`p-4 rounded-2xl border text-left transition-all flex flex-col items-center sm:items-start text-center sm:text-left ${
                          category === cat.name
                            ? "border-[#8F3032] bg-[#FDE9E5] ring-2 ring-[#8F3032]/30 text-[#8F3032]"
                            : "border-[#E8D4CF] bg-[#FFF8F5] hover:bg-white text-[#3A211D]"
                        }`}
                      >
                        <FlowerIcon className="w-6 h-6 text-[#8F3032] mb-2" />
                        <span className="text-xs font-bold">{cat.name}</span>
                        <span className="text-[10px] text-[#78635E] mt-0.5 line-clamp-1">
                          Custom pattern
                        </span>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setCategory("Something Completely New")}
                      className={`p-4 rounded-2xl border text-left transition-all flex flex-col items-center sm:items-start text-center sm:text-left ${
                        category === "Something Completely New"
                          ? "border-[#8F3032] bg-[#FDE9E5] ring-2 ring-[#8F3032]/30 text-[#8F3032]"
                          : "border-[#E8D4CF] bg-[#FFF8F5] hover:bg-white text-[#3A211D]"
                      }`}
                    >
                      <Sparkles className="w-6 h-6 text-[#C69A5A] mb-2" />
                      <span className="text-xs font-bold">Custom Concept</span>
                      <span className="text-[10px] text-[#78635E] mt-0.5">
                        Brand new idea
                      </span>
                    </button>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-8 py-3 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors flex items-center gap-2"
                    >
                      <span>Next: Choose Color Palette</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Color Palette */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#3A211D]">
                      Step 2: Color Palette & Aesthetics
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78635E] mt-1">
                      Select a signature color mood or specify exact yarn shades.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PALETTE_OPTIONS.map((pal) => (
                      <button
                        type="button"
                        key={pal.name}
                        onClick={() => setSelectedPalette(pal.name)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          selectedPalette === pal.name
                            ? "border-[#8F3032] bg-[#FDE9E5] ring-2 ring-[#8F3032]/30"
                            : "border-[#E8D4CF] bg-[#FFF8F5] hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-[#3A211D]">
                            {pal.name}
                          </span>
                          {selectedPalette === pal.name && (
                            <CheckCircle2 className="w-4 h-4 text-[#8F3032]" />
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {pal.colors.map((c, i) => (
                            <span
                              key={i}
                              className="w-7 h-7 rounded-full border border-black/10 shadow-xs"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Interactive Color Picker Section */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <label className="text-xs font-bold text-[#3A211D] flex items-center gap-1.5">
                          <Pipette className="w-3.5 h-3.5 text-[#8F3032]" />
                          <span>Custom Yarn Color Picker:</span>
                        </label>
                        <p className="text-[11px] text-[#78635E] mt-0.5">
                          Pick exact hex colors or click yarn swatches to build your bespoke palette.
                        </p>
                      </div>

                      {/* Live Color Picker Trigger & Add Button */}
                      <div className="flex items-center gap-2">
                        {/* Hidden Native Color Input with Ref */}
                        <input
                          ref={colorInputRef}
                          type="color"
                          value={pickerColor}
                          onChange={(e) => handleColorPicked(e.target.value)}
                          className="sr-only"
                          title="Open color palette"
                        />

                        {/* Interactive Color Swatch Box (Clicking opens color palette) */}
                        <button
                          type="button"
                          onClick={handleOpenColorPalette}
                          className="relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-[#E8D4CF] shadow-xs hover:border-[#8F3032] transition-all cursor-pointer group"
                          title="Click to open color palette"
                        >
                          <span
                            className="w-5 h-5 rounded-md border border-black/15 shrink-0 shadow-2xs group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: pickerColor }}
                          />
                          <span className="text-xs font-mono font-bold uppercase text-[#3A211D]">
                            {pickerColor}
                          </span>
                        </button>

                        {/* + Add Color Button (Clicking opens color palette dialog directly) */}
                        <button
                          type="button"
                          onClick={handleOpenColorPalette}
                          className="px-4 py-2 rounded-xl bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] active:scale-95 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Color</span>
                        </button>
                      </div>
                    </div>

                    {/* Selected Yarn Shades (Always visible with accurate count) */}
                    <div className="pt-2 border-t border-[#E8D4CF]/60">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold text-[#78635E]">
                          Your Selected Yarn Shades ({customColors.length}/6):
                        </span>
                        {customColors.length > 0 && (
                          <button
                            type="button"
                            onClick={() => setCustomColors([])}
                            className="text-[10px] text-[#8F3032] hover:underline font-medium cursor-pointer"
                          >
                            Clear All
                          </button>
                        )}
                      </div>

                      {customColors.length === 0 ? (
                        <p className="text-[11px] text-[#78635E]/80 italic py-1.5">
                          No custom shades selected yet. Pick a color above or click an artisan shade below to select.
                        </p>
                      ) : (
                        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                          {customColors.map((color, idx) => {
                            const details = getSwatchDetails(color);
                            return (
                              <div
                                key={`${color}-${idx}`}
                                className="flex items-center gap-2 pl-2 pr-2.5 py-1.5 rounded-2xl bg-white border-2 border-[#8F3032] shadow-xs animate-in zoom-in-95 duration-200"
                              >
                                <span
                                  className="w-5 h-5 rounded-md border border-black/15 shrink-0 shadow-2xs"
                                  style={{ backgroundColor: color }}
                                />
                                <div className="flex flex-col">
                                  <span className="text-[11px] font-bold text-[#3A211D] leading-tight">
                                    {details.name}
                                  </span>
                                  <span className="text-[9px] font-mono text-[#78635E] uppercase">
                                    {color}
                                  </span>
                                </div>
                                <span className="w-4 h-4 rounded-full bg-[#8F3032] text-white flex items-center justify-center shrink-0 ml-0.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </span>
                                <button
                                  type="button"
                                  onClick={() => toggleColorSelection(color, details.name)}
                                  className="ml-0.5 p-0.5 rounded-full text-[#78635E] hover:text-[#8F3032] hover:bg-[#FDE9E5] transition-colors cursor-pointer"
                                  aria-label={`Remove color ${details.name}`}
                                  title={`Remove ${details.name}`}
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Quick Artisan Yarn Color Swatches with Checkmarks */}
                    <div className="pt-2 border-t border-[#E8D4CF]/60">
                      <span className="text-[11px] font-semibold text-[#78635E] block mb-2">
                        Quick Pick Popular Artisan Shades:
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        {QUICK_YARN_SWATCHES.map((swatch) => {
                          const isSelected = customColors.some(
                            (c) => c.toLowerCase() === swatch.hex.toLowerCase()
                          );
                          return (
                            <button
                              type="button"
                              key={swatch.hex}
                              onClick={() => toggleColorSelection(swatch.hex, swatch.name)}
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-[#FDE9E5] border-[#8F3032] text-[#8F3032] font-bold shadow-xs ring-2 ring-[#8F3032]/20"
                                  : "bg-white border-[#E8D4CF] text-[#3A211D] hover:border-[#8F3032]/40 hover:bg-[#FFF8F5]"
                              }`}
                            >
                              <span
                                className="w-4 h-4 rounded-full border border-black/15 shrink-0 shadow-2xs"
                                style={{ backgroundColor: swatch.hex }}
                              />
                              <span className="text-[11px]">{swatch.name}</span>
                              {isSelected && (
                                <span className="w-3.5 h-3.5 rounded-full bg-[#8F3032] text-white flex items-center justify-center shrink-0 ml-0.5">
                                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Specific Custom Color Notes */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-semibold text-[#3A211D] block">
                      Specific Color Requests / Pantone / Hex (Optional):
                    </label>
                    <input
                      type="text"
                      value={customColorNotes}
                      onChange={(e) => setCustomColorNotes(e.target.value)}
                      placeholder="e.g. 'Match my blush pink bridesmaid lehenga' or 'Sage green with cream tips'"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] placeholder-[#78635E]/60 focus:outline-none focus:border-[#8F3032]"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 rounded-full border border-[#E8D4CF] text-xs font-semibold text-[#3A211D] hover:bg-[#FFF8F5] transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-8 py-3 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors flex items-center gap-2"
                    >
                      <span>Next: Size & Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Specifications & Reference Photo */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#3A211D]">
                      Step 3: Size, Personalization & Reference Photo
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78635E] mt-1">
                      Give our artisan specific guidance to make it uniquely yours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Size Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#3A211D] block">
                        Size Preference:
                      </label>
                      <select
                        value={sizePreference}
                        onChange={(e) => setSizePreference(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs font-medium text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                      >
                        <option value="Mini / Pocket Sized">Mini / Pocket Sized</option>
                        <option value="Standard / Medium">Standard / Medium</option>
                        <option value="Grand / Oversized">Grand / Oversized</option>
                        <option value="Custom Dimensions Specified in Notes">Custom Dimensions (in notes)</option>
                      </select>
                    </div>

                    {/* Personalization Initials */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#3A211D] block">
                        Personalization / Name / Initial Tag:
                      </label>
                      <input
                        type="text"
                        value={personalization}
                        onChange={(e) => setPersonalization(e.target.value)}
                        placeholder="e.g. 'To Ananya with Love', 'Initials: R&S'"
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] placeholder-[#78635E]/60 focus:outline-none focus:border-[#8F3032]"
                      />
                    </div>
                  </div>

                  {/* Design Notes */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#3A211D] block">
                      Design Notes & Special Requests:
                    </label>
                    <textarea
                      rows={3}
                      value={designNotes}
                      onChange={(e) => setDesignNotes(e.target.value)}
                      placeholder="Describe shape, number of flowers, special details, yarn texture preference..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] placeholder-[#78635E]/60 focus:outline-none focus:border-[#8F3032]"
                    />
                  </div>

                  {/* Reference Image Upload Box */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#3A211D] block">
                      Upload Reference Image / Sketch (Optional):
                    </label>
                    <div className="border-2 border-dashed border-[#E8D4CF] rounded-3xl p-6 text-center hover:border-[#8F3032] transition-colors bg-[#FFF8F5] relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <UploadCloud className="w-8 h-8 text-[#8F3032] mx-auto mb-2" />
                      {uploadedFileName ? (
                        <p className="text-xs font-bold text-[#8F3032]">
                          Attached: {uploadedFileName}
                        </p>
                      ) : (
                        <>
                          <p className="text-xs font-semibold text-[#3A211D]">
                            Drag & drop or browse photos from your phone / computer
                          </p>
                          <p className="text-[10px] text-[#78635E] mt-1">
                            PNG, JPG, HEIC up to 10MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Urgency & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#3A211D] block">
                        Turnaround Urgency:
                      </label>
                      <select
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs font-medium text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                      >
                        <option value="Standard (7-10 days)">Standard (7-10 days)</option>
                        <option value="Express (4-6 days)">Express (4-6 days)</option>
                        <option value="Gift Rush (2-3 days)">Gift Rush (2-3 days)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#3A211D] block">
                        Estimated Budget Range:
                      </label>
                      <select
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs font-medium text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                      >
                        <option value="₹500 – ₹1,000">₹500 – ₹1,000</option>
                        <option value="₹1,000 – ₹2,500">₹1,000 – ₹2,500</option>
                        <option value="₹2,500 – ₹5,000">₹2,500 – ₹5,000</option>
                        <option value="₹5,000+ (Grand Masterpiece)">₹5,000+ (Grand Masterpiece)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full border border-[#E8D4CF] text-xs font-semibold text-[#3A211D] hover:bg-[#FFF8F5] transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-8 py-3 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] transition-colors flex items-center gap-2"
                    >
                      <span>Next: Review & Contact</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Review & Customer Contact */}
              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#3A211D]">
                      Step 4: Review & Your Contact Details
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78635E] mt-1">
                      Where should our artisan send your custom preview and finalized quote?
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] space-y-2 text-xs">
                    <div className="flex justify-between border-b border-[#E8D4CF]/60 pb-2">
                      <span className="text-[#78635E]">Item Type:</span>
                      <strong className="text-[#3A211D]">{category}</strong>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#E8D4CF]/60 pb-2">
                      <span className="text-[#78635E]">Color Palette:</span>
                      <div className="flex items-center gap-2">
                        <strong className="text-[#3A211D]">
                          {selectedPalette} {customColorNotes && `(${customColorNotes})`}
                        </strong>
                        {customColors.length > 0 && (
                          <div className="flex items-center gap-1">
                            {customColors.map((c, i) => (
                              <span
                                key={i}
                                className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs inline-block"
                                style={{ backgroundColor: c }}
                                title={c}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between border-b border-[#E8D4CF]/60 pb-2">
                      <span className="text-[#78635E]">Size Preference:</span>
                      <strong className="text-[#3A211D]">{sizePreference}</strong>
                    </div>
                    {personalization && (
                      <div className="flex justify-between border-b border-[#E8D4CF]/60 pb-2">
                        <span className="text-[#78635E]">Personalization Tag:</span>
                        <strong className="text-[#8F3032]">&ldquo;{personalization}&rdquo;</strong>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-[#78635E]">Timeline:</span>
                      <strong className="text-[#3A211D]">{urgency}</strong>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3A211D] block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3A211D] block">
                        WhatsApp Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3A211D] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] text-xs text-[#3A211D] focus:outline-none focus:border-[#8F3032]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-full border border-[#E8D4CF] text-xs font-semibold text-[#3A211D] hover:bg-[#FFF8F5] transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] shadow-md hover:shadow-boutique-hover transition-all flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Custom Request →</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
