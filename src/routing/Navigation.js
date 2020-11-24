import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/listBooks">A list of books</Link>
            </li>
            <li>
                <Link to="/addBook">Addng a book to the list</Link>
            </li>
        </ul>

    );
}

export default Navigation;