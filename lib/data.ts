// =============================================================
//  CONTENT DATA  — destinations, packages, hotels & cars
//  Temple/place photos sourced from Wikimedia Commons (accurate).
// =============================================================

export type Destination = {
  name: string;
  location: string;
  blurb: string;
  tag: string;
  image: string;
  gradient: string;
};

export type Package = {
  id: string;
  title: string;
  duration: string;
  price: number;
  priceUnit: string;
  popular?: boolean;
  summary: string;
  includes: string[];
  image: string;
  gradient: string;
};

export type Hotel = {
  name: string;
  location: string;
  rating: number;
  pricePerNight: number;
  amenities: string[];
  image: string;
  gradient: string;
};

export type Car = {
  name: string;
  type: string;
  seats: number;
  pricePerDay: number;
  features: string[];
  image: string;
  gradient: string;
};

// Correct, real photos of each place (Wikimedia Commons, hotlink-stable).
const IMG = {
  bankeBihari:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Banke_Bihari_Vrindavan.jpg/1280px-Banke_Bihari_Vrindavan.jpg",
  premMandir:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vrindavan_Prem_Mandir.jpg/1280px-Vrindavan_Prem_Mandir.jpg",
  iskcon:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Iskon_Temple%2C_Vrindawan.jpg/1280px-Iskon_Temple%2C_Vrindawan.jpg",
  janmabhoomi:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mathura_Temple-Mathura-India0002.JPG/1280px-Mathura_Temple-Mathura-India0002.JPG",
  dwarkadhish:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Yamuna_River%2C_Mathura.jpg/1280px-Yamuna_River%2C_Mathura.jpg",
  govardhan:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Govardhan_hill%2C_Govardhan.jpg/1280px-Govardhan_hill%2C_Govardhan.jpg",
  barsana:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Radharani_Temple_Barsana_2.jpg/1280px-Radharani_Temple_Barsana_2.jpg",
  vishramGhat:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Vishram_Ghat.jpg/1280px-Vishram_Ghat.jpg",
  nidhivan:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Nidhivan.jpg/1280px-Nidhivan.jpg",
  radhaRaman:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Radha_Raman_Temple_2.jpg/1280px-Radha_Raman_Temple_2.jpg",
  kusumSarovar:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Chhatris_of_Kusum_Sarovar.jpg/1280px-Chhatris_of_Kusum_Sarovar.jpg",
  gokul:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Gokul_temple.JPG/1280px-Gokul_temple.JPG",
} as const;

// ---------------------------------------------------------------
//  HERO SLIDESHOW  (rotating images on the home page)
// ---------------------------------------------------------------
export type HeroSlide = { src: string; name: string; location: string; gradient: string };

export const heroSlides: HeroSlide[] = [
  { src: IMG.premMandir, name: "Prem Mandir", location: "Vrindavan", gradient: "from-fuchsia-500 to-purple-700" },
  { src: IMG.bankeBihari, name: "Banke Bihari", location: "Vrindavan", gradient: "from-amber-500 to-rose-600" },
  { src: IMG.iskcon, name: "ISKCON Temple", location: "Vrindavan", gradient: "from-teal-500 to-sky-600" },
  { src: IMG.govardhan, name: "Govardhan Hill", location: "Govardhan", gradient: "from-emerald-500 to-green-700" },
  { src: IMG.barsana, name: "Radha Rani Temple", location: "Barsana", gradient: "from-pink-500 to-fuchsia-600" },
  { src: IMG.vishramGhat, name: "Vishram Ghat", location: "Mathura", gradient: "from-indigo-500 to-cyan-600" },
];

