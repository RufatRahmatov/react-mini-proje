import React from "react";

const Card = ({ card, onDelete, onEdit, onCrate }) => {
  return (
    <div className="relative rounded overflow-hidden shadow-lg p-4">
      <img className="w-full" src={card.image} alt={card.title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
        <div className="absolute bottom-0 left-0 p-6">
          <span
            className={`bg-${card.category.toLowerCase()}-600 text-white text-sm font-bold px-2 py-1 rounded`}
          >
            {card.category}
          </span>
          <h2 className="text-white text-xl font-bold mt-2">{card.title}</h2>
          <div className="flex items-center mt-2">
            <div className="text-white text-sm">
              <p>{card.author}</p>
              <p>{card.date}</p>
            </div>
          </div>
          <button
            onClick={() => onDelete(card.id)}
            className="bg-red-500 text-white p-2 mt-2 rounded"
          >
            Delete
          </button>
          <button
            onClick={() => onEdit(card)}
            className="bg-blue-500 text-white p-2 mt-2 rounded ml-2"
          >
            Edit
          </button>
          <button
            onClick={() => onCrate(card)}
            className="bg-blue-500 text-white p-2 mt-2 rounded ml-2"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
