import React from 'react';
import BookFormUpdating from "../components/BookFormUpdating.js";
import PropTypes from "prop-types";

const ElementList = ({ books, setBooks }) => {

    if (books.length) {
        const newArrayBooks = books.map((book, index) => {
            return (
                <li key={index}>
                    <hr />
                    <h1>book's title:</h1>
                    <p>{`"${book.title}"`}</p>
                    <h1>Fragment of the book:</h1>
                    <p>{`"${book.body}"`}</p>
                    <BookFormUpdating id={index} books={books} setBooks={setBooks} title={book.title} />

                </li>
            )
        });
        return (
            <ul>
                {newArrayBooks}
            </ul>
        );
    }
    else return null
};

ElementList.propTypes = {
    books: PropTypes.array.isRequired,
};
export default ElementList;