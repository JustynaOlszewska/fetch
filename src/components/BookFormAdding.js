import React, { useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import { options } from "../fetchApi/utilities";
import { loginFormValidationRules } from "../validation/loginFormValidationRules";
import { apiFetch } from "../fetchApi/fetch";
import PropTypes from "prop-types";

const BookFormAdding = ({ books, setBooks }) => {
    let match = useRouteMatch();
    console.log('s', match)
    const [title, setTitle] = useState('');
    const [fragment, setFragment] = useState('');

    const handleSubmit = (event) => {

        event.preventDefault()

        books.map(item => item.id += 1)

        if (!title && !fragment) {
            const message = loginFormValidationRules(title, fragment)
            return alert(`${message.title}`)
        };

        apiFetch(setBooks, options("POST", title, fragment), books)

    };

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    };

    const handleChangeFragment = (event) => {
        setFragment(event.target.value)
    };

    return (
        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Books' title</label>
                <input value={title} id="title" type="text" onChange={handleChangeTitle} />
                <label htmlFor="fragment">Fragment of the book</label>
                <input value={fragment} id="fragment" type="text" onChange={handleChangeFragment} />
                <button>adding a book to the list</button>
            </form>
        </>
    );
};

BookFormAdding.propTypes = {
    books: PropTypes.array.isRequired,
};

export default BookFormAdding;