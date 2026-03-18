"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaUsers,
  FaCrown,
  FaCheckCircle,
  FaRegCircle,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaRing,
  FaGlassCheers,
  FaCamera,
  FaMusic,
  FaWineGlassAlt,
} from "react-icons/fa";
import {
  GiChampagneCork,
  GiBalloons,
  GiFlowerPot,
  GiCakeSlice,
  GiSparkles,
  GiRose,
} from "react-icons/gi";
import { HiOutlineSparkles, HiOutlineGift } from "react-icons/hi";
import { IoMdFlash } from "react-icons/io";
import { MdCelebration, MdRestaurant } from "react-icons/md";

// Constants outside component
const PRICES = {
  guests: { base: 500, perPerson: 200 },
  cake: {
    small: 800,
    medium: 1200,
    large: 1800,
    flavors: {
      chocolate: 0,
      vanilla: 0,
      strawberry: 200,
      blackforest: 300,
      redvelvet: 400,
    },
  },
  decoration: {
    romantic: 3000,
    premium: 5000,
    deluxe: 8000,
  },
  addOns: {
    flowers: 800,
    champagne: 1500,
    photoBooth: 2000,
    musicPlaylist: 500,
    cakeTopper: 300,
    rosePetals: 400,
  },
};

const CAKE_OPTIONS = {
  sizes: [
    { value: "small", label: "Small (1 lb) - Serves 4-6", price: 800 },
    { value: "medium", label: "Medium (2 lb) - Serves 8-10", price: 1200 },
    { value: "large", label: "Large (3 lb) - Serves 12-15", price: 1800 },
  ],
  flavors: [
    { value: "chocolate", label: "Chocolate", price: 0 },
    { value: "vanilla", label: "Vanilla", price: 0 },
    { value: "strawberry", label: "Strawberry", price: 200 },
    { value: "redvelvet", label: "Red Velvet", price: 400 },
    { value: "blackforest", label: "Black Forest", price: 300 },
  ],
};

const DECORATION_PACKAGES = [
  {
    value: "romantic",
    label: "Romantic",
    price: 3000,
    includes: ["Rose petals", "Candle light setup", "Romantic table decor"],
    icon: GiRose,
    color: "red",
  },
  {
    value: "premium",
    label: "Premium",
    price: 5000,
    includes: [
      "Flower arrangement",
      "Photo backdrop",
      "Heart balloons",
      "Candle light setup",
    ],
    icon: GiFlowerPot,
    color: "purple",
  },
  {
    value: "deluxe",
    label: "Deluxe",
    price: 8000,
    includes: [
      "Premium flowers",
      "Custom backdrop",
      "Lighting setup",
      "Rose petal path",
      "Party favors",
      "Dedicated host",
    ],
    icon: FaCrown,
    color: "pink",
  },
];

const ADD_ON_OPTIONS = [
  { value: "flowers", label: "Extra Flowers", price: 800, icon: GiFlowerPot },
  {
    value: "champagne",
    label: "Champagne Bucket",
    price: 1500,
    icon: GiChampagneCork,
  },
  { value: "photoBooth", label: "Photo Booth", price: 2000, icon: FaCamera },
  {
    value: "musicPlaylist",
    label: "Custom Playlist",
    price: 500,
    icon: FaMusic,
  },
  {
    value: "cakeTopper",
    label: "Custom Cake Topper",
    price: 300,
    icon: GiCakeSlice,
  },
  { value: "rosePetals", label: "Rose Petals", price: 400, icon: GiRose },
];

