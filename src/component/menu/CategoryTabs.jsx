"use client";

import { motion } from "framer-motion";

const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "bg-[#F4B400] text-[#1A1A1A] shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Icon className="text-lg" />
              <span className="font-medium">{category.name}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-[#F4B400] -z-10"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
