"use client";

import { motion } from "framer-motion";

const GalleryFilters = ({
  categories,
  activeCategory,
  setActiveCategory,
  totalItems,
}) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="w-1 h-6 bg-[#F4B400] rounded-full"></span>
          Browse Gallery
          <span className="text-white/50 text-sm font-normal ml-2">
            ({totalItems} items)
          </span>
        </h2>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 rounded-lg text-white/70 hover:text-[#F4B400] transition-colors">
            Latest
          </button>
          <button className="px-4 py-2 bg-white/5 rounded-lg text-white/70 hover:text-[#F4B400] transition-colors">
            Popular
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[#F4B400] text-[#1A1A1A] shadow-lg"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <span
                className={`ml-2 text-sm ${isActive ? "text-[#1A1A1A]/70" : "text-white/40"}`}
              >
                ({category.count})
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryFilters;
