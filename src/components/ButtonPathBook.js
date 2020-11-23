import React, { useState } from 'react';
const ButtonPathBook = ({ id, click }) => {
    const [changedText, setChangeText] = useState();

    return (
        <form value={changedText} onChange={(e) => setChangeText(e.target.value)} type="submit" onSubmit={(e) => e.preventDefault()}>
            <input type="text" />
            <button onClick={() => click(changedText, id)}>replacing fragment of book to another fragment</button>
        </form>
    );
}
export default ButtonPathBook;