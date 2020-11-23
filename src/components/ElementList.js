import React from 'react';
import ButtonPathBook from "../components/ButtonPathBook.js";
const ElementList = ({ books, click }) => {
    if (books.length) {
        const newArrayBooks = books.map((book, index) => {
            return (
                <li key={index}>
                    <hr />
                    <h1>book's title:</h1>
                    <p>{`"${book.title}"`}</p>
                    <h1>Fragment of the book:</h1>
                    <p>{`"${book.body}"`}</p>
                    <ButtonPathBook click={click} id={index} books={books} />

                </li>
            )
        })

        return (
            <ul>
                {newArrayBooks}
            </ul>
        );
    }
    else return null
}

export default ElementList;