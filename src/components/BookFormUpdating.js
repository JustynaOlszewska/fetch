import React, { useState } from 'react';
const BookFormUpdating = ({ id, handleUpdateClick, title }) => {
    const [changedText, setChangeText] = useState();
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChangeText = (e) => {
        setChangeText(e.target.value)
    }
    return (
        <form value={changedText} onSubmit={handleSubmit}>
            <input onChange={handleChangeText} type="text" />
            <button onClick={() => handleUpdateClick(changedText, id, title)}>replacing fragment of book to another fragment</button>
        </form>
    );
}
export default BookFormUpdating;