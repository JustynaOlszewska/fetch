import React, { useState } from 'react';

/*
To nie może być component ButtonAddBook
przecież to nie jest button, tylko formularz

proponuje zmienic nazwę komponenu na BookFormAdding, albo FormAddBook
*/
const ButtonAddBook = ({ click }) => {
/*
zgodnie z dobrymi praktykami reakta nie używa się zwykłych nazw do zdarzeń typu click, bo będą one wymieszane z clickem JavaSCript
powinno być handleClick

ale i tak ja by to zmienił nie na hadnleClick tylko handleAddBook
*/
    
    
const [title, setTitle] = useState('');
const [fragment, setFragment] = useState('');

    return (
        // nie stosuj nigdy strzałkowych funkcji wewnątrz komponentu return
        // jest to związane z performancem Reacta i aplikacji
        // każda taka metoda powinna być przypisana do const poza return
        // to samo dotyczy się onChane, onClick
        
        <form type="submit" onSubmit={(e)=>e.preventDefault()}>
           //Od kiedy tag <form> w html przyjmuje type="submit" to jest zarezerwowane dla inputa :)
        
            <label htmlFor="title">Books' title</label>
            <input value={title} id="title" type="text" onChange={(e)=> setTitle(e.target.value)}/>    
                
            <label htmlFor="fragment">Fragment of the book</label>
            <input value={fragment} id="fragment" type="text"onChange={(e)=> setFragment(e.target.value)} />
        <button onClick={()=>click(title, fragment)} >adding a book to the list</button>
        </form>
    );
}

export default ButtonAddBook;
