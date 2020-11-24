import React from 'react';
import { url, options } from "../fetchApi/utilities";
import { apiFetch } from "../fetchApi/fetch";

const ButtonDelete = React.memo(({ setBooks }) => {

    const [, posts] = url;
    
    const handleDeleteClick = () => {
        apiFetch(posts, setBooks, options("DELETE"))
    };

    return (
        <>
            <button onClick={handleDeleteClick}>delete everything and write your own list</button>
            <hr />
        </>
    );
});

export default ButtonDelete;