import * as React from "react";
import './style/style.scss'; // Importing the styles
import Header from './layout/Header';
// import SmallCard from "./components/SmallCard";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./page/home";


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
                <Route path="/" element={<HomePage />} /> {/* Default route olarak BigCard sayfası */}
                {/* <Route path="/page" element={<SmallCard />} /> */}
                <Route path="/card" element={<Card />} />
                <Route path="/card-form" element={<CardForm />} />
                <Route path="/card-list" element={<CardList />} />
            </Routes>
            {/* <Footer />  */}
        </Router>
    );
}

export default App;
