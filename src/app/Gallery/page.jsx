"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GalleryHero from "@/component/gallery/GalleryHero";
import GalleryFilters from "@/component/gallery/GalleryFilters";
import GalleryGrid from "@/component/gallery/GalleryGrid";
import Lightbox from "@/component/gallery/Lightbox";
import { galleryData } from "@/component/gallery/GalleryData";
import Image from "next/image";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter items based on category
  const filteredItems =
    activeCategory === "all"
      ? galleryData.items
      : galleryData.items.filter((item) => item.category === activeCategory);

  const featuredItems = galleryData.items.filter((item) => item.featured);

  const handleItemClick = (item, index) => {
    setCurrentItem(item);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIndex);
    setCurrentItem(filteredItems[newIndex]);
  };

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setCurrentItem(filteredItems[newIndex]);
  };

  return (
    <main className="min-h-screen bg-[#1A2F4B] text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `/hookah/logo.jpg`, // Path to your pattern image
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <GalleryHero data={galleryData.hero} />

      {/* Featured Section */}
      {featuredItems.length > 0 && (
        <section className="relative -mt-20 z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-[#F4B400] to-[#F4B400]/80 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-[#1A2F4B] mb-4">
              Featured Moments
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredItems.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    handleItemClick(item, galleryData.items.indexOf(item))
                  }
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1A2F4B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#F4B400] rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Filters */}
      <section className="container mx-auto px-4 py-12">
        <GalleryFilters
          categories={galleryData.categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          totalItems={filteredItems.length}
        />

        {/* Gallery Grid */}
        <GalleryGrid items={filteredItems} onItemClick={handleItemClick} />
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentItem={currentItem}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={currentIndex < filteredItems.length - 1}
        hasPrev={currentIndex > 0}
      />
    </main>
  );
};

export default GalleryPage;
