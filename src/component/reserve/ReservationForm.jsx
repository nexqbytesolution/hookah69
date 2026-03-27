"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineChatAlt,
  HiOutlineSparkles,
  HiOutlineGift,
} from "react-icons/hi";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaBirthdayCake,
  FaHeart,
  FaBriefcase,
  FaGlassCheers,
} from "react-icons/fa";
import { GiPartyPopper, GiMusicalNotes } from "react-icons/gi";
import { useState } from "react";

const ReservationForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      tableNumber: "",
      eventType: "casual",
      specialRequest: "",
    },
  });

  const tableNumbers = [
    "T1",
    "T2",
    "T3",
    "T4",
    "VIP1",
    "VIP2",
    "VIP3",
    "OUT1",
    "OUT2",
  ];

  const eventTypes = [
    { value: "casual", label: "Casual Hangout", icon: FaGlassCheers },
    { value: "birthday", label: "Birthday Celebration", icon: FaBirthdayCake },
    { value: "anniversary", label: "Anniversary", icon: FaHeart },
    { value: "business", label: "Business Meeting", icon: FaBriefcase },
    { value: "party", label: "Private Party", icon: GiPartyPopper },
    { value: "live_music", label: "Live Music Night", icon: GiMusicalNotes },
  ];

  // Watch form values
  const watchAllFields = watch();

  // Get tomorrow's date for min date validation
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Get max date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  const onSubmit = async (data) => {
    setIsSending(true);
    setSendStatus("sending");

    // Format the message
    const eventTypeLabel =
      eventTypes.find((e) => e.value === data.eventType)?.label ||
      data.eventType;

    const message = `🔔 *New Table Reservation* 🔔
    
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}
🎯 *Event Type:* ${eventTypeLabel}
🪑 *Table:* ${data.tableNumber}
📅 *Date:* ${data.date}
⏰ *Time:* ${data.time}
👥 *Guests:* ${data.guests}

${data.specialRequest ? `💭 *Special Request:*\n${data.specialRequest}` : ""}

_Booking received from Hookah69 Website_`;

    // Encode for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9779849748294?text=${encodedMessage}`;

    try {
      // Open WhatsApp with the message
      window.open(whatsappUrl, "_blank");

      setSendStatus("success");

      // Reset form after 2 seconds
      setTimeout(() => {
        // Reset all fields
        setValue("name", "");
        setValue("email", "");
        setValue("phone", "");
        setValue("date", "");
        setValue("time", "");
        setValue("guests", "2");
        setValue("tableNumber", "");
        setValue("eventType", "casual");
        setValue("specialRequest", "");

        setSendStatus("");
      }, 2000);
    } catch (error) {
      console.error("WhatsApp error:", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1A1A1A] rounded-3xl p-8 border border-[#F4B400]/20 shadow-2xl"
    >
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-[#F4B400] rounded-full"></span>
          Reserve Your Table
        </h3>
        <p className="text-white/50 text-sm">
          Fill in the details and we&apos;ll send your booking via WhatsApp
        </p>
      </div>

      {/* Status Message */}
      {sendStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
        >
          <HiOutlineSparkles className="text-green-500 text-xl" />
          <p className="text-green-500 text-sm">
            Booking request sent via WhatsApp! You can now send the message.
          </p>
        </motion.div>
      )}

      {sendStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center gap-3"
        >
          <HiOutlineSparkles className="text-red-500 text-xl" />
          <p className="text-red-500 text-sm">
            Failed to open WhatsApp. Please try again or call directly.
          </p>
        </motion.div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Table Selection */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#F4B400] rounded-full"></span>
            Select Table Number *
          </label>
          <div className="grid grid-cols-3 gap-2">
            {tableNumbers.map((table) => (
              <button
                key={table}
                type="button"
                onClick={() => setValue("tableNumber", table)}
                className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                  watch("tableNumber") === table
                    ? "bg-[#F4B400] text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                }`}
              >
                {table}
              </button>
            ))}
          </div>
          {errors.tableNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.tableNumber.message}
            </p>
          )}
        </div>

        {/* Event Type Selection */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <HiOutlineGift className="text-[#F4B400]" /> Event Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            {eventTypes.map((event) => {
              const Icon = event.icon;
              const isSelected = watch("eventType") === event.value;
              return (
                <button
                  key={event.value}
                  type="button"
                  onClick={() => setValue("eventType", event.value)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#F4B400] text-black"
                      : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <Icon
                    className={isSelected ? "text-black" : "text-[#F4B400]"}
                  />
                  <span className="truncate">{event.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Name */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <HiOutlineUser className="text-[#F4B400]" /> Full Name *
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <HiOutlineMail className="text-[#F4B400]" /> Email Address *
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <HiOutlinePhone className="text-[#F4B400]" /> Phone Number *
          </label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/,
                message: "Invalid phone number",
              },
            })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            placeholder="+977 981-2345678"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
              <HiOutlineCalendar className="text-[#F4B400]" /> Date *
            </label>
            <input
              type="date"
              min={minDate}
              max={maxDateStr}
              {...register("date", {
                required: "Date is required",
                validate: {
                  notPast: (value) => {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return selectedDate >= today || "Cannot select past dates";
                  },
                },
              })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
            )}
          </div>
          <div>
            <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
              <HiOutlineClock className="text-[#F4B400]" /> Time *
            </label>
            <input
              type="time"
              min="10:00"
              max="22:00"
              {...register("time", { required: "Time is required" })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            />
            {errors.time && (
              <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
            )}
            <p className="text-white/30 text-xs mt-1">
              Open: 10:00 AM - 22:00 PM
            </p>
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <HiOutlineUsers className="text-[#F4B400]" /> Number of Guests *
          </label>
          <select
            {...register("guests", {
              required: "Please select number of guests",
            })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num} className="bg-[#1A1A1A]">
                {num} {num === 1 ? "Guest" : "Guests"}
              </option>
            ))}
            <option value="10+" className="bg-[#1A1A1A]">
              10+ (Private Event)
            </option>
          </select>
          {errors.guests && (
            <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>
          )}
        </div>

        {/* Special Request */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <HiOutlineChatAlt className="text-[#F4B400]" /> Special Request
            (Optional)
          </label>
          <textarea
            {...register("specialRequest")}
            rows="3"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors resize-none"
            placeholder="Any special requirements? (Allergies, decorations, cake, etc.)"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSending || !watch("tableNumber")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 bg-[#F4B400] text-black rounded-xl font-semibold text-lg flex items-center justify-center gap-3 ${
            isSending || !watch("tableNumber")
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-white"
          } transition-all duration-300`}
        >
          {isSending ? (
            <>
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              Opening WhatsApp...
            </>
          ) : (
            <>
              <FaWhatsapp className="text-xl" />
              Confirm via WhatsApp
            </>
          )}
        </motion.button>
      </form>

      {/* Table Availability Note */}
      <div className="mt-4 text-center">
        <p className="text-white/30 text-xs flex items-center justify-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Tables available for booking
        </p>
        <p className="text-white/20 text-xs mt-1">
          Bookings accepted up to 3 months in advance
        </p>
      </div>
    </motion.div>
  );
};

export default ReservationForm;
