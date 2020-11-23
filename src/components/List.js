import React, { useEffect, useState } from 'react';
import ElementList from "../components/ElementList";
import ButtonAddBook from "./ButtonAddBook";
import ButtonDelete from "../components/ButtonDelete";
import { loginFormValidationRules, loginFormValidationRulesPath } from "../validation/loginFormValidationRules";
import { apiFetch } from "../fetchApi/fetch";
import { url, options } from "../fetchApi/utilities";
const List = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        apiFetch(url[0], setBooks, options("GET"))
    }, []);

    const handleClickPost = (title, fragment) => {
        if (title && fragment) {
            apiFetch(url[0], setBooks, options("POST", title, fragment), books)
        }
        else {
            const message = loginFormValidationRules(title, fragment)
            return alert(`${message.title}`)
        }
    }
    const handleClickPath = (changedText, id, title) => {
        if (changedText) {
            apiFetch(url[1], setBooks, options("PATCH", title, null, changedText), books, id)
        }
        else {
            const message = loginFormValidationRulesPath(changedText)
            return alert(message.text)
        }
    }
    const handleClickDelete = () => {
        apiFetch(url[1], setBooks, options("DELETE"))
    }

    return (
        <div>
            <ButtonDelete click={handleClickDelete} />
            <ButtonAddBook click={handleClickPost} />
            <ElementList click={handleClickPath} books={books} />
        </div>
    );
}
export default List;