"use client";

import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import PriceCard from "./PriceCard";

const MenuSection = ({ title, items, icon: Icon, isSoup = false }) => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#F4B400]/20 rounded-xl flex items-center justify-center">
          <Icon className="text-2xl text-[#F4B400]" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <div className="w-20 h-1 bg-[#F4B400] rounded-full mt-2"></div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) =>
          isSoup ? (
            <PriceCard key={index} item={item} index={index} />
          ) : (
            <MenuItem key={index} item={item} index={index} />
          ),
        )}
      </div>
    </motion.section>
  );
};

export default MenuSection;
