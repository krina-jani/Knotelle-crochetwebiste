import React from "react";
import Image from "next/image";

export function KnotelleCrownLogo({ className = "h-12 w-12 sm:h-14 sm:w-14" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/images/logo/logo.png"
        alt="KNOTELLE — Handmade Crochet Creations"
        width={200}
        height={200}
        priority
        className="object-contain w-full h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}


export function BotanicalFlourish({ className = "w-24 h-6 text-[#E7D1CC]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 14C45 14 35 7 20 7C10 7 2 12 2 14C2 16 10 21 20 21C35 21 45 14 60 14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M60 14C75 14 85 7 100 7C110 7 118 12 118 14C118 16 110 21 100 21C85 21 75 14 60 14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="60" cy="14" r="3" fill="currentColor" />
      <circle cx="35" cy="11" r="1.5" fill="currentColor" />
      <circle cx="85" cy="11" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function FlowerIcon({ className = "w-5 h-5 text-[#913638]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="3.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16.5" cy="10.5" r="3.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="15" cy="16" r="3.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="9" cy="16" r="3.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7.5" cy="10.5" r="3.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="2.5" fill="#C89B61" />
    </svg>
  );
}

export function StitchDivider({ className = "my-8" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E7D1CC]" />
      <div className="flex items-center gap-2 text-[#913638]">
        <span className="text-xs">✦</span>
        <FlowerIcon className="w-4 h-4" />
        <span className="text-xs">✦</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E7D1CC]" />
    </div>
  );
}

export function YarnBallDecor({ className = "w-6 h-6 text-[#913638]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6 8C9 10 15 10 18 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M5 14C8 16 16 16 19 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M8 5C10 8 10 16 8 19"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16 5C14 8 14 16 16 19"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M19 18C21 20 22 22 23 22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BotanicalCornerFlourish({ className = "w-24 h-24 text-[#EFB8B0]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 90C10 50 50 10 90 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <path
        d="M20 90C20 60 60 20 90 20"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="90" cy="10" r="3" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
      <circle cx="70" cy="25" r="2.5" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
      <circle cx="25" cy="70" r="2.5" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
      <circle cx="10" cy="90" r="3" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function CategoryHeaderDivider({ className = "my-3" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-10 bg-[#E7D1CC]" />
      <span className="text-sm text-[#913638]">🌸</span>
      <span className="h-px w-10 bg-[#E7D1CC]" />
    </div>
  );
}

export function HandmadePaperTag({
  text = "Good Things Are Handmade",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative bg-[#FFF9F6] border border-[#E7D1CC] rounded-xl p-3 shadow-md text-center max-w-[150px] rotate-2 ${className}`}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-1.5 h-3 bg-[#C89B61]/80 rounded-t" />
        <div className="w-2.5 h-2.5 rounded-full bg-white border border-[#E7D1CC]" />
      </div>

      <div className="pt-1">
        <p className="font-script-boutique text-base sm:text-lg font-bold text-[#2E211E] leading-tight">
          {text}
        </p>
        <span className="text-xs text-[#913638] block mt-0.5">♡</span>
      </div>
    </div>
  );
}

export function YarnHeartArt({ className = "w-16 h-16 text-[#EFB8B0]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 54C32 54 10 40 10 24C10 16 16 10 24 10C28.5 10 31.5 13 32 14C32.5 13 35.5 10 40 10C48 10 54 16 54 24C54 40 32 54 32 54Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 22C24 26 40 26 48 22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M14 30C26 36 38 36 50 30"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 40C28 44 36 44 44 40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs ${className}`}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path
        d="M19 8.2c-.15-.6-.6-1.05-1.2-1.2-1.1-.3-5.8-.3-5.8-.3s-4.7 0-5.8.3c-.6.15-1.05.6-1.2 1.2-.3 1.1-.3 3.8-.3 3.8s0 2.7.3 3.8c.15.6.6 1.05 1.2 1.2 1.1.3 5.8.3 5.8.3s4.7 0 5.8-.3c.6-.15 1.05-.6 1.2-1.2.3-1.1.3-3.8.3-3.8s0-2.7-.3-3.8z"
        fill="white"
      />
      <polygon points="10.5 14.2 14.5 12 10.5 9.8" fill="#FF0000" />
    </svg>
  );
}

export function PinterestIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs ${className}`}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="#E60023" />
      <path
        d="M12 4a8 8 0 0 0-2.8 15.5c-.05-.65-.1-1.65.02-2.35.12-.7.8-3.4.8-3.4s-.2-.4-.2-1c0-.95.55-1.65 1.25-1.65.6 0 .9.45.9 1 0 .6-.4 1.5-.6 2.35-.15.7.35 1.25 1.05 1.25 1.25 0 2.2-1.3 2.2-3.2 0-1.65-1.2-2.8-2.9-2.8-1.95 0-3.1 1.45-3.1 3 0 .6.25 1.25.5 1.6.05.08.06.15.04.22-.05.2-.18.75-.2.85-.03.15-.12.18-.25.1-1-.45-1.6-1.9-1.6-3.05 0-2.5 1.8-4.8 5.25-4.8 2.8 0 4.95 2 4.95 4.65 0 2.75-1.75 5-4.15 5-.8 0-1.6-.4-1.85-.9l-.5 1.9c-.2.7-.7 1.6-1.05 2.15.75.25 1.55.35 2.4.35A8 8 0 0 0 12 4z"
        fill="white"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="instaGradFoot" cx="30%" cy="105%" r="130%">
          <stop offset="0%" stopColor="#FFD600" />
          <stop offset="25%" stopColor="#FF6026" />
          <stop offset="50%" stopColor="#FF0069" />
          <stop offset="75%" stopColor="#D300C5" />
          <stop offset="100%" stopColor="#7638FA" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#instaGradFoot)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.6" />
      <circle cx="15.8" cy="8.2" r="0.9" fill="white" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xs ${className}`}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M15.5 13.5l.5-3.5h-3.5V7.8c0-.95.45-1.8 1.9-1.8H16V3.2c-.35-.05-1.5-.15-2.85-.15-2.9 0-4.65 1.75-4.65 4.8V10H5.5v3.5h3V22h4v-8.5h3z"
        fill="white"
      />
    </svg>
  );
}

export function BotanicalSideBranch({ className = "w-24 h-48 text-[#EFB8B0]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main curved branch stem */}
      <path
        d="M20 175C25 140 35 100 45 60C50 40 55 20 60 5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Lower leaves & blossoms */}
      <path
        d="M23 155C12 150 5 140 8 130C15 130 25 140 27 150"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M27 140C38 135 48 132 45 120C38 120 30 128 29 135"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Mid flower buds */}
      <path
        d="M33 115C20 108 15 95 20 85C28 88 33 98 36 108"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M38 95C50 88 58 80 54 68C46 70 40 80 39 90"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {/* Delicate floral petals */}
      <circle cx="12" cy="132" r="5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
      <circle cx="22" cy="88" r="6" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
      <circle cx="56" cy="70" r="5.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
      <circle cx="62" cy="8" r="4.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

