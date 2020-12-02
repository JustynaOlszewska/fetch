import React, { useContext } from 'react';

import BookFormUpdating from "../components/BookFormUpdating.js";

import BooksContext from "../context/booksList/bookContext";

const ElementList = React.memo(() => {

    const booksContext = useContext(BooksContext);

    return (
        booksContext.books?.length ? (
            <ul>
                {booksContext.books.map(book => {
                    return (
                        <li key={book.id}>
                            <hr />
                            <h1>book's title:</h1>
                            <p>{`"${book.title}"`}</p>
                            <h2>Fragment of the book:</h2>
                            <p>{`"${book.body}"`}</p>
                            <BookFormUpdating id={book.id} />
                        </li>
                    )
                })} </ul>)
            : null)
});

export default ElementList;