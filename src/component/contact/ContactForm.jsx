"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineChatAlt,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = ({ formStatus, setFormStatus }) => {
  const [isSending, setIsSending] = useState(false);

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
      message: "",
    },
  });

  // Watch form values for WhatsApp message
  const formValues = watch();

  const onSubmit = async (data) => {
    setIsSending(true);

    // Format the message
    const message = `📬 *New Message from Hookah69 Website* 📬
    
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}

💭 *Message:*
${data.message}`;

    // Encode for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9779812345678?text=${encodedMessage}`;

    try {
      // Open WhatsApp with the message
      window.open(whatsappUrl, "_blank");

      setFormStatus({
        submitted: true,
        success: true,
        message: "Message opened in WhatsApp! You can now send it.",
      });

      // Reset form after successful send
      reset();

      // Clear status after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: "" });
      }, 5000);
    } catch (error) {
      console.error("WhatsApp error:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "Failed to open WhatsApp. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-[#F4B400]/20 shadow-2xl">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-[#F4B400] rounded-full"></span>
          Send us a Message
        </h3>
        <p className="text-white/50 text-sm">
          We&apos;ll respond via WhatsApp within 24 hours
        </p>
      </div>

      {/* Success/Error Message */}
      <AnimatePresence>
        {formStatus.submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              formStatus.success
                ? "bg-green-500/20 border border-green-500/30"
                : "bg-red-500/20 border border-red-500/30"
            }`}
          >
            {formStatus.success ? (
              <HiOutlineCheckCircle className="text-green-500 text-xl" />
            ) : (
              <HiOutlineXCircle className="text-red-500 text-xl" />
            )}
            <p
              className={
                formStatus.success
                  ? "text-green-500 text-sm"
                  : "text-red-500 text-sm"
              }
            >
              {formStatus.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
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
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className=" text-white/70 text-sm mb-2 flex items-center gap-2">
            <HiOutlineChatAlt className="text-[#F4B400]" /> Your Message *
          </label>
          <textarea
            rows="4"
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
            placeholder="Tell us about your inquiry..."
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
          disabled={isSending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-[#F4B400] text-black rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-white transition-all duration-300"
        >
          {isSending ? (
            <>
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              Opening WhatsApp...
            </>
          ) : (
            <>
              <FaWhatsapp className="text-xl" />
              Send via WhatsApp
            </>
          )}
        </motion.button>

        {/* Privacy Note */}
        <p className="text-white/30 text-xs text-center">
          By submitting this form, you agree to our privacy policy and consent
          to being contacted.
        </p>
      </form>

      {/* Response Time Note */}
      <div className="mt-4 text-center">
        <p className="text-white/30 text-xs flex items-center justify-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          We typically respond within 5-10 minutes
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
