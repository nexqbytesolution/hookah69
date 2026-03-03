"use client";

import { motion } from "framer-motion";
import GalleryItem from "./GalleryItem";

const GalleryGrid = ({ items, onItemClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {items.map((item, index) => (
        <GalleryItem
          key={item.id}
          item={item}
          index={index}
          onClick={() => onItemClick(item, index)}
        />
      ))}
    </motion.div>
  );
};

export default GalleryGrid;
