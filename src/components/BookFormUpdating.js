import React, { useContext } from 'react';
import PropTypes from "prop-types";

import BooksContext from "../context/booksList/bookContext";

const BookFormUpdating = ({ id }) => {

    const booksContext = useContext(BooksContext);

    return (
        <form value={booksContext.changedText} onSubmit={(e) => booksContext.handleSubmitUpdating(id, e)}>
            <input onChange={booksContext.handleChangeText} type="text" />
            <button >replacing fragment of book to another fragment</button>
        </form >
    );
};

BookFormUpdating.propTypes = {
    id: PropTypes.number.isRequired,
};

export default BookFormUpdating;