const AnniversaryBook = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      guests: "10",
      cakeSize: "medium",
      cakeFlavor: "redvelvet",
      cakeQuantity: "1",
      decorationPackage: "romantic",
      addOns: [],
      specialRequest: "",
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const formData = watch();

  // Video autoplay handling
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setVideoPlaying(false));
      }
    }
  }, []);

  // Calculate total price
  const totalPrice = (() => {
    let total = 0;
    total +=
      PRICES.guests.base + parseInt(formData.guests) * PRICES.guests.perPerson;

    const cakeSizePrice =
      CAKE_OPTIONS.sizes.find((s) => s.value === formData.cakeSize)?.price || 0;
    const cakeFlavorPrice =
      CAKE_OPTIONS.flavors.find((f) => f.value === formData.cakeFlavor)
        ?.price || 0;
    total +=
      (cakeSizePrice + cakeFlavorPrice) * parseInt(formData.cakeQuantity);

    total += PRICES.decoration[formData.decorationPackage];

    formData.addOns?.forEach((addon) => {
      total += PRICES.addOns[addon] || 0;
    });

    return total;
  })();

  const handleAddOnChange = (value) => {
    const currentAddOns = formData.addOns || [];
    const newAddOns = currentAddOns.includes(value)
      ? currentAddOns.filter((item) => item !== value)
      : [...currentAddOns, value];
    setValue("addOns", newAddOns);
  };

  const onSubmit = (data) => {
    // Format the message for WhatsApp
    const decorationPackage = DECORATION_PACKAGES.find(
      (p) => p.value === data.decorationPackage,
    );
    const cakeSize = CAKE_OPTIONS.sizes.find((s) => s.value === data.cakeSize);
    const cakeFlavor = CAKE_OPTIONS.flavors.find(
      (f) => f.value === data.cakeFlavor,
    );

    const addOnsList = data.addOns
      .map((addon) => ADD_ON_OPTIONS.find((a) => a.value === addon)?.label)
      .filter(Boolean)
      .join(", ");

    const message = `💕 *NEW ANNIVERSARY BOOKING* 💕
    
━━━━━━━━━━━━━━━━━━━
*Event Details*
━━━━━━━━━━━━━━━━━━━
👥 *Guests:* ${data.guests} people
🎂 *Cake:* ${data.cakeQuantity}x ${cakeSize?.label} (${cakeFlavor?.label})
━━━━━━━━━━━━━━━━━━━
*Decoration Package*
━━━━━━━━━━━━━━━━━━━
✨ *Package:* ${decorationPackage?.label}
💰 *Price:* रू ${decorationPackage?.price}
📋 *Includes:* ${decorationPackage?.includes.slice(0, 3).join(", ")}...
━━━━━━━━━━━━━━━━━━━
${
  data.addOns.length > 0
    ? `*Add-ons Selected*
• ${addOnsList.replace(/, /g, "\n• ")}
━━━━━━━━━━━━━━━━━━━\n`
    : ""
}
${
  data.specialRequest
    ? `💭 *Special Request*
${data.specialRequest}
━━━━━━━━━━━━━━━━━━━\n`
    : ""
}
💰 *TOTAL AMOUNT:* रू ${totalPrice}
━━━━━━━━━━━━━━━━━━━

_Booking received from Hookah69 Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9779849748294?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show summary
    setShowSummary(true);

    setTimeout(() => {
      document
        .getElementById("summary-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#1A2F4B] to-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left side - Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-100 rounded-3xl overflow-hidden group shadow-2xl"
          >
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted={videoMuted}
              playsInline
            >
              <source src="/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />
          </motion.div>

          {/* Right side - Header Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Celebrate Your <span className="text-red-500">Love Story</span>
            </h1>
            <p className="text-white/60 text-lg mb-6">
              Create unforgettable memories with our romantic anniversary
              packages
            </p>
          </motion.div>
        </div>

        {/* Main Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Guests Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FaUsers className="text-red-500" /> Guest Details
                </h3>
                <select
                  {...register("guests")}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-red-500 focus:outline-none"
                >
                  {[2, 5, 10, 15, 20, 25, 30, 40, 50].map((num) => (
                    <option key={num} value={num} className="bg-[#1A1A1A]">
                      {num} Guests
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Cake Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GiCakeSlice className="text-red-500" /> Anniversary Cake
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-white/60 text-xs mb-1 block">
                      Size
                    </label>
                    <select
                      {...register("cakeSize")}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white"
                    >
                      {CAKE_OPTIONS.sizes.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1 block">
                      Flavor
                    </label>
                    <select
                      {...register("cakeFlavor")}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    >
                      {CAKE_OPTIONS.flavors.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1 block">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      {...register("cakeQuantity")}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Decoration Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GiRose className="text-red-500" /> Decoration Package
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {DECORATION_PACKAGES.map((pkg) => {
                    const Icon = pkg.icon;
                    const isSelected = formData.decorationPackage === pkg.value;
                    return (
                      <button
                        key={pkg.value}
                        type="button"
                        onClick={() => setValue("decorationPackage", pkg.value)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "bg-red-500/20 border-red-500"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`p-2 rounded-lg ${isSelected ? "bg-red-500" : "bg-white/10"}`}
                          >
                            <Icon
                              className={
                                isSelected ? "text-black" : "text-red-500"
                              }
                            />
                          </div>
                          <div>
                            <span className="text-white font-medium block">
                              {pkg.label}
                            </span>
                            <span className="text-red-500 text-sm">
                              रू {pkg.price}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Add-ons Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <HiOutlineGift className="text-red-500" /> Romantic Add-ons
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {ADD_ON_OPTIONS.map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.addOns?.includes(item.value);
                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => handleAddOnChange(item.value)}
                        className={`flex items-center gap-2 p-3 rounded-lg border text-sm transition-all ${
                          isSelected
                            ? "bg-red-500/20 border-red-500"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {isSelected ? (
                          <FaCheckCircle className="text-red-500" />
                        ) : (
                          <FaRegCircle className="text-white/30" />
                        )}
                        <Icon className="text-red-500" />
                        <span className="text-white/70 text-xs">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Special Request Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <HiOutlineSparkles className="text-red-500" /> Special Request
                </h3>
                <textarea
                  {...register("specialRequest")}
                  rows="3"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-red-500 focus:outline-none"
                  placeholder="Custom cake message, specific colors, romantic requests..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-linear-to-r from-red-500 to-red-600 text-black rounded-xl font-bold text-lg hover:from-red-400 hover:to-red-500 transition-all shadow-lg hover:shadow-red-500/25 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Book via WhatsApp"}
              </motion.button>
            </form>
          </div>

          {/* Price Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-linear-to-b from-[#1A1A1A] to-black rounded-2xl p-6 border border-red-500/20 sticky top-24 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaStar className="text-red-500" /> Price Summary
              </h3>

              <div className="space-y-3 mb-6">
                <PriceRow
                  label="Base + Guests"
                  value={
                    PRICES.guests.base +
                    parseInt(formData.guests) * PRICES.guests.perPerson
                  }
                />
                <PriceRow
                  label="Cake"
                  value={
                    ((CAKE_OPTIONS.sizes.find(
                      (s) => s.value === formData.cakeSize,
                    )?.price || 0) +
                      (CAKE_OPTIONS.flavors.find(
                        (f) => f.value === formData.cakeFlavor,
                      )?.price || 0)) *
                    parseInt(formData.cakeQuantity)
                  }
                />
                <PriceRow
                  label="Decoration"
                  value={PRICES.decoration[formData.decorationPackage]}
                />

                {formData.addOns?.length > 0 && (
                  <PriceRow
                    label={`Add-ons (${formData.addOns.length})`}
                    value={formData.addOns.reduce(
                      (sum, item) => sum + (PRICES.addOns[item] || 0),
                      0,
                    )}
                  />
                )}

                <div className="h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent my-4" />

                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-3xl font-bold text-red-500">
                    रू {totalPrice}
                  </span>
                </div>
              </div>

              <p className="text-white/30 text-xs text-center">
                *Click book to send details via WhatsApp
              </p>
            </div>
          </motion.div>
        </div>

        {/* Summary Section */}
        {showSummary && (
          <motion.div
            id="summary-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-linear-to-r from-red-500/10 to-transparent rounded-2xl border border-red-500/30"
          >
            <h3 className="text-xl font-bold text-white mb-4">Booking Sent!</h3>
            <p className="text-white/60 mb-4">
              Your anniversary booking details have been sent via WhatsApp.
              You&apos;ll receive confirmation shortly.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <SummaryCard label="Guests" value={`${formData.guests} People`} />
              <SummaryCard
                label="Cake"
                value={`${formData.cakeQuantity}x ${formData.cakeFlavor}`}
              />
              <SummaryCard label="Package" value={formData.decorationPackage} />
              <SummaryCard
                label="Add-ons"
                value={formData.addOns?.length.toString() || "0"}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Helper Components
const PriceRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-white/60">{label}:</span>
    <span className="text-white font-medium">रू {value}</span>
  </div>
);

const SummaryCard = ({ label, value }) => (
  <div className="bg-white/5 p-3 rounded-xl">
    <p className="text-white/40 text-xs mb-1">{label}</p>
    <p className="text-white font-medium capitalize text-sm">{value}</p>
  </div>
);

export default AnniversaryBook;
