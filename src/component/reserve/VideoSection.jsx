"use client";

import { motion } from "framer-motion";
import {
  FaBirthdayCake,
  FaHeart,
  FaUsers,
  FaGlassCheers,
  FaStar,
  FaCrown,
  FaMusic,
  FaCamera,
} from "react-icons/fa";
import {
  GiPartyPopper,
  GiBalloons,
  GiFlowerPot,
  GiChampagneCork,
  GiMicrophone,
  GiCakeSlice,
} from "react-icons/gi";
import { FaWhatsapp, FaPhoneAlt, FaBriefcase } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdFamilyRestroom } from "react-icons/md";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Birthday Celebration",
      icon: GiPartyPopper,
      price: "रू 3,999",
      description: "Make your birthday unforgettable with our special package",
      includes: [
        "Premium hookah (2 flavors)",
        "Birthday cake (1 lb)",
        "Decorations (balloons & banner)",
        "Welcome drinks for 4 people",
        "Party poppers & sparklers",
        "Birthday song & photo session",
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      textColor: "text-pink-500",
    },
    {
      id: 2,
      title: "Anniversary Special",
      icon: FaHeart,
      price: "रू 4,999",
      description:
        "Celebrate your love story with our romantic anniversary package",
      includes: [
        "Premium hookah (2 flavors)",
        "Chocolate bouquet",
        "Rose petal decoration",
        "Candle light setup",
        "Complimentary wine (1 bottle)",
        "Romantic playlist",
      ],
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      textColor: "text-red-500",
    },
  ];

  const decorations = [
    {
      id: 1,
      name: "Balloon Decoration",
      icon: GiBalloons,
      price: "रू 1,499",
      description: "Colorful balloon arches and bouquets",
    },
    {
      id: 2,
      name: "Flower Decoration",
      icon: GiFlowerPot,
      price: "रू 2,499",
      description: "Fresh flower arrangements for tables",
    },
    {
      id: 3,
      name: "Cake & Dessert Table",
      icon: GiCakeSlice,
      price: "रू 3,499",
      description: "Beautifully decorated dessert spread",
    },
    {
      id: 4,
      name: "Photo Booth Setup",
      icon: FaCamera,
      price: "रू 2,999",
      description: "Professional photo booth with props",
    },
  ];

  return (
    <section className="py-12 bg-linear-to-b from-[#1A1A1A] to-black rounded-3xl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-[#F4B400]/10 px-4 py-2 rounded-full mb-4 border border-[#F4B400]/30">
            <HiOutlineSparkles className="text-[#F4B400]" />
            <span className="text-[#F4B400] text-sm font-medium">
              Special Occasions
            </span>
            <HiOutlineSparkles className="text-[#F4B400]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Celebrate With <span className="text-[#F4B400]">Hookah69</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Customized packages for every special moment in your life
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isPopular = feature.popular;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative bg-[#1A1A1A] rounded-2xl p-5 border ${feature.borderColor} hover:border-[#F4B400] transition-all duration-300 group overflow-hidden`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-3 right-3 bg-[#F4B400] text-black text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                    <FaStar className="text-xs" /> Most Popular
                  </div>
                )}

                {/* Background linear on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`text-2xl ${feature.textColor}`} />
                  </div>
                  <div className="text-right">
                    <span className={`text-lg font-bold ${feature.textColor}`}>
                      {feature.price}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#F4B400] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-xs mb-3">
                  {feature.description}
                </p>

                {/* Includes List */}
                <div className="space-y-1.5">
                  {feature.includes.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <div
                        className={`w-1 h-1 rounded-full ${feature.textColor}`}
                      />
                      <span className="text-white/60">{item}</span>
                    </div>
                  ))}
                  {feature.includes.length > 4 && (
                    <div className="text-white/30 text-[10px] mt-1">
                      +{feature.includes.length - 4} more items
                    </div>
                  )}
                </div>

                {/* Book Button */}
                <button className="w-full mt-4 py-2 bg-white/5 hover:bg-[#F4B400] rounded-lg text-white hover:text-black text-sm font-medium transition-all duration-300 border border-white/10 hover:border-transparent">
                  Book This Package
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 p-4 bg-linear-to-r from-[#F4B400]/10 to-transparent rounded-xl border border-[#F4B400]/30 text-center"
        >
          <p className="text-white/80 text-sm italic">
            Want something special? We create custom packages for your unique
            celebration!
          </p>
          <button className="mt-2 text-[#F4B400] text-xs font-medium hover:underline">
            Contact us for custom quote →
          </button>
        </motion.div>
        {/* Book via Call Section */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-white/50 text-sm text-center mb-4">
            Or book directly via
          </p>

          <div className="grid grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "tel:+9779812345678")}
              className="py-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPhoneAlt />
              <span>Call Now</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const message = encodeURIComponent(
                  `Hi! I'd like to book a table.\n\nName: ${watchAllFields.name}\nTable: ${watchAllFields.tableNumber}\nDate: ${watchAllFields.date}\nTime: ${watchAllFields.time}\nGuests: ${watchAllFields.guests}`,
                );
                window.open(
                  `https://wa.me/9779849748294?text=${message}`,
                  "_blank",
                );
              }}
              className="py-3 bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              <span>Quick WhatsApp</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
