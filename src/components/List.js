import React, { useEffect, useState } from 'react';
import ElementList from "../components/ElementList";
import BookFormAdding from "../components/BookFormAdding";
import ButtonDelete from "../components/ButtonDelete";
import { loginFormValidationRulesPath } from "../validation/loginFormValidationRules";
import { apiFetch } from "../fetchApi/fetch";
import { url, options } from "../fetchApi/utilities";

const List = () => {

    const [books, setBooks] = useState([]);
    const [users, posts] = url;
    useEffect(() => {
        apiFetch(users, setBooks, options("GET"))
    }, [users]);

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
            <BookFormAdding books={books} setBooks={setBooks} />
            <ElementList handleUpdateClick={handleUpdateClick} books={books} />
        </div>
    );
};

export default List;