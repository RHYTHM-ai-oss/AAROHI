import { Product, Testimonial } from './types';

export const BRAND = {
  name: "Aarohi Collection",
  taglines: [
    "Elegance in Every Step, Luxury in Every Detail.",
    "Empowering Your Style Journey.",
    "Where Sophistication Meets Modern Femininity."
  ],
  storyShort: "Aarohi Collection was born from a vision to blend timeless elegance with modern feminine power. We create more than just accessories; we craft confidence for the urban woman who refuses to compromise on style or quality.",
  storyLong: "Founded on the principles of grace and strength, Aarohi Collection represents the pinnacle of accessible luxury. Our journey began with a simple observation: women deserve fashion that mirrors their ambition. Every handbag and every pair of heels in our collection is meticulously designed to provide not just aesthetic beauty, but a sense of empowerment. We source only the finest materials, ensuring that each piece becomes a lasting companion in your journey towards excellence.",
  usps: [
    { title: "Premium Quality", description: "Handcrafted with the finest materials for lasting elegance.", icon: "ShieldCheck" },
    { title: "Free Delivery", description: "Complimentary shipping on all orders over $150.", icon: "Truck" },
    { title: "Easy Returns", description: "30-day hassle-free return policy for your peace of mind.", icon: "RotateCcw" },
    { title: "Secure Checkout", description: "Your security is our priority with encrypted payments.", icon: "Lock" }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: "b1",
    name: "Midnight Suede Tote",
    category: "bags",
    price: 249,
    originalPrice: 320,
    rating: 4.9,
    reviewCount: 128,
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/1.webp", 
      "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/2.webp"
    ],
    description: "A versatile masterpiece designed for the modern executive. Crafted from premium Italian suede with gold-tone hardware.",
    benefits: ["Spacious interior for 13\" laptop", "Removable shoulder strap", "Interior zip pockets for organization"],
    useCases: ["Office", "Business Travel", "Weekend Brunch"],
    stock: 5,
    isBestSeller: true
  },
  {
    id: "h1",
    name: "Aurelia Gold Stilettos",
    category: "heels",
    price: 189,
    originalPrice: 240,
    rating: 4.8,
    reviewCount: 95,
    images: [
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/1.webp", 
      "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/2.webp"
    ],
    description: "Command attention with the Aurelia. Featuring a sleek 4-inch heel and cushioned insoles for all-night comfort.",
    benefits: ["Ergonomic arch support", "Non-slip sole", "Breathable leather lining"],
    useCases: ["Evening Gala", "Wedding", "Dinner Date"],
    stock: 12,
    isNew: true
  },
  {
    id: "c1",
    name: "The Power Duo: Burgundy Set",
    category: "combos",
    price: 399,
    originalPrice: 550,
    rating: 5.0,
    reviewCount: 42,
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women%27s-leather-bag/1.webp", 
      "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/1.webp"
    ],
    description: "The ultimate style statement. A perfectly matched deep burgundy handbag and coordinating pointed-toe heels.",
    benefits: ["Save $150 compared to individual purchase", "Perfect color matching", "Limited edition seasonal release"],
    useCases: ["Corporate Events", "High-profile Meetings"],
    stock: 3,
    isBestSeller: true
  },
  {
    id: "b2",
    name: "Ivory Pearl Clutch",
    category: "bags",
    price: 159,
    rating: 4.7,
    reviewCount: 64,
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/1.webp"
    ],
    description: "Delicate and sophisticated, this clutch features hand-applied pearl detailing and a silk-lined interior.",
    benefits: ["Detachable chain strap", "Fits all smartphone sizes", "Magnetic closure"],
    useCases: ["Cocktail Party", "Formal Dinner"],
    stock: 20,
    isNew: true
  },
  {
    id: "b3",
    name: "Louis Vuitton Neverfull MM",
    category: "bags",
    price: 2030,
    rating: 4.9,
    reviewCount: 342,
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/1.webp", 
      "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/2.webp"
    ],
    description: "The Neverfull MM tote unites timeless design with heritage details. Elegant in Damier Ebene canvas with natural cowhide trim, it is roomy but not bulky.",
    benefits: ["Spacious interior", "Side laces to change shape", "Removable zipped pouch"],
    useCases: ["Everyday wear", "Travel", "Work"],
    stock: 8,
    isBestSeller: true
  },
  {
    id: "b4",
    name: "Dior Saddle Bag",
    category: "bags",
    price: 4400,
    rating: 4.8,
    reviewCount: 215,
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women%27s-handbag/1.webp", 
      "https://cdn.dummyjson.com/product-images/womens-bags/blue-women%27s-handbag/2.webp"
    ],
    description: "Maria Grazia Chiuri brings a fresh update to the iconic Saddle bag. Crafted in blue Dior Oblique jacquard, the legendary design features a Saddle flap with a magnetic 'D' stirrup clasp.",
    benefits: ["Iconic 'D' stirrup clasp", "CD signature on the strap", "Can be carried by hand or worn over the shoulder"],
    useCases: ["Fashion events", "Evening outings", "Statement piece"],
    stock: 4,
    isNew: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", name: "Sarah J.", rating: 5, comment: "The quality of the Midnight Suede Tote exceeded my expectations. It's my daily work companion now!", image: "https://picsum.photos/seed/user1/100/100" },
  { id: "t2", name: "Elena R.", rating: 5, comment: "Finally, heels that don't hurt after an hour! The Aurelia stilettos are a game changer.", image: "https://picsum.photos/seed/user2/100/100" },
  { id: "t3", name: "Maya W.", rating: 5, comment: "The Burgundy Set is stunning. I get compliments every time I wear it. Worth every penny.", image: "https://picsum.photos/seed/user3/100/100" }
];
