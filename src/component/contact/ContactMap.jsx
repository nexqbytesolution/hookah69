"use client";

import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactMap = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#F4B400]/20 rounded-lg flex items-center justify-center">
          <HiOutlineLocationMarker className="text-xl text-[#F4B400]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Find Us Here</h2>
          <p className="text-white/50 text-sm">Lakeside Road, Pokhara, Nepal</p>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-100 rounded-xl overflow-hidden border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0457235961962!2d85.32162537525535!3d27.746735676160117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e1436a065%3A0x5352e32d2e53c20!2sHookah69!5e0!3m2!1sen!2snp!4v1773681774323!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
        />

        {/* Map Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-linear-to-t from-[#1A2F4B]/80 via-transparent to-transparent pointer-events-none"
        />

        {/* Location Marker */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="relative">
            <div className="w-6 h-6 bg-[#F4B400] rounded-full animate-ping opacity-50"></div>
            <div className="absolute top-0 left-0 w-6 h-6 bg-[#F4B400] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Directions Button */}
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="https://maps.google.com/?q=Lakeside+Pokehara+Nepal"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-[#F4B400] rounded-xl border border-white/10 hover:border-transparent transition-all duration-300 group"
      >
        <HiOutlineLocationMarker className="text-[#F4B400] group-hover:text-[#1A2F4B]" />
        <span className="text-white group-hover:text-[#1A2F4B]">
          Get Directions
        </span>
      </motion.a>
    </div>
  );
};

export default ContactMap;
