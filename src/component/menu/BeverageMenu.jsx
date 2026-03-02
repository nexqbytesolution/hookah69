"use client";

import { motion } from "framer-motion";
import { FaCoffee, FaGlassWhiskey, FaMugHot } from "react-icons/fa";

const BeverageMenu = ({ data }) => {
  const sections = [
    { title: "Ice Blended", items: data.ice_blended, icon: FaCoffee },
    {
      title: "Coffee Alternatives",
      items: data.coffee_alternatives,
      icon: FaMugHot,
    },
    { title: "Milkshakes", items: data.milkshakes, icon: FaGlassWhiskey },
    { title: "Lassi", items: data.lassi, icon: FaGlassWhiskey },
    { title: "Flavor Tea", items: data.flavor_tea, icon: FaCoffee },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#F4B400]/20 rounded-xl flex items-center justify-center">
          <FaCoffee className="text-2xl text-[#F4B400]" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Beverages
          </h2>
          <div className="w-20 h-1 bg-[#F4B400] rounded-full mt-2"></div>
        </div>
      </div>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-semibold text-[#F4B400] mb-4 flex items-center gap-2">
              <section.icon /> {section.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#1A2F4B] p-3 rounded-lg border border-white/10 hover:border-[#F4B400]/30 transition-all"
                >
                  <div className="text-sm text-white">{item.name}</div>
                  <div className="text-[#F4B400] font-bold mt-1">
                    रू {item.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BeverageMenu;
