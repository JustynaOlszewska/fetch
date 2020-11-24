import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import ButtonDelete from "../components/ButtonDelete";
import { apiFetch } from "../fetchApi/fetch";
import { url, options } from "../fetchApi/utilities";

const ElementList = lazy(() => import("../components/ElementList"));
const BookFormAdding = lazy(() => import("../components/BookFormAdding"));

const List = () => {

    const [books, setBooks] = useState([]);
    const [users,] = url;

    useEffect(() => {
        apiFetch(users, setBooks, options("GET"))
    }, [users]);

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <ButtonDelete setBooks={setBooks} />
                <Switch>
                    <Route path="/listBooks">
                        <ElementList setBooks={setBooks} books={books} />
                    </Route>
                    <Route path="/addBook">
                        <BookFormAdding setBooks={setBooks} books={books} />
                    </Route>
                </Switch>
            </Suspense>
        </div>
    );
};

export default List;