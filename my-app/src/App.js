import * as React from "react";
import './style/style.scss'; // Importing the styles
import Header from './layout/Header';
import Footer from './layout/Footer'; // Footer dosyasını da ekledik
import BigCard from './page/BigCard';
import SmallCard from "./page/SmallCard";
import Card from "./page/Card";
import CardForm from "./page/CardForm";
import CardList from "./page/CardList";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [editingCard, setEditingCard] = React.useState(null);

    const handleEditCard = (card) => {
        setEditingCard(card);
    };

    const handleSaveCard = () => {
        setEditingCard(null);
    };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<BigCard />} /> {/* Default route olarak BigCard sayfası */}
                <Route path="/page" element={<SmallCard />} />
                <Route path="/card" element={<Card />} />
                <Route path="/card-form" element={<CardForm />} />
                <Route path="/card-list" element={<CardList />} />
            </Routes>
            {/* <Footer />  */}
        </Router>
    );
}

export default App;
