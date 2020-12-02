import React, { useContext } from 'react';

import BookContext from "../context/booksList/bookContext";

const ButtonDelete = React.memo(() => {

    const bookContext = useContext(BookContext)

    return (
        <>
            <button onClick={bookContext.handleDeleteClick}>delete everything and write your own list</button>
            <hr />
        </>
    );
});

export default ButtonDelete;