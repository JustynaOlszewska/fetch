import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
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
            <Switch>
                <Route path="/listBooks">
                    <ElementList setBooks={setBooks} books={books} />
                </Route>
                <Route path="/addBook">
                    <BookFormAdding setBooks={setBooks} books={books} />
                </Route>
            </Switch>
        </div>
    );
};

export default List;