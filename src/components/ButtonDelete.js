import React from 'react';

const ButtonDelete = ({ handleDeleteClick }) => {
    return (
        <>
            <button onClick={handleDeleteClick}>delete everything and write your own list</button>
            <hr />
        </>
    );
};

export default ButtonDelete;