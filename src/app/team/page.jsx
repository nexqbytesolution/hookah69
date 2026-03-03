import React from "react";
import ChefGrid from "@/component/Cheif/ChefGrid";

export const metadata = {
  title: "Our Team | Hookah69 - Premium Lounge Pokhara",
  description:
    "Meet our expert culinary team at Hookah69. Passionate chefs and mixologists dedicated to creating unforgettable experiences.",
};

const TeamPage = () => {
  return (
    <main className="min-h-screen bg-[#1A2F4B]">
      <ChefGrid />
    </main>
  );
};

export default TeamPage;
