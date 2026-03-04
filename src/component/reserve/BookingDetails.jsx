"use client";

import { motion } from "framer-motion";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineCurrencyDollar,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi";
import { FaRegClock, FaRegCreditCard, FaRegBell } from "react-icons/fa";
import { GiHookah, GiCocktail, GiFoodTruck } from "react-icons/gi";

const BookingDetails = ({ bookingData, onConfirm, onCancel }) => {
  // Sample data if no booking provided
  const defaultBooking = {
    tableNumber: "VIP1",
    date: "2024-03-15",
    time: "20:00",
    guests: 4,
    name: "John Doe",
    email: "john@example.com",
    phone: "+977 981-2345678",
    specialRequest: "Window seat preferred, anniversary celebration",
    duration: "3 hours",
    price: "रू 2,500",
    status: "confirmed",
  };

  const data = bookingData || defaultBooking;

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "text-green-500 bg-green-500/10 border-green-500/30";
      case "pending":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case "cancelled":
        return "text-red-500 bg-red-500/10 border-red-500/30";
      default:
        return "text-blue-500 bg-blue-500/10 border-blue-500/30";
    }
  };

  const details = [
    { icon: HiOutlineCalendar, label: "Date", value: formatDate(data.date) },
    { icon: HiOutlineClock, label: "Time", value: data.time },
    {
      icon: HiOutlineUsers,
      label: "Guests",
      value: `${data.guests} ${data.guests === 1 ? "Person" : "People"}`,
    },
    { icon: FaRegClock, label: "Duration", value: data.duration },
    { icon: HiOutlineLocationMarker, label: "Table", value: data.tableNumber },
    {
      icon: HiOutlineCurrencyDollar,
      label: "Minimum Spend",
      value: data.price,
    },
  ];

  const contactInfo = [
    { icon: HiOutlineUser, label: "Name", value: data.name },
    { icon: HiOutlineMail, label: "Email", value: data.email },
    { icon: HiOutlinePhone, label: "Phone", value: data.phone },
  ];

  const amenities = [
    { icon: GiHookah, name: "Premium Hookah", included: true },
    { icon: GiCocktail, name: "Welcome Drink", included: true },
    { icon: GiFoodTruck, name: "Complimentary Platter", included: false },
    { icon: FaRegBell, name: "Personal Butler", included: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-linear-to-br from-[#1A1A1A] to-[#252525] rounded-3xl p-6 border border-[#F4B400]/20 shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-1 h-6 bg-[#F4B400] rounded-full"></span>
            Booking Details
          </h3>
          <p className="text-white/50 text-sm mt-1">Your reservation summary</p>
        </div>

        {/* Status Badge */}
        <div
          className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(data.status)}`}
        >
          {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
        </div>
      </div>

      {/* Table Number Highlight */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-linear-to-r from-[#F4B400]/20 to-transparent rounded-2xl p-4 mb-6 border border-[#F4B400]/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/50 text-xs mb-1">Your Reserved Table</p>
            <p className="text-3xl font-bold text-[#F4B400]">
              {data.tableNumber}
            </p>
          </div>
          <div className="w-12 h-12 bg-[#F4B400] rounded-2xl flex items-center justify-center">
            <HiOutlineLocationMarker className="text-black text-2xl" />
          </div>
        </div>
      </motion.div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {details.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#F4B400]/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="text-[#F4B400] text-sm" />
                <span className="text-white/40 text-xs">{item.label}</span>
              </div>
              <p className="text-white text-sm font-medium">{item.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Contact Information */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-[#F4B400] rounded-full"></span>
          Contact Information
        </h4>
        <div className="space-y-3">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <Icon className="text-[#F4B400]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">{item.label}</p>
                  <p className="text-white">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Special Request */}
      {data.specialRequest && (
        <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
          <p className="text-white/40 text-xs mb-1">Special Request</p>
          <p className="text-white text-sm italic">{data.specialRequest}</p>
        </div>
      )}

      {/* Amenities */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-[#F4B400] rounded-full"></span>
          Amenities Included
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-sm">
                {item.included ? (
                  <HiOutlineCheckCircle className="text-green-500" />
                ) : (
                  <HiOutlineXCircle className="text-white/20" />
                )}
                <span
                  className={item.included ? "text-white" : "text-white/30"}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="mb-6 p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
        <p className="text-blue-400 text-xs flex items-center gap-2">
          <FaRegBell className="text-blue-400" />
          Free cancellation up to 2 hours before booking
        </p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onConfirm}
          className="py-3 bg-[#F4B400] text-black rounded-xl font-medium hover:bg-white transition-all"
        >
          Confirm Booking
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCancel}
          className="py-3 bg-white/5 text-white/70 rounded-xl font-medium hover:bg-white/10 border border-white/10 transition-all"
        >
          Modify
        </motion.button>
      </div>

      {/* Help Text */}
      <p className="text-white/30 text-xs text-center mt-4">
        Need help? Call us at{" "}
        <span className="text-[#F4B400]">+977 981-2345678</span>
      </p>
    </motion.div>
  );
};

export default BookingDetails;
