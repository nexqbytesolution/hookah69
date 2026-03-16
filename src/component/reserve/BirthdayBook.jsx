"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBirthdayCake,
  FaStar,
  FaUsers,
  FaCrown,
  FaCheckCircle,
  FaRegCircle,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import {
  GiPartyPopper,
  GiBalloons,
  GiCakeSlice,
  GiChampagneCork,
  GiSparkles,
  GiFlowerPot,
} from "react-icons/gi";
import { HiOutlineSparkles, HiOutlineGift } from "react-icons/hi";
import { IoMdFlash } from "react-icons/io";
import { MdCelebration } from "react-icons/md";

const BirthdayBook = () => {
  const [formData, setFormData] = useState({
    guests: "10",
    cakeSize: "medium",
    cakeFlavor: "chocolate",
    cakeQuantity: "1",
    decorationPackage: "basic",
    addOns: [],
    specialRequest: "",
  });

  const [showSummary, setShowSummary] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef(null);

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

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoMuted;
      setVideoMuted(!videoMuted);
    }
  };

  // Price configurations
  const prices = {
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
      basic: 2000,
      premium: 4000,
      deluxe: 7000,
    },
    addOns: {
      balloons: 500,
      confetti: 300,
      champagne: 1200,
      photoBooth: 2000,
      partyPoppers: 400,
      cakeTopper: 300,
    },
  };

  const cakeOptions = {
    sizes: [
      { value: "small", label: "Small (1 lb) - Serves 4-6", price: 800 },
      { value: "medium", label: "Medium (2 lb) - Serves 8-10", price: 1200 },
      { value: "large", label: "Large (3 lb) - Serves 12-15", price: 1800 },
    ],
    flavors: [
      { value: "chocolate", label: "Chocolate", price: 0 },
      { value: "vanilla", label: "Vanilla", price: 0 },
      { value: "strawberry", label: "Strawberry", price: 200 },
      { value: "blackforest", label: "Black Forest", price: 300 },
      { value: "redvelvet", label: "Red Velvet", price: 400 },
    ],
  };

  const decorationPackages = [
    {
      value: "basic",
      label: "Basic",
      price: 2000,
      includes: ["Balloon arch", "Birthday banner", "Table confetti"],
      icon: GiBalloons,
      color: "blue",
    },
    {
      value: "premium",
      label: "Premium",
      price: 4000,
      includes: [
        "Balloon arch",
        "Flower arrangement",
        "Photo backdrop",
        "Themed setup",
      ],
      icon: FaCrown,
      color: "purple",
    },
    {
      value: "deluxe",
      label: "Deluxe",
      price: 7000,
      includes: [
        "Premium balloons",
        "Fresh flowers",
        "Custom backdrop",
        "Lighting setup",
        "Party favors",
        "Dedicated host",
      ],
      icon: GiSparkles,
      color: "pink",
    },
  ];

  const addOnOptions = [
    {
      value: "balloons",
      label: "Extra Balloons",
      price: 500,
      icon: GiBalloons,
    },
    {
      value: "confetti",
      label: "Confetti Cannons",
      price: 300,
      icon: MdCelebration,
    },
    {
      value: "champagne",
      label: "Champagne Bucket",
      price: 1200,
      icon: GiChampagneCork,
    },
    {
      value: "photoBooth",
      label: "Photo Booth",
      price: 2000,
      icon: HiOutlineGift,
    },
    {
      value: "partyPoppers",
      label: "Party Poppers",
      price: 400,
      icon: GiPartyPopper,
    },
    {
      value: "cakeTopper",
      label: "Custom Cake Topper",
      price: 300,
      icon: GiCakeSlice,
    },
  ];

  // Calculate total price
  const totalPrice = useMemo(() => {
    let total = 0;
    total +=
      prices.guests.base + parseInt(formData.guests) * prices.guests.perPerson;

    const cakeSizePrice =
      cakeOptions.sizes.find((s) => s.value === formData.cakeSize)?.price || 0;
    const cakeFlavorPrice =
      cakeOptions.flavors.find((f) => f.value === formData.cakeFlavor)?.price ||
      0;
    total +=
      (cakeSizePrice + cakeFlavorPrice) * parseInt(formData.cakeQuantity);

    total += prices.decoration[formData.decorationPackage];

    formData.addOns.forEach((addon) => {
      total += prices.addOns[addon] || 0;
    });

    return total;
  }, [
    formData,
    cakeOptions.flavors,
    cakeOptions.sizes,
    prices.addOns,
    prices.decoration,
    prices.guests.base,
    prices.guests.perPerson,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const decorationPackage = decorationPackages.find(
      (p) => p.value === formData.decorationPackage,
    );
    const cakeSize = cakeOptions.sizes.find(
      (s) => s.value === formData.cakeSize,
    );
    const cakeFlavor = cakeOptions.flavors.find(
      (f) => f.value === formData.cakeFlavor,
    );

    const addOnsList = formData.addOns
      .map((addon) => addOnOptions.find((a) => a.value === addon)?.label)
      .filter(Boolean)
      .join(", ");

    const message = `🎂 *NEW BIRTHDAY BOOKING* 🎂
    
━━━━━━━━━━━━━━━━━━━
*Event Details*
━━━━━━━━━━━━━━━━━━━
👥 *Guests:* ${formData.guests} people
🎂 *Cake:* ${cakeQuantity}x ${cakeSize?.label} (${cakeFlavor?.label})
━━━━━━━━━━━━━━━━━━━
*Decoration Package*
━━━━━━━━━━━━━━━━━━━
✨ *Package:* ${decorationPackage?.label}
💰 *Price:* रू ${decorationPackage?.price}
📋 *Includes:* ${decorationPackage?.includes.slice(0, 3).join(", ")}...
━━━━━━━━━━━━━━━━━━━
${
  formData.addOns.length > 0
    ? `*Add-ons Selected*
• ${addOnsList.replace(/, /g, "\n• ")}
━━━━━━━━━━━━━━━━━━━\n`
    : ""
}
${
  formData.specialRequest
    ? `💭 *Special Request*
${formData.specialRequest}
━━━━━━━━━━━━━━━━━━━\n`
    : ""
}
💰 *TOTAL AMOUNT:* रू ${totalPrice}
━━━━━━━━━━━━━━━━━━━

_Booking received from Hookah69 Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9779812345678?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show summary
    setShowSummary(true);
    setIsSubmitting(false);

    setTimeout(() => {
      document
        .getElementById("summary-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleAddOnChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(value)
        ? prev.addOns.filter((item) => item !== value)
        : [...prev.addOns, value],
    }));
  };

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
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

            {/* Video Badge */}
            <div className="absolute top-4 left-4 bg-pink-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-black text-sm font-medium flex items-center gap-2">
                <FaBirthdayCake /> Birthday Special
              </span>
            </div>
          </motion.div>

          {/* Right side - Header Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Plan Your <span className="text-pink-500">Birthday</span>
            </h1>
            <p className="text-white/60 text-lg mb-6">
              Customize every detail of your special day with our premium
              packages
            </p>
          </motion.div>
        </div>

        {/* Main Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guests Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FaUsers className="text-pink-500" /> Guest Details
                </h3>
                <select
                  value={formData.guests}
                  onChange={(e) => updateFormData("guests", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-pink-500 focus:outline-none"
                >
                  {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((num) => (
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
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GiCakeSlice className="text-pink-500" /> Cake Selection
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-white/60 text-xs mb-1 block">
                      Size
                    </label>
                    <select
                      value={formData.cakeSize}
                      onChange={(e) =>
                        updateFormData("cakeSize", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white"
                    >
                      {cakeOptions.sizes.map((opt) => (
                        <option
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-pink-500 focus:outline-none"
                          key={opt.value}
                          value={opt.value}
                        >
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
                      value={formData.cakeFlavor}
                      onChange={(e) =>
                        updateFormData("cakeFlavor", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white"
                    >
                      {cakeOptions.flavors.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-pink-500 focus:outline-none"
                        >
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
                      value={formData.cakeQuantity}
                      onChange={(e) =>
                        updateFormData("cakeQuantity", e.target.value)
                      }
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
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GiSparkles className="text-pink-500" /> Decoration Package
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {decorationPackages.map((pkg) => {
                    const Icon = pkg.icon;
                    const isSelected = formData.decorationPackage === pkg.value;
                    return (
                      <button
                        key={pkg.value}
                        type="button"
                        onClick={() =>
                          updateFormData("decorationPackage", pkg.value)
                        }
                        className={`p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "bg-pink-500/20 border-pink-500"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`p-2 rounded-lg ${isSelected ? "bg-pink-500" : "bg-white/10"}`}
                          >
                            <Icon
                              className={
                                isSelected ? "text-black" : "text-pink-500"
                              }
                            />
                          </div>
                          <div>
                            <span className="text-white font-medium block">
                              {pkg.label}
                            </span>
                            <span className="text-pink-500 text-sm">
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
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <HiOutlineGift className="text-pink-500" /> Add-ons
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {addOnOptions.map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.addOns.includes(item.value);
                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => handleAddOnChange(item.value)}
                        className={`flex items-center gap-2 p-3 rounded-lg border text-sm transition-all ${
                          isSelected
                            ? "bg-pink-500/20 border-pink-500"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {isSelected ? (
                          <FaCheckCircle className="text-pink-500" />
                        ) : (
                          <FaRegCircle className="text-white/30" />
                        )}
                        <Icon className="text-pink-500" />
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
                className="bg-[#1A1A1A] rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <HiOutlineSparkles className="text-pink-500" /> Special
                  Request
                </h3>
                <textarea
                  value={formData.specialRequest}
                  onChange={(e) =>
                    updateFormData("specialRequest", e.target.value)
                  }
                  rows="3"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-pink-500 focus:outline-none"
                  placeholder="Custom cake message, specific colors, etc."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-linear-to-r from-pink-500 to-pink-600 text-black rounded-xl font-bold text-lg hover:from-pink-400 hover:to-pink-500 transition-all shadow-lg hover:shadow-pink-500/25 disabled:opacity-50"
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
            <div className="bg-linear-to-b from-[#1A1A1A] to-black rounded-2xl p-6 border border-pink-500/20 sticky top-24 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FaStar className="text-pink-500" /> Price Summary
              </h3>

              <div className="space-y-3 mb-6">
                <PriceRow
                  label="Base + Guests"
                  value={
                    prices.guests.base +
                    parseInt(formData.guests) * prices.guests.perPerson
                  }
                />
                <PriceRow
                  label="Cake"
                  value={
                    ((cakeOptions.sizes.find(
                      (s) => s.value === formData.cakeSize,
                    )?.price || 0) +
                      (cakeOptions.flavors.find(
                        (f) => f.value === formData.cakeFlavor,
                      )?.price || 0)) *
                    parseInt(formData.cakeQuantity)
                  }
                />
                <PriceRow
                  label="Decoration"
                  value={prices.decoration[formData.decorationPackage]}
                />

                {formData.addOns.length > 0 && (
                  <PriceRow
                    label={`Add-ons (${formData.addOns.length})`}
                    value={formData.addOns.reduce(
                      (sum, item) => sum + (prices.addOns[item] || 0),
                      0,
                    )}
                  />
                )}

                <div className="h-px bg-linear-to-r from-transparent via-pink-500/50 to-transparent my-4" />

                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-3xl font-bold text-pink-500">
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
            className="mt-8 p-6 bg-linear-to-r from-pink-500/10 to-transparent rounded-2xl border border-pink-500/30"
          >
            <h3 className="text-xl font-bold text-white mb-4">Booking Sent!</h3>
            <p className="text-white/60 mb-4">
              Your booking details have been sent via WhatsApp. You&apos;ll
              receive confirmation shortly.
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
                value={formData.addOns.length.toString()}
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

export default BirthdayBook;
