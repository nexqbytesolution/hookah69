"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuHero from "@/component/menu/MenuHero";
import CategoryTabs from "@/component/menu/CategoryTabs";
import MenuSection from "@/component/menu/MenuSection";
import HookahMenu from "@/component/menu/HookahMenu";
import BeverageMenu from "@/component/menu/BeverageMenu";
import { menuData } from "@/component/menu/MenuData";
import {
  FaGlassCheers,
  FaCocktail,
  FaUtensils,
  FaFire,
  FaWineBottle,
  FaBeer,
  FaCoffee,
  FaLeaf,
} from "react-icons/fa";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: "all", name: "All Items", icon: FaFire },
    { id: "hookah", name: "Hookah", icon: FaFire },
    { id: "mocktails", name: "Mocktails", icon: FaGlassCheers },
    { id: "cocktails", name: "Cocktails", icon: FaCocktail },
    { id: "starters", name: "Starters", icon: FaUtensils },
    { id: "beverages", name: "Beverages", icon: FaCoffee },
    { id: "spirits", name: "Spirits", icon: FaWineBottle },
    { id: "beers", name: "Beers", icon: FaBeer },
    { id: "platters", name: "Platters", icon: FaLeaf },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1A2F4B] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#F4B400] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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

      <MenuHero />

      <div className="sticky top-0 z-50 bg-[#1A2F4B]/95 backdrop-blur-md border-b border-[#F4B400]/20">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12"
      >
        <AnimatePresence mode="wait">
          {activeCategory === "all" ? (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              <HookahMenu data={menuData.hookah} />
              <MenuSection
                title="Mocktails"
                items={menuData.mocktails}
                icon={FaGlassCheers}
              />
              <MenuSection
                title="Cocktails"
                items={menuData.cocktails}
                icon={FaCocktail}
              />
              <MenuSection
                title="Starters"
                items={menuData.starters}
                icon={FaUtensils}
              />

              <MenuSection
                title="Soups"
                items={menuData.soups}
                icon={FaLeaf}
                isSoup={true}
              />
              <MenuSection
                title="Salads"
                items={menuData.salads}
                icon={FaLeaf}
              />
              <MenuSection
                title="Sekuwa Sets"
                items={menuData.sekuwa_set}
                icon={FaFire}
              />
              <MenuSection
                title="Sausage"
                items={menuData.sausage}
                icon={FaUtensils}
              />
              <MenuSection
                title="Platters"
                items={menuData.platters}
                icon={FaLeaf}
              />
              <BeverageMenu data={menuData.beverages} />
              <MenuSection
                title="Shooters"
                items={menuData.shooters}
                icon={FaGlassCheers}
              />
              <MenuSection
                title="Spirits"
                items={menuData.spirits}
                icon={FaWineBottle}
              />
              <MenuSection title="Beers" items={menuData.beers} icon={FaBeer} />
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory === "hookah" && (
                <HookahMenu data={menuData.hookah} />
              )}
              {activeCategory === "beverages" && (
                <BeverageMenu data={menuData.beverages} />
              )}
              {activeCategory === "mocktails" && (
                <MenuSection
                  title="Mocktails"
                  items={menuData.mocktails}
                  icon={FaGlassCheers}
                />
              )}
              {activeCategory === "cocktails" && (
                <MenuSection
                  title="Cocktails"
                  items={menuData.cocktails}
                  icon={FaCocktail}
                />
              )}
              {activeCategory === "starters" && (
                <MenuSection
                  title="Starters"
                  items={menuData.starters}
                  icon={FaUtensils}
                />
              )}
              {activeCategory === "spirits" && (
                <MenuSection
                  title="Spirits"
                  items={menuData.spirits}
                  icon={FaWineBottle}
                />
              )}
              {activeCategory === "beers" && (
                <MenuSection
                  title="Beers"
                  items={menuData.beers}
                  icon={FaBeer}
                />
              )}
              {activeCategory === "platters" && (
                <>
                  <MenuSection
                    title="Platters"
                    items={menuData.platters}
                    icon={FaLeaf}
                  />
                  <MenuSection
                    title="Soups"
                    items={menuData.soups}
                    icon={FaLeaf}
                    isSoup={true}
                  />
                  <MenuSection
                    title="Salads"
                    items={menuData.salads}
                    icon={FaLeaf}
                  />
                  <MenuSection
                    title="Sekuwa Sets"
                    items={menuData.sekuwa_set}
                    icon={FaFire}
                  />
                  <MenuSection
                    title="Sausage"
                    items={menuData.sausage}
                    icon={FaUtensils}
                  />
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Action Button */}
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

export default MenuPage;
