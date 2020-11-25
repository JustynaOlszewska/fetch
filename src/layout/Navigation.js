import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/listBooks">A list of books</NavLink>
            </li>
            <li>
                <NavLink to="/addBook">Addng a book to the list</NavLink>
            </li>
        </ul>

    );
}

export default Navigation;