import React, { useEffect, useState } from 'react';
import ElementList from "../components/ElementList";
import BookFormAdding from "../components/BookFormAdding";
import ButtonDelete from "../components/ButtonDelete";
import { apiFetch } from "../fetchApi/fetch";
import { url, options } from "../fetchApi/utilities";

const List = () => {

    const [books, setBooks] = useState([]);
    const [users,] = url;
    useEffect(() => {
        apiFetch(users, setBooks, options("GET"))
    }, [users]);


    return (
        <div>
            <ButtonDelete setBooks={setBooks} />
            <BookFormAdding books={books} setBooks={setBooks} />
            <ElementList setBooks={setBooks} books={books} />
        </div>
    );
};

export default List;