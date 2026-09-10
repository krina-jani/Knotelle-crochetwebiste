"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Sparkles,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Share2,
  Clock,
  Ruler,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductColor } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductCard } from "@/components/ui/ProductCard";
import { BotanicalFlourish, FlowerIcon } from "@/components/ui/BotanicalDecorations";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addItem, setIsCartOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors[0] || { name: "Default", hex: "#FFF" }
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes?.[0] || "Standard"
  );
  const [customText, setCustomText] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">("desc");

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity, {
      color: selectedColor,
      size: selectedSize,
      customText: customText.trim() || undefined,
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    addItem(product, quantity, {
      color: selectedColor,
      size: selectedSize,
      customText: customText.trim() || undefined,
    });
    router.push("/checkout");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link Copied 📋", "Product link copied to your clipboard.", "info");
    }
  };

  return (
    <div className="bg-[#FFF8F5] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Shop", href: "/shop" },
            { label: product.category, href: `/category/${product.categorySlug}` },
            { label: product.name },
          ]}
          className="mb-8"
        />

        {/* Product Showcase: Left Gallery, Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-10 shadow-boutique mb-16">
          
          {/* Left Gallery (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Stage Image with Zoom feel */}
            <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-[#FFF8F5] border border-[#E8D4CF]">
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-[#E8D4CF] flex items-center justify-center text-[#78635E] hover:text-[#8F3032] hover:bg-white transition-all shadow-md active:scale-95"
              >
                <Heart
                  className={`w-5 h-5 transition-all ${
                    isWishlisted ? "fill-[#8F3032] text-[#8F3032] scale-110" : ""
                  }`}
                />
              </button>

              {/* Badge */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.isBestSeller && <Badge variant="rose">Best Seller</Badge>}
                {product.isNew && <Badge variant="pink">New In</Badge>}
                {product.isCustomizable && (
                  <Badge variant="gold" className="flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Customizable
                  </Badge>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden bg-[#FFF8F5] shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx
                        ? "border-[#8F3032] ring-2 ring-[#8F3032]/20"
                        : "border-[#E8D4CF] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} preview ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Info (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between gap-4">
                <Link
                  href={`/category/${product.categorySlug}`}
                  className="text-xs uppercase tracking-widest text-[#8F3032] font-semibold hover:underline"
                >
                  {product.category}
                </Link>
                <button
                  onClick={handleShare}
                  className="text-[#78635E] hover:text-[#8F3032] flex items-center gap-1 text-xs transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

              {/* Product Title */}
              <h1 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A211D]">
                {product.name}
              </h1>

              {/* Star Rating & Review count */}
              <div className="flex items-center gap-3">
                <StarRating rating={product.rating} size="md" showNumber reviewCount={product.reviewCount} />
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium border border-emerald-200">
                  {product.stock > 0 ? "In Stock & Ready to Ship" : "Made to Order"}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl sm:text-3xl font-bold text-[#8F3032]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.comparePrice && (
                  <span className="text-base text-[#78635E] line-through">
                    ₹{product.comparePrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-xs text-[#78635E]">
                  (Inclusive of all taxes & handmade fees)
                </span>
              </div>

              {/* Short Description */}
              <p className="text-sm text-[#78635E] leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#E8D4CF]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#3A211D]">
                      Yarn Color:{" "}
                      <strong className="text-[#8F3032]">{selectedColor.name}</strong>
                    </span>
                    <Link
                      href="/custom-order"
                      className="text-[11px] text-[#8F3032] hover:underline"
                    >
                      Want custom colors? →
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                          selectedColor.name === color.name
                            ? "border-[#8F3032] bg-[#FDE9E5] text-[#8F3032] ring-1 ring-[#8F3032]"
                            : "border-[#E8D4CF] hover:bg-[#FFF8F5] text-[#3A211D]"
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                        {selectedColor.name === color.name && (
                          <Check className="w-3 h-3 text-[#8F3032]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection (if available) */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-[#3A211D] block">
                    Size / Variant:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 rounded-full border text-xs font-medium transition-all ${
                          selectedSize === size
                            ? "border-[#8F3032] bg-[#8F3032] text-white"
                            : "border-[#E8D4CF] hover:bg-[#FFF8F5] text-[#3A211D]"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Personalization Input (Optional) */}
              {product.isCustomizable && (
                <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-[#3A211D] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C69A5A]" />
                      <span>Add Name / Initials / Gift Tag Note (Free):</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    maxLength={50}
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="e.g. 'For Rhea 🌸' or 'Initials: A.S.'"
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E8D4CF] text-xs text-[#3A211D] placeholder-[#78635E]/50 focus:outline-none focus:border-[#8F3032]"
                  />
                  <p className="text-[10px] text-[#78635E]">
                    Our artisan will stitch or write your customized message on the boutique tag.
                  </p>
                </div>
              )}

              {/* Quantity Selector & Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#3A211D]">Quantity:</span>
                  <div className="flex items-center border border-[#E8D4CF] rounded-full bg-white overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-[#78635E] hover:text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-[#3A211D] min-w-[24px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-[#78635E] hover:text-[#3A211D] hover:bg-[#FDE9E5] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-3.5 px-6 rounded-full bg-[#8F3032] text-white text-sm font-semibold hover:bg-[#722628] shadow-md hover:shadow-boutique-hover transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3.5 px-6 rounded-full bg-[#FDE9E5] text-[#8F3032] text-sm font-semibold hover:bg-[#F4C7C1] border border-[#E8D4CF] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Buy Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E8D4CF] text-[11px] text-[#78635E]">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#8F3032] shrink-0" />
                  <span>Pan India Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#8F3032] shrink-0" />
                  <span>Handmade Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-[#8F3032] shrink-0" />
                  <span>Safe Packaging</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Tabbed Product Details */}
        <div className="bg-white rounded-3xl border border-[#E8D4CF] p-6 sm:p-10 shadow-boutique mb-16">
          <div className="flex items-center gap-4 sm:gap-8 border-b border-[#E8D4CF] pb-4 mb-6 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("desc")}
              className={`font-serif-luxury text-base sm:text-lg font-bold pb-2 transition-all whitespace-nowrap relative ${
                activeTab === "desc"
                  ? "text-[#8F3032]"
                  : "text-[#78635E] hover:text-[#3A211D]"
              }`}
            >
              <span>Product Description</span>
              {activeTab === "desc" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8F3032] rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("specs")}
              className={`font-serif-luxury text-base sm:text-lg font-bold pb-2 transition-all whitespace-nowrap relative ${
                activeTab === "specs"
                  ? "text-[#8F3032]"
                  : "text-[#78635E] hover:text-[#3A211D]"
              }`}
            >
              <span>Crafting & Specifications</span>
              {activeTab === "specs" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8F3032] rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`font-serif-luxury text-base sm:text-lg font-bold pb-2 transition-all whitespace-nowrap relative ${
                activeTab === "reviews"
                  ? "text-[#8F3032]"
                  : "text-[#78635E] hover:text-[#3A211D]"
              }`}
            >
              <span>Artisan Reviews ({product.reviewCount})</span>
              {activeTab === "reviews" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8F3032] rounded-full" />
              )}
            </button>
          </div>

          {/* Tab 1: Description */}
          {activeTab === "desc" && (
            <div className="space-y-4 text-sm text-[#78635E] leading-relaxed max-w-3xl">
              <p>{product.description}</p>
              <p>
                Each stitch is tightly looped by hand to ensure longevity, color fastness, and structure retention. Unlike factory machine-made knits, our artisanal crochet possesses unmistakable warmth, depth, and personality.
              </p>
              <div className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] flex items-center gap-3 text-xs text-[#3A211D]">
                <FlowerIcon className="w-5 h-5 text-[#8F3032] shrink-0" />
                <span>
                  Every creation comes nestled in our signature KNOTELLE recycled boutique box, tied with satin ribbon and sprinkled with dried lavender buds.
                </span>
              </div>
            </div>
          )}

          {/* Tab 2: Specifications */}
          {activeTab === "specs" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl text-sm">
              <div className="space-y-3">
                <h4 className="font-bold text-[#3A211D] flex items-center gap-2">
                  <FlowerIcon className="w-4 h-4 text-[#8F3032]" />
                  <span>Materials Used</span>
                </h4>
                <ul className="space-y-1 text-[#78635E] text-xs">
                  {product.materials?.map((mat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8F3032]" />
                      <span>{mat}</span>
                    </li>
                  )) || <li>100% Premium Milk Cotton Yarn</li>}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#3A211D] flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-[#8F3032]" />
                  <span>Dimensions & Time</span>
                </h4>
                <div className="space-y-1 text-[#78635E] text-xs">
                  <p>Dimensions: {product.dimensions || "Standard Boutique Sizing"}</p>
                  <p>Handcrafting Time: {product.craftTime || "4-6 hours"}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Reviews */}
          {activeTab === "reviews" && (
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF]">
                <div className="text-center pr-4 border-r border-[#E8D4CF]">
                  <span className="font-serif-luxury text-3xl font-bold text-[#8F3032]">
                    {product.rating.toFixed(1)}
                  </span>
                  <p className="text-[10px] text-[#78635E]">out of 5.0</p>
                </div>
                <div>
                  <StarRating rating={product.rating} size="md" />
                  <p className="text-xs text-[#78635E] mt-1">
                    Based on {product.reviewCount} verified purchases
                  </p>
                </div>
              </div>

              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-4">
                  {product.reviews.map((rev) => (
                    <div key={rev.id} className="p-4 rounded-2xl bg-[#FFF8F5] border border-[#E8D4CF] space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#3A211D]">{rev.userName}</span>
                          {rev.verified && (
                            <span className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full font-medium">
                              Verified Buyer
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#78635E]">{rev.date}</span>
                      </div>
                      <StarRating rating={rev.rating} size="sm" />
                      <p className="text-xs text-[#78635E] leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#78635E]">
                  Be the first to leave a review after your handmade creation arrives!
                </p>
              )}
            </div>
          )}
        </div>

        {/* Custom Order Request Promotional Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#FDE9E5] via-[#FFF8F5] to-[#FDE9E5] border border-[#E8D4CF] p-8 sm:p-10 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-boutique">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#3A211D]">
              Want a different color, size, or custom design?
            </h3>
            <p className="text-xs sm:text-sm text-[#78635E]">
              We craft bespoke pieces from your reference images and ideas.
            </p>
          </div>
          <Link
            href="/custom-order"
            className="px-7 py-3 rounded-full bg-[#8F3032] text-white text-xs font-semibold hover:bg-[#722628] shadow-sm transition-all flex items-center gap-2 shrink-0"
          >
            <span>Request Custom Order</span>
            <Sparkles className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#3A211D]">
                You May Also Adore
              </h2>
              <Link
                href={`/category/${product.categorySlug}`}
                className="text-xs font-semibold text-[#8F3032] hover:underline"
              >
                More in {product.category} →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
