"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { drinksMenu, snacksMenu } from "@/component/menu3/MenuData";
import MenuToggle from "@/component/menu3/MenuToggle";
import MenuCategory from "@/component/menu3/MenuCategory";
import { HiOutlineSparkles } from "react-icons/hi";
import { GiHook } from "react-icons/gi";

const MenuPage = () => {
  const [activeMenu, setActiveMenu] = useState("drinks");

  return (
    <main className="min-h-screen bg-[#1A2F4B] pt-20 md:pt-24 pb-12">
      {/* Decorative Header */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-linear-to-b from-[#F4B400]/10 to-transparent h-32"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-3 bg-[#F4B400]/20 rounded-full mb-4"
          >
            <GiHook className="text-3xl text-[#F4B400]" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Our <span className="text-[#F4B400]">Menu</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Explore our wide selection of premium drinks, hookah flavors, and
            delicious snacks
          </p>
        </div>
      </div>

      {/* Menu Toggle */}
      <MenuToggle activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Menu Content */}
      <div className="container mx-auto px-4">
        {activeMenu === "drinks" ? (
          <motion.div
            key="drinks"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-8"
          >
            <MenuCategory
              title="☕ ESPRESSO BASED BEVERAGES"
              items={drinksMenu.espresso}
            />
            <MenuCategory title="🥤 FRAPPE" items={drinksMenu.frappe} />
            <MenuCategory title="🥛 MILKSHAKES" items={drinksMenu.milkshakes} />
            <MenuCategory title="🍵 FLAVOR TEA" items={drinksMenu.flavorTea} />
            <MenuCategory
              title="☕ COFFEE ALTERNATIVE"
              items={drinksMenu.coffeeAlternative}
            />
            <MenuCategory title="🥛 LASSI" items={drinksMenu.lassi} />
            <MenuCategory title="🧃 JUICE" items={drinksMenu.juice} />
            <MenuCategory title="🍸 MOCKTAILS" items={drinksMenu.mocktails} />
            <MenuCategory
              title="🥃 SPIRITS"
              items={drinksMenu.spirits}
              type="spirit"
            />
            <MenuCategory title="🎯 SHOTS" items={drinksMenu.shots} />
            <MenuCategory title="🍺 BEERS" items={drinksMenu.beers} />
            <MenuCategory title="🍷 WINE" items={drinksMenu.wine} />
            <MenuCategory title="💨 SMOKE" items={drinksMenu.smoke} />
          </motion.div>
        ) : (
          <motion.div
            key="snacks"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <MenuCategory title="🍜 SOUP" items={snacksMenu.soup} />
            <MenuCategory title="🥗 SALAD" items={snacksMenu.salad} />
            <MenuCategory
              title="🍖 SEKUWA SET/TAWA"
              items={snacksMenu.sekuwa}
            />
            <MenuCategory
              title="🍗 NON-VEG SNACKS"
              items={snacksMenu.nonVegSnacks}
            />
            <MenuCategory title="🌭 SAUSAGE" items={snacksMenu.sausage} />
            <MenuCategory
              title="🍔 BURGER & SANDWICH"
              items={[...snacksMenu.burger, ...snacksMenu.sandwich]}
            />
            <MenuCategory
              title="🍜 KEEMA NOODLES"
              items={snacksMenu.keemaNoodles}
            />
            <MenuCategory title="🔥 SIZZLER" items={snacksMenu.sizzler} />
            <MenuCategory title="🥬 VEG SNACKS" items={snacksMenu.vegSnacks} />
            <MenuCategory title="🥟 MOMO" items={snacksMenu.momo} />
            <MenuCategory title="🍜 CHOWMEIN" items={snacksMenu.chowmein} />
            <MenuCategory title="🍲 THUKPA" items={snacksMenu.thukpa} />
            <MenuCategory title="🍚 FRY RICE" items={snacksMenu.fryRice} />
            <MenuCategory title="🍜 RAMEN" items={snacksMenu.ramen} />
            <MenuCategory title="🍕 PIZZA" items={snacksMenu.pizza} />
            <MenuCategory title="🍽️ PLATTERS" items={snacksMenu.platters} />
          </motion.div>
        )}
      </div>

      {/* Footer Note */}
      <div className="container mx-auto px-4 mt-12">
        <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
          <p className="text-white/50 text-sm flex items-center justify-center gap-2">
            <HiOutlineSparkles className="text-[#F4B400]" />
            All prices are in NPR and include taxes
            <HiOutlineSparkles className="text-[#F4B400]" />
          </p>
        </div>
      </div>
    </main>
  );
};

export default MenuPage;
