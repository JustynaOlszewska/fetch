import React from 'react';
import PropTypes from "prop-types";
import BookFormUpdating from "../components/BookFormUpdating.js";

const ElementList = ({ books, setBooks }) => {

    return (
        books?.length ? (
            <ul>
                {books.map(book => {
                    return (
                        <li key={book.id}>
                            <hr />
                            <h1>book's title:</h1>
                            <p>{`"${book.title}"`}</p>
                            <h2>Fragment of the book:</h2>
                            <p>{`"${book.body}"`}</p>
                            <BookFormUpdating id={book.id} books={books} setBooks={setBooks} title={book.title} />
                        </li>
                    )
                })} </ul>)
            : null)

};

ElementList.propTypes = {
    books: PropTypes.array.isRequired,
};

export default ElementList;