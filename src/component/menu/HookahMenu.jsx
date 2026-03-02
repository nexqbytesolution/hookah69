"use client";

import { motion } from "framer-motion";
import { FaFire, FaLeaf } from "react-icons/fa";

const HookahMenu = ({ data }) => {
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
          <FaFire className="text-2xl text-[#F4B400]" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Hookah</h2>
          <div className="w-20 h-1 bg-[#F4B400] rounded-full mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Flavors */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-semibold text-[#F4B400] mb-6 flex items-center gap-2">
            <FaLeaf /> Classic Flavors
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {data.flavors.map((flavor, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-[#1A2F4B] p-4 rounded-xl border border-white/10 hover:border-[#F4B400]/30 transition-all"
              >
                <span className="text-white">{flavor}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specials */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#F4B400]/20 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#F4B400]/30"
        >
          <h3 className="text-2xl font-semibold text-[#F4B400] mb-6 flex items-center gap-2">
            <FaFire /> Signature Specials
          </h3>
          <div className="space-y-6">
            {data.specials.map((special, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-4 bg-[#1A2F4B]/50 rounded-xl border border-white/10"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {special.name}
                  </h4>
                  {special.price && (
                    <span className="text-[#F4B400] font-bold">
                      रू {special.price}
                    </span>
                  )}
                </div>
                <p className="text-white/60 text-sm">{special.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HookahMenu;
