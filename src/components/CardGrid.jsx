import React from "react";

const CardGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4 md:grid-cols-3 md:grid-rows-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative rounded-lg overflow-hidden bg-gray-900 text-white ${
            index === 0
              ? "col-span-1 row-span-2"
              : index === 1
              ? "col-span-1 row-span-2"
              : index === 2
              ? "col-span-1 row-span-1"
              : index === 3
              ? "col-span-1 row-span-1"
              : index === 4
              ? "col-span-2 row-span-1"
              : "col-span-1 row-span-1"
          }`}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black via-transparent">
            <h3 className="text-lg font-bold">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
