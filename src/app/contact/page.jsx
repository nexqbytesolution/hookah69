"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactHero from "@/component/contact/ContactHero";
import ContactInfo from "@/component/contact/ContactInfo";
import ContactForm from "@/component/contact/ContactForm";
import ContactMap from "@/component/contact/ContactMap";
import ContactSocial from "@/component/contact/ContactSocial";
import ContactFAQ from "@/component/contact/ContactFAQ";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  return (
    <main className="min-h-screen bg-[#1A2F4B] text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F4B400 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <ContactHero />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <ContactInfo />
            <ContactSocial />
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ContactForm
              formStatus={formStatus}
              setFormStatus={setFormStatus}
            />
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <ContactMap />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <ContactFAQ />
        </motion.div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#F4B400] text-[#1A2F4B] rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors z-50"
      >
        ↑
      </motion.button>
    </main>
  );
};

export default ContactPage;
