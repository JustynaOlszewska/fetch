import React from 'react';
import { options } from "../fetchApi/utilities";
import { apiFetch } from "../fetchApi/fetch";

const ButtonDelete = React.memo(({ setBooks }) => {

    const handleDeleteClick = () => {
        apiFetch(setBooks, options("DELETE"))
    };

    return (
        <>
            <button onClick={handleDeleteClick}>delete everything and write your own list</button>
            <hr />
        </>
    );
});

export default ButtonDelete;