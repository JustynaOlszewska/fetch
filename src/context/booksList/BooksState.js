import React, { useReducer, useEffect } from 'react';

import { GET_BOOKS, POST_BOOKS, PATCH_BOOKS, DELETE_BOOKS, CHANGE_TITLE, CHANGE_FRAGMENT, UPDATE_BODY } from "../types";

import BookReducer from "../booksList/bookReducer";
import BookContext from "../booksList/bookContext";

import { loginFormValidationRules, loginFormValidationRulesPatch } from "../../validation/loginFormValidationRules";
import { options } from "../../fetchApi/utilities";

const BookState = props => {

    const initialState = {
        books: [],
        title: '',
        fragment: '',
        changedText: null
    };
    const [state, dispatch] = useReducer(BookReducer, initialState);

    const apiFetch = (options, id) => {

        const users = ((options.method === "PATCH") || (options.method === "DELETE")) ? "/1?userId=1" : "?userId=1"

        const url = `https://jsonplaceholder.typicode.com/posts${users}`

        fetch(url, options)
            .then(response => {
                if (response.ok) return response.json();
                else throw new Error("error in downloading data");
            })
            .then(data => {
                switch (options.method) {

                    case "GET":
                        return (dispatch({ type: GET_BOOKS, payload: data }));

                    case "POST":
                        return dispatch({ type: POST_BOOKS, payload: [...state.books, data] });

                    case "PATCH":
                        const newBooks = state.books.map(item => {
                            if (item.id === id) {
                                item.body = data.body;
                                data.id = id;
                            };
                            return (item);
                        });
                        return (dispatch({ type: PATCH_BOOKS, payload: newBooks }));

                    case "DELETE":
                        return (dispatch({ type: DELETE_BOOKS, payload: [] }));

                    default:
                        return console.log("unexpected method");
                }
            })
            .catch((err) => console.log(err))
    };

    //App.js
    useEffect(() => {
        apiFetch(options("GET"));
        //eslint-disable-next-line
    }, []);

    //BookFormAdding.js
    const handleSubmitAdding = (event) => {

        event.preventDefault();

        state.books.map(item => item.id += 1);

        if (!state.title && !state.fragment) {
            const message = loginFormValidationRules(state.title, state.fragment);
            return alert(`${message.title}`);
        };

        apiFetch(options("POST", state.title, state.fragment));
    };

    const handleChangeTitle = (event) => {
        dispatch({ type: CHANGE_TITLE, payload: event.target.value });
    };

    const handleChangeFragment = (event) => {
        dispatch({ type: CHANGE_FRAGMENT, payload: event.target.value });
    };

    //BookFormUpdating.js

    const handleSubmitUpdating = (id, e) => {

        e.preventDefault();

        if (state.changedText === null) {
            const message = loginFormValidationRulesPatch(state.changedText);
            return alert(message.text);
        };

        dispatch({
            type: UPDATE_BODY,
            payload: null,

        });

        apiFetch(options("PATCH", state.title, null, state.changedText), id);

    };

    const handleChangeText = (e) => {

        dispatch({
            type: UPDATE_BODY,
            payload: e.target.value,

        });

    };

    //ButtonDelete.js
    const handleDeleteClick = () => {
        apiFetch(options("DELETE"));
    };

    return (
        <BookContext.Provider value={{ books: state.books, title: state.title, fragment: state.fragment, handleChangeTitle, handleChangeFragment, handleSubmitUpdating, handleSubmitAdding, handleChangeText, handleDeleteClick }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookState;