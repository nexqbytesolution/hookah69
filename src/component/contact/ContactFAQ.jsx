"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineChevronDown,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I make a reservation?",
      answer:
        "You can make a reservation by calling us directly, using the contact form above, or through WhatsApp. For large groups (8+ people), we recommend booking at least 24 hours in advance.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We're open Sunday through Thursday from 4:00 PM to 12:00 AM, and Friday through Saturday from 4:00 PM to 2:00 AM. Happy hours are Monday-Friday from 4:00 PM to 7:00 PM.",
    },
    {
      question: "Do you accept walk-ins?",
      answer:
        "Yes, we welcome walk-ins! However, reservations are recommended for weekends and peak hours to ensure you get your preferred seating.",
    },
    {
      question: "Is there a dress code?",
      answer:
        "We maintain a smart casual dress code. Sportswear, swimwear, and slippers are not permitted. We want everyone to feel comfortable in our premium environment.",
    },
    {
      question: "Do you have parking facilities?",
      answer:
        "Yes, we offer complimentary valet parking for all our guests. There's also public parking available nearby.",
    },
    {
      question: "Can I book for private events?",
      answer:
        "Absolutely! We have VIP sections and can accommodate private parties. Please contact our events team for customized packages.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, mobile payments (eSewa, Khalti), and cash. For corporate events, we can arrange invoicing.",
    },
    {
      question: "Do you serve food?",
      answer:
        "Yes, we offer a variety of small plates, appetizers, and platters perfectly paired with our hookah and beverages. Check out our menu section for details.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-[#F4B400]/20 rounded-xl flex items-center justify-center">
          <HiOutlineQuestionMarkCircle className="text-2xl text-[#F4B400]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-white/50 text-sm">
            Quick answers to common questions
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border border-white/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-white font-medium">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineChevronDown className="text-[#F4B400] text-xl" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 bg-white/5"
                >
                  <p className="text-white/70 text-sm leading-relaxed pt-2">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Still Have Questions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 p-6 bg-linear-to-r from-[#F4B400]/20 to-transparent rounded-xl text-center"
      >
        <p className="text-white/80 mb-3">Still have questions?</p>
        <a
          href="tel:+9779812345678"
          className="inline-flex items-center gap-2 text-[#F4B400] hover:text-white transition-colors"
        >
          <HiOutlinePhone className="text-xl" />
          <span className="font-semibold">Call us directly</span>
        </a>
      </motion.div>
    </div>
  );
};

export default ContactFAQ;
