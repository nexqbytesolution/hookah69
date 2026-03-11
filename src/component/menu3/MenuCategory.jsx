"use client";

import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const MenuCategory = ({ title, items, type }) => {
  if (!items || items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 pb-2 border-b border-[#F4B400]/30 inline-block">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} type={type} />
        ))}
      </div>
    </motion.div>
  );
};

export default MenuCategory;
