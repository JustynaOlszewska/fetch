import React, { useState } from 'react'; //enter po
const BookFormAdding = ({ handleAddClick }) => {

    const [title, setTitle] = useState('');
    const [fragment, setFragment] = useState(''); // enter po
    const handleSubmit = (e) => {
        //event zamiast e, staraj sie nie robić nigdy jednoliterowych zmiennych
        e.preventDefault()
    } // enter po brak średnika
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    } // enter po brak średnika
    const handleChangeFragment = (e) => {
        setFragment(e.target.value)
    }
    
   // wywalić enter 
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Books' title</label>
            <input value={title} id="title" type="text" onChange={handleChangeTitle} />
            <label htmlFor="fragment">Fragment of the book</label>
            <input value={fragment} id="fragment" type="text" onChange={handleChangeFragment} />
            <button onClick={() => handleAddClick(title, fragment)} >adding a book to the list</button>
            // nadal został ten onClick który jest funkcją strzalkową w retur
           // poza tym jak masz submit to nie powinnaś używać onClicka tylko przenieś logikę funkcji do handleSubmit
        </form>
    );
}

export default BookFormAdding;
