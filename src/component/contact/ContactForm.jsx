"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineChatAlt,
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = ({ formStatus, setFormStatus }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "reservation",
      date: "",
      time: "",
      guests: "2",
      message: "",
    },
  });

  // Watch form values for WhatsApp message
  const formValues = watch();

  const services = [
    { value: "reservation", label: "Table Reservation" },
    { value: "inquiry", label: "General Inquiry" },
    { value: "feedback", label: "Feedback" },
    { value: "complaint", label: "Complaint" },
    { value: "event", label: "Event Booking" },
    { value: "private", label: "Private Party" },
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you! We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      reset(); // Reset form after successful submission
    }, 2000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to make an inquiry.\n\nName: ${formValues.name}\nService: ${formValues.service}\nMessage: ${formValues.message}`,
    );
    window.open(`https://wa.me/9779812345678?text=${message}`, "_blank");
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-1 h-6 bg-[#F4B400] rounded-full"></span>
            Send us a Message
          </h2>
          <p className="text-white/50 text-sm mt-1">
            We&apos;ll respond within 24 hours
          </p>
        </div>

        {/* WhatsApp Alternative */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 border border-green-500/30"
        >
          <FaWhatsapp className="text-xl" />
          <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
        </motion.button>
      </div>

      {/* Success/Error Message */}
      <AnimatePresence>
        {formStatus.submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              formStatus.success
                ? "bg-green-500/20 border border-green-500/30"
                : "bg-red-500/20 border border-red-500/30"
            }`}
          >
            {formStatus.success ? (
              <HiOutlineCheckCircle className="text-green-500 text-2xl" />
            ) : (
              <HiOutlineXCircle className="text-red-500 text-2xl" />
            )}
            <p
              className={formStatus.success ? "text-green-500" : "text-red-500"}
            >
              {formStatus.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
              <HiOutlineUser className="text-[#F4B400]" /> Your Name *
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
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.name ? "border-red-500" : "border-white/10"
              } rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
              <HiOutlineMail className="text-[#F4B400]" /> Email Address *
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is invalid",
                },
              })}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.email ? "border-red-500" : "border-white/10"
              } rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone and Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
                  message: "Please enter a valid phone number",
                },
              })}
              className={`w-full px-4 py-3 bg-white/5 border ${
                errors.phone ? "border-red-500" : "border-white/10"
              } rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors`}
              placeholder="+977 981-2345678"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
              <HiOutlineChatAlt className="text-[#F4B400]" /> Service Type
            </label>
            <select
              {...register("service")}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            >
              {services.map((service) => (
                <option
                  key={service.value}
                  value={service.value}
                  className="bg-[#1A2F4B]"
                >
                  {service.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date, Time, Guests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
              <HiOutlineCalendar className="text-[#F4B400]" /> Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            />
          </div>

          <div>
            <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
              <HiOutlineClock className="text-[#F4B400]" /> Time
            </label>
            <input
              type="time"
              {...register("time")}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            />
          </div>

          <div>
            <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
              <HiOutlineUsers className="text-[#F4B400]" /> Guests
            </label>
            <select
              {...register("guests")}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors"
            >
              {guestOptions.map((option) => (
                <option key={option} value={option} className="bg-[#1A2F4B]">
                  {option} {option === "1" ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <HiOutlineChatAlt className="text-[#F4B400]" /> Your Message *
          </label>
          <textarea
            rows="5"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            className={`w-full px-4 py-3 bg-white/5 border ${
              errors.message ? "border-red-500" : "border-white/10"
            } rounded-xl text-white focus:outline-none focus:border-[#F4B400] transition-colors resize-none`}
            placeholder="Tell us about your inquiry or reservation details..."
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 bg-[#F4B400] text-[#1A2F4B] rounded-xl font-semibold text-lg flex items-center justify-center gap-3 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-white"
          } transition-all duration-300`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-[#1A2F4B] border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <HiOutlinePaperAirplane className="text-xl" />
              Send Message
            </>
          )}
        </motion.button>

        {/* Privacy Note */}
        <p className="text-white/30 text-xs text-center">
          By submitting this form, you agree to our privacy policy and consent
          to being contacted.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
