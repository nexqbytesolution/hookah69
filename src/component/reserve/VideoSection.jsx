"use client";

import { motion } from "framer-motion";
import { FaHeart, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi";
import Link from "next/link";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Birthday Celebration",
      icon: GiPartyPopper,
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
      href: "/reserve/birthday",
    },
    {
      id: 2,
      title: "Anniversary Special",
      icon: FaHeart,
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
      href: "/reserve/anniversary",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-[#1A1A1A] to-black rounded-3xl w-full max-w-5xl mx-auto shadow-2xl">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#F4B400]/10 px-5 py-2.5 rounded-full mb-5 border border-[#F4B400]/30">
            <HiOutlineSparkles className="text-[#F4B400]" />
            <span className="text-[#F4B400] text-sm font-medium tracking-wide">
              Special Occasions
            </span>
            <HiOutlineSparkles className="text-[#F4B400]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Celebrate With <span className="text-[#F4B400]">Hookah69</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Customized packages for every special moment in your life
          </p>
        </motion.div>

        {/* Features List - Vertical Layout */}
        <div className="space-y-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isPopular = feature.popular;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative bg-linear-to-b from-[#1A1A1A] to-[#222222] rounded-2xl p-6 border-2 ${feature.borderColor} hover:border-[#F4B400] transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#F4B400]/10 w-full`}
              >
                {/* Background linear on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Content - Stacked Vertically */}
                <div className="relative space-y-5">
                  {/* Header Row - Icon, Title, Description */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className={`text-3xl ${feature.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F4B400] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-white/50 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                      Package Includes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.includes.slice(0, 4).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-xs bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${feature.textColor}`}
                          />
                          <span className="text-white/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <Link href={feature.href}>
                      <button className="group relative px-6 py-2.5 bg-linear-to-r from-white/5 to-white/10 hover:from-[#F4B400] hover:to-amber-500 rounded-xl text-white hover:text-black font-semibold text-sm transition-all duration-300 border border-white/10 hover:border-transparent shadow-md hover:shadow-lg cursor-pointer overflow-hidden">
                        <span className="relative z-10">Book This Package</span>
                        <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 pt-8 border-t border-white/10"
        >
          <p className="text-white/50 text-sm text-center mb-5">
            Or book directly via
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+9779812345678"
              className="flex-1 py-3.5 bg-linear-to-r from-green-500/20 to-green-500/10 border border-green-500/30 rounded-xl text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-medium"
            >
              <FaPhoneAlt />
              <span>Call Now</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/9779849748294"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 bg-linear-to-r from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-medium"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
