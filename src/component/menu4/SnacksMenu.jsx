import React from "react";

const snacks = [
  { name: "Chicken Chilly", price: 290 },
  { name: "Chicken Nuggets", price: 340 },
  { name: "Buff Chilli", price: 220 },
  { name: "Pork Sekuwa", price: 420 },
];

const SnacksMenu = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Snacks Menu</h2>

      <div className="grid grid-cols-2 gap-4">
        {snacks.map((item, index) => (
          <div key={index} className="flex justify-between border p-4 rounded">
            <span>{item.name}</span>
            <span>Rs. {item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnacksMenu;
