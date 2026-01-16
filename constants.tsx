
import React from 'react';
import { CakeCollectionItem, TestimonialItem, CategoryItem } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Specials', href: '#specials' },
  { name: 'Menu', href: '#menu' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#cta' },
];

export const CAKE_TYPES = ['Birthday Cake', 'Wedding Cake', 'Anniversary Cake', 'Custom Theme', 'Cupcakes Bundle'];
export const FLAVORS = ['Classic Vanilla', 'Double Chocolate', 'Red Velvet', 'Salted Caramel', 'Lemon Zest', 'Strawberry Swirl'];
export const SIZES = ['Small (6")', 'Medium (8")', 'Large (10")', 'Extra Large (12")'];

export const SPECIALS: CakeCollectionItem[] = [
  {
    id: 1,
    name: "Midnight Velvet",
    price: "Rs. 5,500",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=600&h=800&fit=crop"
    ],
    category: "Signature",
    description: "A deep, luxurious cocoa-infused sponge with a hint of espresso, layered with silky smooth cream cheese frosting and a dark chocolate ganache drip.",
    ingredients: ["Belgian Cocoa", "Espresso", "Cream Cheese", "Dark Ganache"]
  },
  {
    id: 2,
    name: "Golden Orchard",
    price: "Rs. 8,200",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464347601390-2ff68d8f5f6e?q=80&w=600&h=800&fit=crop"
    ],
    category: "Limited",
    description: "Celebrating the harvest with honey-glazed apple layers, salted caramel filling, and a crown of fresh autumn berries and edible gold leaf.",
    ingredients: ["Honey Apples", "Salted Caramel", "Gold Leaf", "Autumn Berries"]
  },
  {
    id: 3,
    name: "Cloud Dream",
    price: "Rs. 4,800",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518047601542-79f18c655718?q=80&w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505976378723-9726af549c4d?q=80&w=600&h=800&fit=crop"
    ],
    category: "Classic",
    description: "Light as air vanilla chiffon cake with whipped mascarpone cream and Madagascar vanilla bean infusion. Simple, elegant, and perfectly balanced.",
    ingredients: ["Madagascar Vanilla", "Mascarpone", "Chiffon", "Organic Milk"]
  },
  {
    id: 4,
    name: "Berries & Bloom",
    price: "Rs. 9,500",
    image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=600&h=800&fit=crop"
    ],
    category: "Signature",
    description: "Our garden-inspired masterpiece featuring fresh seasonal berries, hand-pressed floral petals, and a zesty lemon curd filling between vanilla layers.",
    ingredients: ["Seasonal Berries", "Lemon Curd", "Edible Flowers", "Vanilla Bean"]
  }
];

