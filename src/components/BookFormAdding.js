import React, { useState } from 'react';
import { url, options } from "../fetchApi/utilities";
import { loginFormValidationRules } from "../validation/loginFormValidationRules";
import { apiFetch } from "../fetchApi/fetch";

const BookFormAdding = ({ books, setBooks }) => {

    const [title, setTitle] = useState('');
    const [fragment, setFragment] = useState('');

    const [users] = url;

    const handleSubmit = (event) => {
        event.preventDefault()
        if (title && fragment) {
            apiFetch(users, setBooks, options("POST", title, fragment), books)
        }
        else {
            const message = loginFormValidationRules(title, fragment)
            return alert(`${message.title}`)
        }
    };

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    };

    const handleChangeFragment = (event) => {
        setFragment(event.target.value)
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Books' title</label>
            <input value={title} id="title" type="text" onChange={handleChangeTitle} />
            <label htmlFor="fragment">Fragment of the book</label>
            <input value={fragment} id="fragment" type="text" onChange={handleChangeFragment} />
            <button>adding a book to the list</button>
        </form>
    );
};

export default BookFormAdding;