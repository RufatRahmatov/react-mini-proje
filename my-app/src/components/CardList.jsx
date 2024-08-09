import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardList = ({ onEdit }) => {
  const [cards, setCards] = useState([]);

  const fetchCards = () => {
    axios
      .get("http://localhost:5000/cards")
      .then((response) => setCards(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const deleteCard = (id) => {
    axios
      .delete(`http://localhost:5000/cards/${id}`)
      .then(() => {
        fetchCards();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.id} card={card} onDelete={deleteCard} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default CardList;
