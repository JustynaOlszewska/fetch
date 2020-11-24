import React, { useEffect, useState } from 'react';
import ElementList from "../components/ElementList";
import BookFormAdding from "../components/BookFormAdding";
import ButtonDelete from "../components/ButtonDelete";
import { loginFormValidationRules, loginFormValidationRulesPath } from "../validation/loginFormValidationRules";
import { apiFetch } from "../fetchApi/fetch";
import { url, options } from "../fetchApi/utilities";

const List = () => {

    const [books, setBooks] = useState([]);
    const [users, posts] = url;
    useEffect(() => {
        apiFetch(users, setBooks, options("GET"))
    }, [users]);

    const handleAddClick = (title, fragment) => {
        if (title && fragment) {
            apiFetch(users, setBooks, options("POST", title, fragment), books)
        }
        else {
            const message = loginFormValidationRules(title, fragment)
            return alert(`${message.title}`)
        }
    };

    const handleUpdateClick = (changedText, id, title) => {
        if (changedText) {
            apiFetch(posts, setBooks, options("PATCH", title, null, changedText), books, id)
        }
        else {
            const message = loginFormValidationRulesPath(changedText)
            return alert(message.text)
        }
    };

    const handleDeleteClick = () => {
        apiFetch(posts, setBooks, options("DELETE"))
    };

    return (
        <div>
            <ButtonDelete handleDeleteClick={handleDeleteClick} />
            <BookFormAdding handleAddClick={handleAddClick} />
            <ElementList handleUpdateClick={handleUpdateClick} books={books} />
        </div>
    );
};

export default List;