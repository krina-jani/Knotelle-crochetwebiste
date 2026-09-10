import React from "react";
import Link from "next/link";
import {
  KnotelleCrownLogo,
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
  YouTubeIcon,
} from "@/components/ui/BotanicalDecorations";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E7D1CC] pt-14 pb-10 text-[#2E211E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Brand Logo & Socials (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-start">
              <Link href="/" className="inline-block">
                <KnotelleCrownLogo className="items-start text-left" />
              </Link>
            </div>

            {/* Social Links matching screenshot */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#FFF9F6] border border-[#E7D1CC] flex items-center justify-center text-[#2E211E] hover:bg-[#913638] hover:text-white hover:border-[#913638] transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#FFF9F6] border border-[#E7D1CC] flex items-center justify-center text-[#2E211E] hover:bg-[#913638] hover:text-white hover:border-[#913638] transition-all"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full bg-[#FFF9F6] border border-[#E7D1CC] flex items-center justify-center text-[#2E211E] hover:bg-[#913638] hover:text-white hover:border-[#913638] transition-all"
              >
                <PinterestIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#FFF9F6] border border-[#E7D1CC] flex items-center justify-center text-[#2E211E] hover:bg-[#913638] hover:text-white hover:border-[#913638] transition-all"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2.5 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#2E211E]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#786864]">
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
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#2E211E]">
              Help
            </h4>
            <ul className="space-y-2 text-xs text-[#786864]">
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
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#2E211E]">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#786864]">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#913638] shrink-0" />
                <a href="tel:+919773038243" className="hover:text-[#913638] transition-colors">
                  +91 97730 38243
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#913638] shrink-0" />
                <a href="mailto:support@knotelle.in" className="hover:text-[#913638] transition-colors">
                  support@knotelle.in
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#913638] shrink-0" />
                <span>India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-6 border-t border-[#E7D1CC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#786864]">
          <p>&copy; {new Date().getFullYear()} Knotelle. All rights reserved.</p>

          <p className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 fill-[#913638] text-[#913638]" />
            <span>for a kinder, cozier world.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
