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
    <footer className="relative bg-[#FFF9F6] border-t border-[#E7D1CC]/70 pt-12 sm:pt-16 pb-8 text-[#2E211E] overflow-hidden">
      
      {/* Delicate Botanical Floral Branches on Far Left & Far Right Edges */}
      <div className="absolute -left-2 bottom-2 text-[#EFB8B0]/60 pointer-events-none hidden md:block">
        <BotanicalSideBranch className="w-24 lg:w-32 h-52 lg:h-64" />
      </div>
      <div className="absolute -right-2 bottom-2 text-[#EFB8B0]/60 pointer-events-none transform scale-x-[-1] hidden md:block">
        <BotanicalSideBranch className="w-24 lg:w-32 h-52 lg:h-64" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Main Columns Container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 mb-12">
          
          {/* Left Block: Brand Identity + Socials */}
          <div className="flex flex-col items-start space-y-4 lg:pr-10 lg:border-r lg:border-[#E7D1CC] shrink-0 w-full lg:w-auto">
            <Link href="/" className="inline-block">
              <KnotelleCrownLogo className="items-start text-left" />
            </Link>

            {/* Social Media Icons Row */}
            <div className="flex items-center gap-3.5 pt-1 text-[#2E211E]">
              <a
                href="https://instagram.com/knotelleindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 flex items-center justify-center text-[#2E211E] hover:text-[#913638] transition-colors active:scale-95"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/knotelleindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 flex items-center justify-center text-[#2E211E] hover:text-[#913638] transition-colors active:scale-95"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com/knotelleindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-7 h-7 flex items-center justify-center text-[#2E211E] hover:text-[#913638] transition-colors active:scale-95"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@knotelleindia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 flex items-center justify-center text-[#2E211E] hover:text-[#913638] transition-colors active:scale-95"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Columns Grid: Quick Links, Help, Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 w-full flex-1">
            
            {/* Column 1: Quick Links */}
            <div className="space-y-3.5">
              <h4 className="font-bold text-sm text-[#2E211E]">
                <span className="border-b-2 border-[#913638] pb-1 inline-block">
                  Quick Links
                </span>
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

            {/* Column 2: Help */}
            <div className="space-y-3.5">
              <h4 className="font-bold text-sm text-[#2E211E] pb-1">
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

            {/* Column 3: Contact */}
            <div className="space-y-3.5">
              <h4 className="font-bold text-sm text-[#2E211E] pb-1">
                Contact
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-[#786864] pt-1">
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#2E211E] shrink-0" />
                  <a href="tel:+919773039243" className="hover:text-[#913638] transition-colors font-medium text-[#2E211E]">
                    +91 97730 39243
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#2E211E] shrink-0" />
                  <a href="mailto:support@knotelle.in" className="hover:text-[#913638] transition-colors font-medium text-[#2E211E]">
                    support@knotelle.in
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#2E211E] shrink-0" />
                  <span className="font-medium text-[#2E211E]">India</span>
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-6 border-t border-[#E7D1CC]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#786864]">
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


