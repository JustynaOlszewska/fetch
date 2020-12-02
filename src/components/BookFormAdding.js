import React, { useContext } from 'react';

import BooksContext from "../context/booksList/bookContext";

const BookFormAdding = () => {

    const booksContext = useContext(BooksContext);

    return (
        <>
            <form onSubmit={booksContext.handleSubmitAdding}>
                <label htmlFor="title">Books' title</label>
                <input value={booksContext.title} id="title" type="text" onChange={booksContext.handleChangeTitle} />
                <label htmlFor="fragment">Fragment of the book</label>
                <input value={booksContext.fragment} id="fragment" type="text" onChange={booksContext.handleChangeFragment} />
                <button>adbooksContext.ding a book to the list</button>
            </form>
        </>
    );
};

export default BookFormAdding;