export const ALL_MENU_ITEMS: CakeCollectionItem[] = [
  // Birthday Cakes
  {
    id: 101,
    name: "Classic Funfetti",
    price: "Rs. 3,500",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Birthday Cakes",
    description: "Colorful sprinkles baked into a moist vanilla sponge.",
    ingredients: ["Sprinkles", "Vanilla Bean", "Buttercream"]
  },
  {
    id: 102,
    name: "Chocolate Overload",
    price: "Rs. 4,200",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Birthday Cakes",
    description: "Triple chocolate sponge with dark chocolate fudge frosting.",
    ingredients: ["Cacao", "Fudge", "Chocolate Chips"]
  },
  {
    id: 103,
    name: "Pastel Dream",
    price: "Rs. 3,800",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Birthday Cakes",
    description: "Soft pastel-toned ombré frosting on a fluffy strawberry base.",
    ingredients: ["Strawberry", "Cream Cheese", "Vanilla"]
  },
  {
    id: 104,
    name: "Cookie Monster",
    price: "Rs. 4,500",
    image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Birthday Cakes",
    description: "Loaded with chocolate chip cookies and blue vanilla cream.",
    ingredients: ["Cookies", "Milk Chocolate", "Vanilla"]
  },
  // Wedding Cakes
  {
    id: 201,
    name: "Royal Ivory Tier",
    price: "Rs. 25,000",
    image: "https://images.unsplash.com/photo-1522661089900-d466478c563e?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Wedding Cakes",
    description: "Elegant 3-tier cake with hand-crafted sugar flowers.",
    ingredients: ["Fondant", "Vanilla", "Rose Essence"]
  },
  {
    id: 202,
    name: "Ethereal Lace",
    price: "Rs. 18,500",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Wedding Cakes",
    description: "Intricate edible lace patterns on smooth white chocolate.",
    ingredients: ["White Chocolate", "Lace Stencil", "Gold Pearl"]
  },
  {
    id: 203,
    name: "Golden Elegance",
    price: "Rs. 32,000",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Wedding Cakes",
    description: "4-tier masterpiece with gold leaf and edible pearl draping.",
    ingredients: ["Gold Leaf", "Vanilla Bean", "Champagne Cream"]
  },
  // Custom Cakes
  {
    id: 301,
    name: "Galaxy Dream",
    price: "Rs. 6,800",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Custom Cakes",
    description: "A cosmic mirror-glaze cake with nebulous swirls.",
    ingredients: ["Mirror Glaze", "Edible Glitter", "Blueberry"]
  },
  {
    id: 302,
    name: "Floral Gardenia",
    price: "Rs. 5,900",
    image: "https://images.unsplash.com/photo-1519340241574-246a77bf676e?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Custom Cakes",
    description: "Topped with fresh seasonal flowers and botanicals.",
    ingredients: ["Fresh Blooms", "Honey", "Lemon Sponge"]
  },
  {
    id: 303,
    name: "Rustic Woodland",
    price: "Rs. 7,200",
    image: "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Custom Cakes",
    description: "Textured bark-like frosting with edible moss and chocolate branches.",
    ingredients: ["Chocolate Bark", "Pistachio Moss", "Hazelnut"]
  },
  // Cupcakes & Desserts
  {
    id: 401,
    name: "Red Velvet Mini",
    price: "Rs. 1,800",
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Cupcakes & Desserts",
    description: "Set of 6 premium red velvet cupcakes with cream cheese.",
    ingredients: ["Cocoa", "Cream Cheese", "Buttermilk"]
  },
  {
    id: 402,
    name: "Macaron Box",
    price: "Rs. 2,400",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Cupcakes & Desserts",
    description: "Assorted French macarons (dozen).",
    ingredients: ["Almond Flour", "Ganache", "Fruit Jam"]
  },
  {
    id: 403,
    name: "Lemon Drizzle Bars",
    price: "Rs. 1,500",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Cupcakes & Desserts",
    description: "Tangy lemon bars with a buttery shortbread crust.",
    ingredients: ["Zesty Lemon", "Shortbread", "Powdered Sugar"]
  },
  {
    id: 404,
    name: "Double Choc Brownies",
    price: "Rs. 2,100",
    image: "https://images.unsplash.com/photo-1543218191-03c4b721de72?q=80&w=400&h=400&fit=crop",
    gallery: [],
    category: "Cupcakes & Desserts",
    description: "Fudgy brownies made with 70% dark Belgian chocolate.",
    ingredients: ["Dark Chocolate", "Walnuts", "Cane Sugar"]
  }
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 1,
    title: "Birthday Cakes",
    description: "Celebrate another year in Lahore with joy and sweetness.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=600&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Wedding Cakes",
    description: "Elegant tiers for your grand Pakistani wedding day.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb80d?q=80&w=600&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Custom Cakes",
    description: "Personalized designs for every Karachi celebration.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=600&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Cupcakes & Desserts",
    description: "Bite-sized moments of pure happiness, delivered in Islamabad.",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=600&h=600&fit=crop"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Event Planner, Lahore",
    text: "Caklora created the most stunning wedding cake for my client's Barat. Not only was it a work of art, but the flavor was exquisite!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=ayesha"
  },
  {
    id: 2,
    name: "Zain Ahmed",
    role: "Karachi Resident",
    text: "The custom birthday cake for my daughter's first birthday was perfect. Every detail of the design was exactly as requested. Highly recommend!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=zain"
  },
  {
    id: 3,
    name: "Fatima Ali",
    role: "Food Blogger, Islamabad",
    text: "Artisanal quality and incredible taste. Their Red Velvet is honestly the best I've ever had in Pakistan. Truly premium ingredients.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=fatima"
  }
];
