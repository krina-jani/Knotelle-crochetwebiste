export interface Category {
  id: string;
  slug: string;
  name: string;
  priceFrom: string;
  image: string;
  itemCount: number;
  description: string;
  featured?: boolean;
}

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    slug: "keychain",
    name: "Keychain",
    priceFrom: "From ₹100 →",
    itemCount: 14,
    description: "Charming miniature crochet keychains and bag charms made with durable cotton yarn.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cat-2",
    slug: "flower",
    name: "Flower",
    priceFrom: "From ₹200 →",
    itemCount: 18,
    description: "Everlasting individual crochet blossoms, sunflowers, tulips, and daisies.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cat-3",
    slug: "bouquet",
    name: "Bouquet",
    priceFrom: "From ₹700 →",
    itemCount: 12,
    description: "Stunning handcrafted flower arrangements that never wilt, wrapped in luxury paper.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cat-4",
    slug: "soft-toys",
    name: "Soft Toys",
    priceFrom: "From ₹1,000 →",
    itemCount: 16,
    description: "Adorable handmade amigurumi plushies, bunnies, bears, and whimsical characters.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cat-5",
    slug: "bags",
    name: "Bags",
    priceFrom: "From ₹4,800 →",
    itemCount: 10,
    description: "Boutique tote bags, granny square totes, shoulder bags, and bohemian market sacks.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cat-6",
    slug: "coin-purse",
    name: "Coin Purse",
    priceFrom: "From ₹250 →",
    itemCount: 8,
    description: "Vintage clasp crochet coin pouches and pocket-sized zippered mini organizers.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cat-7",
    slug: "phone-cover",
    name: "Phone Cover",
    priceFrom: "From ₹1,000 →",
    itemCount: 9,
    description: "Protective and stylish knitted phone sleeves with strap attachments and floral motifs.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cat-8",
    slug: "cup-tea-coffee",
    name: "Cup (Tea/Coffee)",
    priceFrom: "From ₹500 →",
    itemCount: 11,
    description: "Insulating mug cozies, flower cup holders, teapot covers, and table coasters.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cat-9",
    slug: "bookmark",
    name: "Bookmark",
    priceFrom: "From ₹300 →",
    itemCount: 7,
    description: "Delicate botanical sprout, rosebud, and lace crochet bookmarks for avid book lovers.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "cat-10",
    slug: "hair-accessories",
    name: "Hair Accessories",
    priceFrom: "From ₹200 →",
    itemCount: 15,
    description: "Romantic scrunchies, floral hair clips, headband crowns, and bow barrettes.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "cat-11",
    slug: "clothing",
    name: "Clothing",
    priceFrom: "From ₹2,800 →",
    itemCount: 6,
    description: "Bespoke crochet cardigans, summer halter tops, delicate lace collars, and vests.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
];
