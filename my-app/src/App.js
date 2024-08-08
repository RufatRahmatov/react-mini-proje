import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/style.scss'; // Importing the styles
import Header from './layout/Header';
import BigCard from './page/BigCard';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="./layout" element={<Header />} />
                <Route path="/bigcard" element={<BigCard />} />
            </Routes>
        </Router>
    );
}
