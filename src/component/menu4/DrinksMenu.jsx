import React from "react";

const drinks = [
  { name: "Espresso", price: 120 },
  { name: "Cafe Latte", price: 180 },
  { name: "Cold Coffee", price: 215 },
  { name: "Chocolate Milkshake", price: 210 },
];

const DrinksMenu = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Drinks Menu</h2>

      <div className="grid grid-cols-2 gap-4">
        {drinks.map((item, index) => (
          <div key={index} className="flex justify-between border p-4 rounded">
            <span>{item.name}</span>
            <span>Rs. {item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinksMenu;
