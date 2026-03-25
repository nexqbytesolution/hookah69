import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegGem,
  FaWineGlassAlt,
  FaUtensils,
} from "react-icons/fa";
import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineStar,
  HiOutlineFire,
} from "react-icons/hi2";
import {
  TbSmoking,
  TbGlass,
  TbCoffee,
  TbBeer,
  TbBottle,
  TbCookie,
  TbMeat,
  TbPlant,
  TbCrown,
} from "react-icons/tb";

// Premium Menu Data with updated pricing
const menuData = {
  header: {
    title: "HOOKAH",
    subtitle: "69",
    description: "Curated Luxury · Exquisite Flavors · Unforgettable Moments",
    established: "2024",
    tagline: "Where Excellence Meets Experience",
  },

  categories: [
    {
      id: "signature",
      name: "Signature Collection",
      icon: TbCrown,
      description: "Our most prestigious hookah experiences",
      items: [
        {
          name: "Royal Deluxe",
          description:
            "Premium tobacco with fresh seasonal fruits and ice base",
          price: "रू 2,500",
          premium: true,
          notes: "Chef's choice",
        },
        {
          name: "Tropical Paradise",
          description: "Exotic blend of mango, pineapple, and coconut",
          price: "रू 1,800",
          premium: false,
        },
        {
          name: "Mint Symphony",
          description: "Harmonious blend of five premium mint varieties",
          price: "रू 1,500",
          premium: false,
        },
        {
          name: "Berry Fusion",
          description: "Mixed berries with crushed ice base",
          price: "रू 1,700",
          premium: true,
        },
        {
          name: "Classic Double Apple",
          description: "Traditional Middle Eastern premium blend",
          price: "रू 1,200",
          premium: false,
        },
        {
          name: "Pan Raas Exclusive",
          description: "Our signature Indian fusion with gold leaf",
          price: "रू 2,000",
          premium: true,
        },
      ],
    },
    {
      id: "cocktails",
      name: "Artisan Cocktails",
      icon: FaWineGlassAlt,
      description: "Handcrafted liquid art by master mixologists",
      items: [
        {
          name: "Hookah 69 Signature",
          description: "Premium vodka, passion fruit, prosecco, gold dust",
          price: "रू 850",
          premium: true,
        },
        {
          name: "Mountain Mule",
          description: "Vodka, ginger beer, fresh lime, mint",
          price: "रू 750",
          premium: false,
        },
        {
          name: "Sunset Martini",
          description: "London dry gin, vermouth, orange bitters",
          price: "रू 900",
          premium: true,
        },
        {
          name: "Smoky Old Fashioned",
          description: "Bourbon, sugar, smoked with applewood",
          price: "रू 950",
          premium: true,
        },
        {
          name: "Lakeside Mojito",
          description: "Havana rum, mint, lime, soda",
          price: "रू 700",
          premium: false,
        },
        {
          name: "Kathmandu Sunset",
          description: "Tequila, orange, grenadine, champagne",
          price: "रू 800",
          premium: true,
        },
      ],
    },
    {
      id: "mocktails",
      name: "Virgin Creations",
      icon: TbGlass,
      description: "Sophisticated non-alcoholic masterpieces",
      items: [
        {
          name: "Himalayan Sunrise",
          description: "Orange, pineapple, grenadine, soda",
          price: "रू 450",
        },
        {
          name: "Mint Cooler",
          description: "Fresh mint, lime, ginger ale, cucumber",
          price: "रू 400",
        },
        {
          name: "Berry Blast",
          description: "Mixed berries, yogurt, honey, mint",
          price: "रू 500",
        },
        {
          name: "Cucumber Delight",
          description: "Cucumber, lime, soda, rosemary",
          price: "रू 420",
        },
        {
          name: "Passion Punch",
          description: "Passion fruit, orange, sprite, lime",
          price: "रू 480",
        },
        {
          name: "Blue Lagoon",
          description: "Blue curacao syrup, lemonade, sprite",
          price: "रू 520",
        },
      ],
    },
    {
      id: "appetizers",
      name: "Gourmet Small Plates",
      icon: FaUtensils,
      description: "Perfect pairings for your premium experience",
      items: [
        {
          name: "Truffle Nachos",
          description: "Tortilla chips, truffle cheese, jalapeños, salsa",
          price: "रू 650",
          premium: true,
        },
        {
          name: "Peri-Peri Wings",
          description: "6 pcs with house special sauce",
          price: "रू 700",
        },
        {
          name: "Falafel Platter",
          description: "House-made falafel, hummus, pita, tahini",
          price: "रू 550",
          veg: true,
        },
        {
          name: "Artisan Cheese Board",
          description: "International cheeses, nuts, honey, fruits",
          price: "रू 950",
          premium: true,
        },
        {
          name: "Spring Rolls",
          description: "Vegetable spring rolls with sweet chili dip",
          price: "रू 450",
          veg: true,
        },
        {
          name: "Truffle Wedges",
          description: "Crispy potato wedges with truffle aioli",
          price: "रू 400",
          veg: true,
        },
      ],
    },
    {
      id: "desserts",
      name: "Decadent Desserts",
      icon: TbCookie,
      description: "Sweet endings to perfection",
      items: [
        {
          name: "Molten Lava Cake",
          description: "Warm chocolate cake with vanilla bean ice cream",
          price: "रू 450",
        },
        {
          name: "New York Cheesecake",
          description: "Creamy cheesecake with berry compote",
          price: "रू 500",
        },
        {
          name: "Crème Brûlée",
          description: "Classic vanilla bean custard with caramelized sugar",
          price: "रू 550",
          premium: true,
        },
        {
          name: "Seasonal Fruit Platter",
          description: "Fresh imported and local fruits",
          price: "रू 400",
          veg: true,
        },
      ],
    },
    {
      id: "beverages",
      name: "Premium Hot Beverages",
      icon: TbCoffee,
      description: "Finest brews and blends",
      items: [
        {
          name: "Single Origin Espresso",
          description: "100% Arabica beans",
          price: "रू 200",
        },
        {
          name: "Velvet Cappuccino",
          description: "With chocolate art",
          price: "रू 250",
        },
        {
          name: "Masala Chai",
          description: "Traditional spiced tea",
          price: "रू 180",
        },
        {
          name: "Belgian Hot Chocolate",
          description: "With marshmallows and cream",
          price: "रू 280",
        },
      ],
    },
  ],

  specials: [
    {
      name: "VIP Gold Experience",
      description:
        "Premium hookah with fresh fruits, ice base, and gold flakes",
      price: "रू 3,500",
      original: "रू 4,000",
    },
    {
      name: "Champagne Bucket",
      description: "Premium champagne with fruit garnishes",
      price: "रू 2,200",
      original: "रू 2,800",
    },
    {
      name: "Royal Couple's Night",
      description: "Any hookah + 2 signature cocktails + platter",
      price: "रू 2,800",
      original: "रू 3,500",
    },
  ],

  hours: [
    { day: "Sunday - Thursday", time: "4:00 PM - 12:00 AM" },
    { day: "Friday - Saturday", time: "4:00 PM - 2:00 AM" },
  ],

  contact: {
    phone: "+977 981-2345678",
    email: "concierge@hookah69.com",
    address: "Greenland Chowk, Kathmandu, Nepal",
  },
};

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1928] text-[#F5F0E8]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-125 w-full">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/public/hookah/hookan1.jpg"
            alt="Luxury Lounge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0A1928]/90 via-[#0A1928]/70 to-[#0A1928]"></div>
        </div>

        {/* Header Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="mb-4">
            <span className="text-[#C5A059] text-sm tracking-[0.3em] uppercase flex items-center gap-2">
              <HiOutlineSparkles className="text-[#C5A059]" />
              Established {menuData.header.established}
              <HiOutlineSparkles className="text-[#C5A059]" />
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wide">
            <span className="text-[#F5F0E8]">{menuData.header.title}</span>
            <span className="text-[#C5A059] font-bold ml-3">
              {menuData.header.subtitle}
            </span>
          </h1>

          <p className="text-[#F5F0E8]/70 text-lg max-w-2xl mb-6">
            {menuData.header.description}
          </p>

          <p className="text-[#C5A059] text-sm italic">
            {menuData.header.tagline}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[#C5A059]/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#C5A059] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Today's Specials Banner */}
      <section className="relative -mt-20 z-10 container mx-auto px-4">
        <div className="bg-linear-to-r from-[#C5A059] to-[#B38F4A] rounded-2xl p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#0A1928]/20 p-4 rounded-full">
                <FaRegGem className="text-3xl text-[#F5F0E8]" />
              </div>
              <div>
                <h3 className="text-3xl font-light text-[#0A1928]">
                  Royal Offers
                </h3>
                <p className="text-[#0A1928]/70">Exclusive for tonight</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {menuData.specials.map((special, index) => (
                <div
                  key={index}
                  className="bg-[#0A1928]/20 px-6 py-3 rounded-full backdrop-blur-sm"
                >
                  <span className="text-sm font-light text-[#0A1928]">
                    {special.name}
                  </span>
                  <span className="ml-3 text-[#0A1928]/50 line-through text-xs">
                    {special.original}
                  </span>
                  <span className="ml-3 text-[#F5F0E8] font-bold">
                    {special.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Menu */}
      <section className="py-28 container mx-auto px-4">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {menuData.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-[#1A2938] hover:bg-[#C5A059] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-500"
            >
              <category.icon className="text-[#C5A059] group-hover:text-[#0A1928] text-lg" />
              <span className="text-[#F5F0E8]/80 group-hover:text-[#0A1928] font-light">
                {category.name}
              </span>
            </a>
          ))}
        </div>

        {/* Menu Sections */}
        <div className="space-y-28">
          {menuData.categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28"
            >
              {/* Category Header */}
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto">
                    <category.icon className="text-3xl text-[#C5A059]" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-[#F5F0E8] mb-3">
                  {category.name}
                </h2>
                <p className="text-[#C5A059]/70 text-sm max-w-2xl mx-auto">
                  {category.description}
                </p>
                <div className="w-24 h-0.5 bg-[#C5A059]/30 mx-auto mt-6"></div>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#1A2938] hover:bg-[#1F2E40] rounded-2xl p-8 border border-[#C5A059]/10 hover:border-[#C5A059]/30 transition-all duration-500 relative overflow-hidden"
                  >
                    {/* Premium Badge */}
                    {item.premium && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#C5A059] text-[#0A1928] text-xs px-3 py-1 rounded-full font-light">
                          Premium
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-light text-[#F5F0E8] group-hover:text-[#C5A059] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[#C5A059] font-light text-lg">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-[#F5F0E8]/50 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#C5A059]/10">
                      {item.popular && (
                        <span className="text-xs px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] rounded-full flex items-center gap-1">
                          <HiOutlineFire /> Most Popular
                        </span>
                      )}
                      {item.veg && (
                        <span className="text-xs px-3 py-1 bg-green-500/10 text-green-400 rounded-full flex items-center gap-1">
                          <TbPlant /> Vegetarian
                        </span>
                      )}
                      {item.notes && (
                        <span className="text-xs text-[#C5A059]/50">
                          {item.notes}
                        </span>
                      )}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 border-2 border-[#C5A059]/0 group-hover:border-[#C5A059]/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-linear-to-t from-[#0A1928] to-[#1A2938] py-20 border-t border-[#C5A059]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Hours */}
            <div className="text-center md:text-left">
              <h3 className="text-[#C5A059] font-light mb-6 flex items-center justify-center md:justify-start gap-2 text-lg">
                <FaClock className="text-[#C5A059]" /> Opening Hours
              </h3>
              {menuData.hours.map((item, idx) => (
                <div key={idx} className="text-[#F5F0E8]/60 mb-3">
                  <span>{item.day}:</span>
                  <span className="ml-3 text-[#F5F0E8]">{item.time}</span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-[#C5A059] font-light mb-6 flex items-center justify-center gap-2 text-lg">
                <FaPhone className="text-[#C5A059]" /> Concierge
              </h3>
              <p className="text-[#F5F0E8]/60 mb-2">{menuData.contact.phone}</p>
              <p className="text-[#F5F0E8]">{menuData.contact.email}</p>
            </div>

            {/* Location */}
            <div className="text-center md:text-right">
              <h3 className="text-[#C5A059] font-light mb-6 flex items-center justify-center md:justify-end gap-2 text-lg">
                <FaMapMarkerAlt className="text-[#C5A059]" /> Location
              </h3>
              <p className="text-[#F5F0E8]/60">{menuData.contact.address}</p>
              <div className="flex justify-center md:justify-end gap-6 mt-6">
                <FaFacebookF className="text-[#F5F0E8]/40 hover:text-[#C5A059] cursor-pointer transition-colors text-xl" />
                <FaInstagram className="text-[#F5F0E8]/40 hover:text-[#C5A059] cursor-pointer transition-colors text-xl" />
                <FaTwitter className="text-[#F5F0E8]/40 hover:text-[#C5A059] cursor-pointer transition-colors text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Hours Banner */}
      <section className="py-16 bg-[#C5A059]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-light text-[#0A1928] mb-4">
            Golden Hours
          </h3>
          <p className="text-xl text-[#0A1928]/80 mb-4">
            Monday - Friday | 4:00 PM - 7:00 PM
          </p>
          <p className="text-[#0A1928] font-light text-lg max-w-2xl mx-auto">
            50% OFF on selected hookah flavors · Buy 1 Get 1 on signature
            cocktails
          </p>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-8 text-center bg-[#0A1928]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#F5F0E8]/40 hover:text-[#C5A059] transition-colors font-light"
        >
          ← Return to Home
        </Link>
      </div>
    </div>
  );
};

export default MenuPage;
