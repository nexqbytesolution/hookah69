"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChefCard from "./ChefCard";
import ChefModal from "./ChefModal.jsx";
import {
  HiOutlineSearch,
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const chefsData = [
  {
    id: 6,
    name: "Prithvi Giri",
    position: "Master Chef",
    bio: "Prithvi Giri, 23 Age, from Sindhupalchok, is a highly skilled and passionate culinary professional with Six years of experience in the kitchen, including three years as a chef. Beginning his journey from the ground level, he has worked his way up through dedication, discipline, and continuous learning. Having gained experience across different kitchens and environments, Prithvi has refined his skills and developed a sharp understanding of flavors, presentation, and kitchen management. Known for his creativity, leadership, and commitment to excellence, he consistently delivers high-quality dishes while maintaining top standards. His journey, experience, and professionalism make him a standout and valuable asset to any culinary team.",
    image: "/cheif/cheif2.avif",
    rating: 4.8,
    experience: 6,
    dishes: 107,
    location: "Kathmandu",
    specialty: "Cocktails",
    specialties: ["Craft Cocktails", "Infusions", "Beer Programs"],

    email: "priya@hookah69.com",
    phone: "+977 981-2345683",
  },
  {
    id: 1,
    name: "Suresh Giri",
    position: "Bartender ",
    bio: "Suresh Giri, 21 Age, hailing from Sindhupalchok, is a skilled and passionate hospitality professional with over three years of hands-on experience as both a bartender and barista. Known for his ability to craft quality beverages—ranging from expertly brewed coffee to well-balanced cocktails—he combines creativity with excellent customer service to deliver a memorable experience for every guest. With a strong work ethic and a friendly personality, Suresh consistently brings positive energy to the workplace, making him a valuable addition to any team in the food and beverage industry.",
    image: "/cheif/cheif.jpg",
    rating: 4.8,
    experience: 3,
    dishes: 34,
    location: "Kathmandu",
    specialty: "Fusion Cuisine",
    specialties: ["Hookah Mixology", "Fusion", "Grill", "Sauces"],

    email: "marco@hookah69.com",
    phone: "+977 981-2345678",
  },
  {
    id: 3,
    name: "Krishna Gurung",
    position: "Cook",
    bio: "Krishna Gurung, 21 Aged, from Gorkha, is a dedicated and hardworking culinary professional with three years of experience in the kitchen. Starting his journey as a helper and steadily working his way up to a cook, he has developed strong skills, discipline, and a deep understanding of kitchen operations. Known for his commitment, reliability, and willingness to learn, Krishna consistently delivers quality food while maintaining high standards of hygiene and teamwork. His growth and determination make him a valuable asset to Hookah69.",
    image: "/cheif/cheif2.avif",
    rating: 4.7,
    experience: 3,
    dishes: 89,
    location: "Kathmandu",
    specialty: "Hookah",
    specialties: ["Tobacco Blending", "Fruit Hookahs", "Ice Bases"],

    email: "rajesh@hookah69.com",
    phone: "+977 981-2345680",
  },
  {
    id: 2,
    name: "Shova Gurung",
    position: "Waitress",
    bio: "Shova Gurung, 20 Age, from Lamjung, is a talented and versatile hospitality professional with four years of experience as a waitress. An all-rounder in both service and bar operations, she is skilled at delivering excellent customer service while also assisting in beverage preparation and bar support. Known for her friendly attitude, strong communication skills, and ability to perform efficiently in fast-paced environments, Shova creates a welcoming and enjoyable experience for every guest. Her adaptability, teamwork, and dedication make her a valuable asset to Hookah69.",
    image: "/cheif/cheif2.avif",
    rating: 4.9,
    experience: 4,
    dishes: 5,
    location: "Kathmandu",
    specialty: "Cocktails",
    specialties: ["Relation Management", "Hygiene "],

    email: "sarah@hookah69.com",
    phone: "+977 981-2345679",
  },

  {
    id: 4,
    name: "Sujan Tamang",
    position: "Cook",
    bio: "Sujan Tamang, 21 Aged, from Sindhupalchok, is a passionate and hardworking culinary professional with three years of experience in the kitchen. Starting from the ground level, he has steadily grown through dedication and hands-on learning to become a skilled cook. He has a strong understanding of kitchen operations, food preparation, and maintaining hygiene standards. Known for his discipline, consistency, and eagerness to improve, Sujan brings both energy and commitment to his work, making him a reliable and valuable member of any kitchen team.",
    image: "/cheif/cheif2.avif",
    rating: 4.6,
    experience: 3,
    dishes: 35,
    awards: 4,
    location: "Kathmandu",
    specialty: "Desserts",
    specialties: ["Patisserie", "Plated Desserts", "Chocolate Work"],

    email: "elena@hookah69.com",
    phone: "+977 981-2345681",
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
