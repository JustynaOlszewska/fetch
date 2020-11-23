import React, { useState } from 'react';
const BookFormAdding = ({ handleAddClick }) => {

    const [title, setTitle] = useState('');
    const [fragment, setFragment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeFragment = (e) => {
        setFragment(e.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Books' title</label>
            <input value={title} id="title" type="text" onChange={handleChangeTitle} />
            <label htmlFor="fragment">Fragment of the book</label>
            <input value={fragment} id="fragment" type="text" onChange={handleChangeFragment} />
            <button onClick={() => handleAddClick(title, fragment)} >adding a book to the list</button>
        </form>
    );
}

export default BookFormAdding;