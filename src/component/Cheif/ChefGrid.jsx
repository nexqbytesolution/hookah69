"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChefCard from "./ChefCard";
import ChefModal from "./ChefModal.jsx";
import {
  HiOutlineFilter,
  HiOutlineSearch,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineUserGroup,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

// Sample chef data
export const chefsData = [
  {
    id: 1,
    name: "Marco Bennett",
    position: "Executive Chef",
    bio: "With over 15 years of culinary excellence, Chef Marco specializes in fusion cuisine that blends traditional flavors with modern techniques.",
    image: "/cheif/cheif.jpg",
    rating: 4.8,
    experience: 15,
    dishes: 234,
    awards: 8,
    badge: "Master Chef",
    location: "Pokhara",
    specialty: "Fusion Cuisine",
    specialties: ["Hookah Mixology", "Fusion", "Grill", "Sauces"],
    social: [
      { icon: FaFacebookF, url: "https://facebook.com" },
      { icon: FaInstagram, url: "https://instagram.com" },
      { icon: FaTwitter, url: "https://twitter.com" },
    ],
    email: "marco@hookah69.com",
    phone: "+977 981-2345678",
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Mixology Specialist",
    bio: "Award-winning mixologist known for creating signature cocktails that tell a story. Expert in molecular mixology and flavor pairing.",
    image: "/cheif/cheif2.avif",
    rating: 4.9,
    experience: 10,
    dishes: 156,
    awards: 12,
    badge: "Mixologist of the Year",
    location: "Pokhara",
    specialty: "Cocktails",
    specialties: [
      "Molecular Mixology",
      "Cocktails",
      "Flavor Pairing",
      "Bar Design",
    ],
    social: [
      { icon: FaFacebookF, url: "https://facebook.com" },
      { icon: FaInstagram, url: "https://instagram.com" },
      { icon: FaLinkedinIn, url: "https://linkedin.com" },
    ],
    email: "sarah@hookah69.com",
    phone: "+977 981-2345679",
  },
  {
    id: 3,
    name: "Rajesh Sharma",
    position: "Hookah Master",
    bio: "Master of traditional hookah preparation with a modern twist. Expert in flavor combinations and tobacco blending techniques.",
    image: "/cheif/cheif2.avif",
    rating: 4.7,
    experience: 12,
    dishes: 89,
    awards: 5,
    badge: "Hookah Expert",
    location: "Pokhara",
    specialty: "Hookah",
    specialties: [
      "Tobacco Blending",
      "Fruit Hookahs",
      "Flavor Innovation",
      "Ice Bases",
    ],
    social: [
      { icon: FaFacebookF, url: "https://facebook.com" },
      { icon: FaInstagram, url: "https://instagram.com" },
      { icon: FaTwitter, url: "https://twitter.com" },
    ],
    email: "rajesh@hookah69.com",
    phone: "+977 981-2345680",
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    position: "Pastry Chef",
    bio: "Creative pastry artist who turns desserts into edible art. Specializes in fusion desserts combining Asian and European techniques.",
    image: "/cheif/cheif2.avif",
    rating: 4.6,
    experience: 8,
    dishes: 145,
    awards: 4,
    badge: "Pastry Artist",
    location: "Pokhara",
    specialty: "Desserts",
    specialties: [
      "Patisserie",
      "Plated Desserts",
      "Chocolate Work",
      "Sugar Art",
    ],
    social: [
      { icon: FaInstagram, url: "https://instagram.com" },
      { icon: FaTwitter, url: "https://twitter.com" },
    ],
    email: "elena@hookah69.com",
    phone: "+977 981-2345681",
  },
  {
    id: 5,
    name: "Michael Zhang",
    position: "Sous Chef",
    bio: "Rising star in the culinary world, known for his innovative approach to traditional dishes and exceptional attention to detail.",
    image: "/cheif/cheif2.avif",
    rating: 4.5,
    experience: 6,
    dishes: 98,
    awards: 2,
    location: "Pokhara",
    specialty: "Asian Fusion",
    specialties: ["Asian Fusion", "Wok Cooking", "Dim Sum", "Sushi"],
    social: [
      { icon: FaFacebookF, url: "https://facebook.com" },
      { icon: FaInstagram, url: "https://instagram.com" },
    ],
    email: "michael@hookah69.com",
    phone: "+977 981-2345682",
  },
  {
    id: 6,
    name: "Priya Patel",
    position: "Bar Manager",
    bio: "Expert in craft cocktails and beverage programs. Creates unique drinking experiences with house-made syrups and infusions.",
    image: "/cheif/cheif2.avif",
    rating: 4.8,
    experience: 9,
    dishes: 167,
    awards: 6,
    badge: "Bar Star",
    location: "Pokhara",
    specialty: "Cocktails",
    specialties: [
      "Craft Cocktails",
      "Infusions",
      "Wine Selection",
      "Beer Programs",
    ],
    social: [
      { icon: FaInstagram, url: "https://instagram.com" },
      { icon: FaLinkedinIn, url: "https://linkedin.com" },
    ],
    email: "priya@hookah69.com",
    phone: "+977 981-2345683",
  },
];

const ChefGrid = () => {
  const [selectedChef, setSelectedChef] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const specialties = ["all", "Hookah", "Cocktails", "Desserts", "Grill"];

  // Filter chefs based on specialty and search
  const filteredChefs = chefsData.filter((chef) => {
    const matchesFilter = filter === "all" || chef.specialty === filter;
    const matchesSearch =
      chef.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chef.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chef.bio.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-16 bg-[#1A2F4B]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-3 bg-[#F4B400]/20 rounded-full mb-4"
          >
            <HiOutlineUserGroup className="text-3xl text-[#F4B400]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-[#F4B400]">Culinary Team</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Passionate experts dedicated to creating unforgettable experiences
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search chefs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#F4B400] transition-colors"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Filter */}
            <div className="flex items-center gap-2 bg-white/5 rounded-xl p-1">
              <HiOutlineFilter className="text-white/40 ml-2" />
              {specialties.map((s) => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === s
                      ? "bg-[#F4B400] text-[#1A2F4B]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#F4B400] text-[#1A2F4B]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <HiOutlineViewGrid className="text-xl" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-[#F4B400] text-[#1A2F4B]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <HiOutlineViewList className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Chef Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode + filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredChefs.map((chef) => (
              <ChefCard
                key={chef.id}
                chef={chef}
                variant={viewMode === "grid" ? "default" : "horizontal"}
                onClick={setSelectedChef}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredChefs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No Chefs Found
            </h3>
            <p className="text-white/50">Try adjusting your search or filter</p>
          </motion.div>
        )}

        {/* Chef Modal */}
        <ChefModal
          chef={selectedChef}
          isOpen={!!selectedChef}
          onClose={() => setSelectedChef(null)}
        />
      </div>
    </section>
  );
};

export default ChefGrid;
