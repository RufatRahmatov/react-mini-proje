import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cards")
      .then((response) => setCards(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteCard = (id) => {
    axios
      .delete(`http://localhost:5000/cards/${id}`)
      .then(() => setCards(cards.filter((card) => card.id !== id)))
      .catch((error) => console.error(error));
  };

  const editCard = (card) => {
    // edit logic here
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onDelete={deleteCard}
          onEdit={editCard}
        />
      ))}
    </div>
  );
};

export default CardList;
