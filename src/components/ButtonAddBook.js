import React, { useState } from 'react';
const ButtonAddBook = ({ click }) => {

const [title, setTitle] = useState('');
const [fragment, setFragment] = useState('');

    return (
        <form type="submit" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="title">Books' title</label>
            <input value={title} id="title" type="text" onChange={(e)=> setTitle(e.target.value)}/>
            <label htmlFor="fragment">Fragment of the book</label>
            <input value={fragment} id="fragment" type="text"onChange={(e)=> setFragment(e.target.value)} />
        <button onClick={()=>click(title, fragment)} >adding a book to the list</button>
        </form>
    );
}

export default ButtonAddBook;