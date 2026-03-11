"use client";

const MenuItem = ({ item, type }) => {
  // For items with veg/chicken options (like soup)
  if (item.veg && item.chicken) {
    return (
      <div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-[#F4B400]/30 transition-all">
        <div className="flex justify-between items-start mb-1">
          <span className="text-white font-medium text-sm md:text-base">
            {item.name}
          </span>
        </div>
        <div className="flex gap-3 text-xs text-white/70">
          <span>
            Veg: <span className="text-[#F4B400]">रू {item.veg}</span>
          </span>
          <span>
            Chicken: <span className="text-[#F4B400]">रू {item.chicken}</span>
          </span>
        </div>
      </div>
    );
  }

  // For items with glass/bottle options (like wine)
  if (item.glass && item.bottle) {
    return (
      <div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-[#F4B400]/30 transition-all">
        <div className="flex justify-between items-start mb-1">
          <span className="text-white font-medium text-sm md:text-base">
            {item.name}
          </span>
        </div>
        <div className="flex gap-3 text-xs text-white/70">
          <span>
            Glass: <span className="text-[#F4B400]">रू {item.glass}</span>
          </span>
          <span>
            Bottle: <span className="text-[#F4B400]">रू {item.bottle}</span>
          </span>
        </div>
      </div>
    );
  }

  // For items with small/large options (like pizza)
  if (item.small && item.large) {
    return (
      <div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-[#F4B400]/30 transition-all">
        <div className="flex justify-between items-start mb-1">
          <span className="text-white font-medium text-sm md:text-base">
            {item.name}
          </span>
        </div>
        <div className="flex gap-3 text-xs text-white/70">
          <span>
            Small: <span className="text-[#F4B400]">रू {item.small}</span>
          </span>
          <span>
            Large: <span className="text-[#F4B400]">रू {item.large}</span>
          </span>
        </div>
      </div>
    );
  }

  // For items with boil/fry options (like sausage)
  if (item.boil && item.fry) {
    return (
      <div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-[#F4B400]/30 transition-all">
        <div className="flex justify-between items-start mb-1">
          <span className="text-white font-medium text-sm md:text-base">
            {item.name}
          </span>
        </div>
        <div className="flex gap-3 text-xs text-white/70">
          <span>
            Boil: <span className="text-[#F4B400]">रू {item.boil}</span>
          </span>
          <span>
            Fry: <span className="text-[#F4B400]">रू {item.fry}</span>
          </span>
        </div>
      </div>
    );
  }

  // For items with veg/chicken/buff options (like momo)
  if (item.veg && item.chicken && item.buff) {
    return (
      <div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-[#F4B400]/30 transition-all">
        <div className="flex justify-between items-start mb-1">
          <span className="text-white font-medium text-sm md:text-base">
            {item.name}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-white/70">
          <span>
            Veg: <span className="text-[#F4B400]">रू {item.veg}</span>
          </span>
          <span>
            Chicken: <span className="text-[#F4B400]">रू {item.chicken}</span>
          </span>
          <span>
            Buff: <span className="text-[#F4B400]">रू {item.buff}</span>
          </span>
        </div>
      </div>
    );
  }

  // For items with price and bottle (like spirits)
  if (item.price && item.bottle) {
    return (
      <div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-[#F4B400]/30 transition-all">
        <div className="flex justify-between items-start mb-1">
          <span className="text-white font-medium text-sm md:text-base">
            {item.name}
          </span>
        </div>
        <div className="flex gap-3 text-xs text-white/70">
          <span>
            Peg: <span className="text-[#F4B400]">रू {item.price}</span>
          </span>
          <span>
            Bottle: <span className="text-[#F4B400]">रू {item.bottle}</span>
          </span>
        </div>
      </div>
    );
  }

  // Default item (just name and price)
  return (
    <div className="bg-white/5 hover:bg-white/10 rounded-lg p-3 border border-white/10 hover:border-[#F4B400]/30 transition-all flex justify-between items-center">
      <span className="text-white text-sm md:text-base">{item.name}</span>
      <span className="text-[#F4B400] font-medium text-sm md:text-base">
        रू {item.price}
      </span>
    </div>
  );
};

export default MenuItem;
