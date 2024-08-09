import React, { useState, useEffect } from "react";
import axios from "axios";

const CardForm = ({ card, onSave }) => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    author: "",
    date: "",
    image: "",
  });

  useEffect(() => {
    if (card) {
      setFormData(card);
    }
  }, [card]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      axios
        .put(`http://localhost:5000/cards/${formData.id}`, formData)
        .then((response) => onSave(response.data))
        .catch((error) => console.error(error));
    } else {
      axios
        .post("http://localhost:5000/cards", formData)
        .then((response) => onSave(response.data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        className="border p-2 mb-2 w-full"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Save
      </button>
    </form>
  );
};

export default CardForm;
