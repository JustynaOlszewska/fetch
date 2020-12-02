import React, { useState } from 'react';
import PropTypes from "prop-types";
import { loginFormValidationRulesPath } from "../validation/loginFormValidationRules";
import { apiFetch } from "../fetchApi/fetch";
import { options } from "../fetchApi/utilities";

const BookFormUpdating = ({ id, title, setBooks, books }) => {

    const [changedText, setChangeText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!changedText) {
            const message = loginFormValidationRulesPath(changedText)
            return alert(message.text)
        }

        apiFetch(setBooks, options("PATCH", title, null, changedText), books, id)
    };

    const handleChangeText = (e) => {
        setChangeText(e.target.value)
    };

    return (
        <form value={changedText} onSubmit={handleSubmit}>
            <input onChange={handleChangeText} type="text" />
            <button >replacing fragment of book to another fragment</button>
        </form>
    );
};

BookFormUpdating.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};
export default BookFormUpdating;