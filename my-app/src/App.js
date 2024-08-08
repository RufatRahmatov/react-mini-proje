import * as React from "react";
import './style/style.scss'; // Importing the styles
import Header from './layout/Header';
import BigCard from './page/BigCard';
import CardList from './components/CardList';
import CardForm from './components/CardForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SmallCard from "./page/SmallCard";

function App() {
    const [editingCard, setEditingCard] = React.useState(null);

    const handleEditCard = card => {
        setEditingCard(card);
    };

    const handleSaveCard = () => {
        setEditingCard(null);
    };

    const router = createBrowserRouter([
        {
            path: "/page",
            element: <BigCard />,
        },
        {
            path: "/page",
            element: <SmallCard />

        },
        {
            path: "edit",
            element: <CardForm card={editingCard} onSave={handleSaveCard} />,
        },
        {
            path: "layout",
            element: <Header />,
        },
        {
            // path: "/page",
            // element: <BigCard />,
        },
    ]);

    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