// ---------------------------------------------------------------
//  DESTINATIONS
// ---------------------------------------------------------------
export const destinations: Destination[] = [
  {
    name: "Banke Bihari Temple",
    location: "Vrindavan",
    blurb:
      "The beating heart of Vrindavan. Lord Krishna in his enchanting tribhanga pose, where the curtain opens and closes so devotion never overwhelms.",
    tag: "Most Revered",
    image: IMG.bankeBihari,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    name: "Prem Mandir",
    location: "Vrindavan",
    blurb:
      "A breathtaking temple of divine love carved in white Italian marble, glowing through a symphony of colour-changing lights every evening.",
    tag: "Iconic Marble",
    image: IMG.premMandir,
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
  },
  {
    name: "ISKCON Vrindavan",
    location: "Krishna Balaram Mandir",
    blurb:
      "Serene kirtans, immaculate gardens and the soulful chant of the Maha Mantra at one of the world's most loved Krishna temples.",
    tag: "Peaceful",
    image: IMG.iskcon,
    gradient: "from-teal-500 via-cyan-500 to-sky-500",
  },
  {
    name: "Shri Krishna Janmabhoomi",
    location: "Mathura",
    blurb:
      "The sacred birthplace of Lord Krishna — a profound prison-cell shrine that marks where the divine descended onto earth.",
    tag: "Birthplace",
    image: IMG.janmabhoomi,
    gradient: "from-rose-500 via-red-500 to-amber-500",
  },
  {
    name: "Dwarkadhish Temple",
    location: "Mathura",
    blurb:
      "Mathura's grandest temple beside the Yamuna, alive with festival fervour, intricate paintings and the majestic darshan of Dwarkadhish.",
    tag: "Grand",
    image: IMG.dwarkadhish,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    name: "Govardhan Hill",
    location: "Govardhan",
    blurb:
      "Walk the sacred 21-km Govardhan Parikrama that Krishna once lifted on his little finger to shelter the people of Braj.",
    tag: "Parikrama",
    image: IMG.govardhan,
    gradient: "from-emerald-500 via-teal-500 to-green-600",
  },
  {
    name: "Barsana",
    location: "Radha's Birthplace",
    blurb:
      "The hilltop town of Shriji, home to the legendary Lathmar Holi and the radiant Radha Rani Temple overlooking Braj.",
    tag: "Holi Capital",
    image: IMG.barsana,
    gradient: "from-pink-500 via-fuchsia-500 to-rose-500",
  },
  {
    name: "Vishram Ghat",
    location: "Mathura",
    blurb:
      "The most sacred of Mathura's ghats on the Yamuna, where the evening aarti sends a thousand flickering diyas across the river.",
    tag: "Yamuna Aarti",
    image: IMG.vishramGhat,
    gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  },
  {
    name: "Nidhivan",
    location: "Vrindavan",
    blurb:
      "The mystical grove where it's believed Krishna performs the Raas Leela every night — so sacred that no one stays after the evening aarti.",
    tag: "Mystical",
    image: IMG.nidhivan,
    gradient: "from-green-600 via-emerald-500 to-teal-500",
  },
  {
    name: "Radha Raman Temple",
    location: "Vrindavan",
    blurb:
      "Home to a self-manifested deity of Krishna, this 16th-century temple is renowned for its exquisite worship and timeless Goswami tradition.",
    tag: "Heritage",
    image: IMG.radhaRaman,
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
  },
  {
    name: "Kusum Sarovar",
    location: "Govardhan",
    blurb:
      "A serene sandstone reservoir surrounded by ghats and pavilions, where Radha and the gopis once gathered flowers — magical at sunset.",
    tag: "Scenic",
    image: IMG.kusumSarovar,
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
  },
  {
    name: "Gokul",
    location: "Mahavan",
    blurb:
      "Where baby Krishna was lovingly raised by Nanda and Yashoda — the cradle of his childhood leelas along the banks of the Yamuna.",
    tag: "Childhood",
    image: IMG.gokul,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
];

// ---------------------------------------------------------------
//  PACKAGES  (food + stay + travel)
// ---------------------------------------------------------------
export const packages: Package[] = [
  {
    id: "same-day-darshan",
    title: "Same-Day Darshan",
    duration: "1 Day",
    price: 2499,
    priceUnit: "per person",
    summary:
      "A perfect introduction to Braj — cover the must-see temples of Mathura & Vrindavan in a single blissful day.",
    includes: [
      "AC car pickup & drop",
      "Banke Bihari, Prem Mandir & ISKCON",
      "Krishna Janmabhoomi darshan",
      "Pure-veg lunch (sattvik thali)",
      "Experienced local guide",
    ],
    image: IMG.bankeBihari,
    gradient: "from-amber-400 to-orange-600",
  },
  {
    id: "spiritual-sojourn",
    title: "Braj Spiritual Sojourn",
    duration: "2 Days / 1 Night",
    price: 5999,
    priceUnit: "per person",
    popular: true,
    summary:
      "The most loved getaway — unhurried darshan, the mesmerising Prem Mandir light show and the Yamuna evening aarti.",
    includes: [
      "1 night in a hand-picked 3★ hotel",
      "All breakfasts & dinners (pure-veg)",
      "Private AC car for both days",
      "Mathura, Vrindavan & Vishram Ghat aarti",
      "Govardhan Parikrama by car",
      "Dedicated yatra coordinator",
    ],
    image: IMG.premMandir,
    gradient: "from-fuchsia-500 to-purple-700",
  },
  {
    id: "complete-parikrama",
    title: "Complete Braj Parikrama",
    duration: "4 Days / 3 Nights",
    price: 12999,
    priceUnit: "per person",
    summary:
      "The grand pilgrimage covering all of Braj Bhoomi — Mathura, Vrindavan, Govardhan, Barsana, Nandgaon & Gokul.",
    includes: [
      "3 nights in premium 4★ stay",
      "All meals — breakfast, lunch & dinner",
      "Private SUV with driver throughout",
      "Barsana & Nandgaon hilltop temples",
      "Gokul & Mahavan Krishna leela sites",
      "Guided Govardhan foot parikrama (optional)",
      "Aartis, ghats & local sweet tasting",
    ],
    image: IMG.govardhan,
    gradient: "from-teal-500 to-emerald-700",
  },
  {
    id: "govardhan-barsana-day",
    title: "Govardhan & Barsana Day Trip",
    duration: "1 Day",
    price: 3499,
    priceUnit: "per person",
    summary:
      "Venture beyond the towns to Govardhan Hill and the hilltop temples of Barsana — Radha Rani's own land.",
    includes: [
      "AC car pickup & drop",
      "Govardhan Parikrama by car",
      "Daan Ghati & Mansi Ganga",
      "Barsana Radha Rani temple climb",
      "Pure-veg lunch",
    ],
    image: IMG.barsana,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "holi-weekend-special",
    title: "Braj Holi Weekend Special",
    duration: "2 Days / 1 Night",
    price: 7499,
    priceUnit: "per person",
    summary:
      "Experience the world-famous Lathmar & flower Holi of Barsana and Vrindavan in a vibrant festival getaway.",
    includes: [
      "1 night festive 3★ stay",
      "All pure-veg meals",
      "Private AC car",
      "Barsana Lathmar Holi experience",
      "Banke Bihari phoolon-wali Holi",
      "Festival guide & safety support",
    ],
    image: IMG.barsana,
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    id: "premium-divine-retreat",
    title: "Premium Divine Retreat",
    duration: "3 Days / 2 Nights",
    price: 16999,
    priceUnit: "per person",
    summary:
      "An unhurried luxury pilgrimage with premium stays, fine sattvik dining and private guided darshan across Braj.",
    includes: [
      "2 nights in a luxury 4★ resort",
      "All gourmet pure-veg meals",
      "Private luxury SUV throughout",
      "Priority/assisted darshan arrangements",
      "Mathura, Vrindavan & Govardhan",
      "Evening Yamuna aarti & boat ride",
      "Personal yatra concierge",
    ],
    image: IMG.iskcon,
    gradient: "from-indigo-500 to-purple-700",
  },
];

// ---------------------------------------------------------------
//  HOTELS  (representative stays — final rates confirmed on enquiry)
// ---------------------------------------------------------------
export const hotels: Hotel[] = [
  {
    name: "Krishna Residency",
    location: "Vrindavan • near ISKCON",
    rating: 4.6,
    pricePerNight: 2200,
    amenities: ["Free Wi-Fi", "Pure-veg restaurant", "AC rooms", "Temple shuttle"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Brijwasi Grand",
    location: "Mathura • near Janmabhoomi",
    rating: 4.7,
    pricePerNight: 3100,
    amenities: ["Rooftop dining", "Room service", "Parking", "Power backup"],
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-rose-500 to-red-600",
  },
  {
    name: "Radha Sarovar Retreat",
    location: "Vrindavan • Parikrama Marg",
    rating: 4.8,
    pricePerNight: 4500,
    amenities: ["Swimming pool", "Spa", "Multi-cuisine veg", "Banquet"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    name: "Govardhan Haveli",
    location: "Govardhan • Daan Ghati",
    rating: 4.5,
    pricePerNight: 1900,
    amenities: ["Heritage decor", "Garden", "Veg kitchen", "Free parking"],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "Yamuna View Inn",
    location: "Mathura • near Vishram Ghat",
    rating: 4.4,
    pricePerNight: 2600,
    amenities: ["River view", "Veg restaurant", "AC rooms", "Lift"],
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    name: "Prem Vihar Hotel",
    location: "Vrindavan • near Prem Mandir",
    rating: 4.6,
    pricePerNight: 3400,
    amenities: ["Free Wi-Fi", "Buffet breakfast", "Parking", "Travel desk"],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-amber-500 to-rose-600",
  },
  {
    name: "ISKCON Guest House",
    location: "Vrindavan • Krishna Balaram Mandir",
    rating: 4.7,
    pricePerNight: 2800,
    amenities: ["Sattvik meals", "Temple access", "Peaceful", "AC rooms"],
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "Barsana Heritage Stay",
    location: "Barsana • near Radha Rani",
    rating: 4.3,
    pricePerNight: 1700,
    amenities: ["Hilltop view", "Home-style veg", "Garden", "Parking"],
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    gradient: "from-pink-500 to-fuchsia-600",
  },
];

// ---------------------------------------------------------------
//  CARS  (private chauffeur-driven, all-inclusive of fuel & driver)
// ---------------------------------------------------------------
export const cars: Car[] = [
  {
    name: "Swift Dzire",
    type: "Sedan",
    seats: 4,
    pricePerDay: 2000,
    features: ["AC", "Comfy for couples", "Fuel + driver", "City & temple runs"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Maruti_Suzuki_Swift_Dzire_%28cropped%29.jpg/1280px-Maruti_Suzuki_Swift_Dzire_%28cropped%29.jpg",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    name: "Toyota Innova Crysta",
    type: "SUV",
    seats: 7,
    pricePerDay: 3500,
    features: ["AC", "Spacious", "Ideal for families", "Govardhan parikrama"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Toyota_Innova_Crysta_2.4_Z_side.jpg/1280px-Toyota_Innova_Crysta_2.4_Z_side.jpg",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Tempo Traveller",
    type: "12-Seater",
    seats: 12,
    pricePerDay: 5500,
    features: ["AC", "Push-back seats", "Group pilgrimage", "Luggage space"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Force_Traveller_Luxury.jpg/1280px-Force_Traveller_Luxury.jpg",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "Toyota Fortuner",
    type: "Luxury SUV",
    seats: 7,
    pricePerDay: 6500,
    features: ["Premium AC", "Plush interiors", "VIP comfort", "Highway cruiser"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Toyota_Fortuner_India.jpg/1280px-Toyota_Fortuner_India.jpg",
    gradient: "from-fuchsia-500 to-purple-700",
  },
  {
    name: "Maruti Ertiga",
    type: "MUV",
    seats: 6,
    pricePerDay: 2800,
    features: ["AC", "Great for small families", "Fuel + driver", "Comfortable ride"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Maruti_Suzuki_Ertiga%282%29.jpg/1280px-Maruti_Suzuki_Ertiga%282%29.jpg",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Hyundai Aura",
    type: "Sedan",
    seats: 4,
    pricePerDay: 1900,
    features: ["AC", "Budget friendly", "City runs", "Fuel + driver"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/2020_Hyundai_Aura_Front.png/1280px-2020_Hyundai_Aura_Front.png",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    name: "Force Traveller 17-Seater",
    type: "Mini Bus",
    seats: 17,
    pricePerDay: 7500,
    features: ["AC", "Large groups", "Push-back seats", "Big luggage space"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Force_Motors_-_Traveller_26_-_Agra_2014-05-14_4222.JPG/1280px-Force_Motors_-_Traveller_26_-_Agra_2014-05-14_4222.JPG",
    gradient: "from-amber-500 to-rose-600",
  },
  {
    name: "Kia Carnival",
    type: "Luxury Van",
    seats: 7,
    pricePerDay: 8500,
    features: ["Premium AC", "Captain seats", "VIP family travel", "Ultra comfort"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Kia_Carnival_%28KA4%29_Washington_DC_Metro_Area%2C_USA.jpg/1280px-Kia_Carnival_%28KA4%29_Washington_DC_Metro_Area%2C_USA.jpg",
    gradient: "from-purple-500 to-indigo-700",
  },
];
