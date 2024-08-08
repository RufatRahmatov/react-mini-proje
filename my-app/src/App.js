import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/style.scss'; // Importing the styles
import Header from './layout/Header';
import BigCard from './page/BigCard';

import CardList from './components/CardList';
import CardForm from './components/CardForm';

export default function App() {
    const [editingCard, setEditingCard] = useState(null);

    const handleEditCard = card => {
        setEditingCard(card);
    };

    const handleSaveCard = () => {
        setEditingCard(null);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/layout" element={<Header />} />
                <Route path="/bigcard" element={<BigCard />} />
                <Route path="/" element={<CardList onEdit={handleEditCard} />} />
                <Route path="/edit" element={<CardForm card={editingCard} onSave={handleSaveCard} />} />

            </Routes>
        </Router>
    );
}
