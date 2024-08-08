import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/style.scss';
import Header from './components/leyout/Headerr';

function App() {
    return (
        <Router>
            <Header />
            <Routes>

                <Route path="/layout" element={<Header />} />
            </Routes>
        </Router>
    );
}

export default App;
