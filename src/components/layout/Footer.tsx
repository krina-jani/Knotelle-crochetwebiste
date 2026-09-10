import React from "react";
import Link from "next/link";
import {
  KnotelleCrownLogo,
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
  YouTubeIcon,
  BotanicalSideBranch,
} from "@/components/ui/BotanicalDecorations";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#FFF9F6] border-t border-[#E7D1CC]/80 pt-12 sm:pt-14 pb-8 text-[#2E211E] overflow-hidden">
      
      {/* Botanical Floral Line Art on Far Left & Far Right */}
      <div className="absolute left-0 bottom-4 text-[#EFB8B0]/40 pointer-events-none hidden md:block">
        <BotanicalSideBranch className="w-20 sm:w-24 h-44 sm:h-52" />
      </div>
      <div className="absolute right-0 bottom-4 text-[#EFB8B0]/40 pointer-events-none transform scale-x-[-1] hidden md:block">
        <BotanicalSideBranch className="w-20 sm:w-24 h-44 sm:h-52" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-10 items-start">
          
          {/* Column 1: Brand & Socials (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 flex items-start justify-between pr-0 lg:pr-8">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <KnotelleCrownLogo className="items-start text-left" />
              </Link>

              {/* Social Links matching screenshot */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://instagram.com/knotelleindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white border border-[#E7D1CC] flex items-center justify-center text-[#2E211E] hover:bg-[#913638] hover:text-white hover:border-[#913638] transition-all shadow-2xs active:scale-95"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/knotelleindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white border border-[#E7D1CC] flex items-center justify-center text-[#2E211E] hover:bg-[#913638] hover:text-white hover:border-[#913638] transition-all shadow-2xs active:scale-95"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com/knotelleindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-8 h-8 rounded-full bg-white border border-[#E7D1CC] flex items-center justify-center text-[#2E211E] hover:bg-[#913638] hover:text-white hover:border-[#913638] transition-all shadow-2xs active:scale-95"
                >
                  <PinterestIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@knotelleindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white border border-[#E7D1CC] flex items-center justify-center text-[#2E211E] hover:bg-[#913638] hover:text-white hover:border-[#913638] transition-all shadow-2xs active:scale-95"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Vertical Divider Line after Column 1 on Desktop */}
            <div className="hidden lg:block w-px h-28 bg-[#E7D1CC] self-center ml-auto" />
          </div>

          {/* Column 2: Quick Links (Spans 2.5 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#2E211E] border-b-2 border-[#913638] pb-1 w-fit">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#786864] pt-1">
              <li>
                <Link href="/" className="hover:text-[#913638] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#913638] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/custom-order" className="hover:text-[#913638] transition-colors">
                  Custom Order
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#913638] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#913638] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Help (Spans 2.5 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#2E211E] pb-1 w-fit">
              Help
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#786864] pt-1">
              <li>
                <Link href="/contact" className="hover:text-[#913638] transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#913638] transition-colors">
                  Return & Refund
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#913638] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/account/orders" className="hover:text-[#913638] transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#2E211E] pb-1 w-fit">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#786864] pt-1">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#913638] shrink-0" />
                <a href="tel:+919773039243" className="hover:text-[#913638] transition-colors font-medium">
                  +91 97730 39243
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#913638] shrink-0" />
                <a href="mailto:support@knotelle.in" className="hover:text-[#913638] transition-colors font-medium">
                  support@knotelle.in
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#913638] shrink-0" />
                <span>India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-6 border-t border-[#E7D1CC]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#786864]">
          <p>© 2024 Knotelle. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <span>Made with</span>
            <span className="text-[#913638] text-sm">♡</span>
            <span>for a kinder, cozier world.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

