"use client";

import { motion } from "framer-motion";

const PriceCard = ({ item, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#F4B400]/30 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-3">{item.name}</h3>

      {item.options && (
        <div className="flex flex-wrap gap-3 mb-4">
          {item.options.map((opt, idx) => (
            <span
              key={idx}
              className="text-sm text-white/70 bg-white/10 px-3 py-1 rounded-full"
            >
              {opt}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4">
        {item.price_small && (
          <div className="flex-1 text-center p-3 bg-[#1A2F4B] rounded-lg">
            <span className="text-xs text-white/50">Small</span>
            <p className="text-[#F4B400] font-bold">रू {item.price_small}</p>
          </div>
        )}
        {item.price_large && (
          <div className="flex-1 text-center p-3 bg-[#1A2F4B] rounded-lg">
            <span className="text-xs text-white/50">Large</span>
            <p className="text-[#F4B400] font-bold">रू {item.price_large}</p>
          </div>
        )}
        {item.price && !item.price_small && (
          <div className="flex-1 text-center p-3 bg-[#1A2F4B] rounded-lg">
            <p className="text-[#F4B400] font-bold text-xl">रू {item.price}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PriceCard;
