import React from 'react';
import BookFormUpdating from "../components/BookFormUpdating.js";
import PropTypes from "prop-types"; // ten import powinien byc pod React

const ElementList = ({ books, setBooks }) => {

    // return (
       // books?.length ? (
          // books.map(book => {}    
      // ) : null
    // );
    
    
    if (books.length) { // nie używamy if w renderowaniu komponentów// skorzystaj z operatora ternarnego, przykład powyżej
        const newArrayBooks = books.map((book, index) => {
            return (
                <li key={index}> // nie używam indexu do key, 
                     // 1) ze względu na performance, będziesz miałą to w tym samym artykule co Ci wysłałem o performance
                     // 2) ze względu na to że indexy się zmieniają, jak masz 3 elementy od indexu 0, 1, 2 i usuniesz  środkowy, to potem ten trzeci nie ma już
                     // indexu 2 tylko jeden wiec React zglupieje i pozamienia na nową
                
                    <hr />
                    <h1>book's title:</h1>
                    <p>{`"${book.title}"`}</p>
                    // tutaj kłaniają się podstawy HTML-a ;-)  nie można uzywać wielu tagów h1, tag h1 powinien być jeden na jednej podstronie 
                    // chodzi o SEO i roboty google oraz innych wyszukiwarek
                    <h1>Fragment of the book:</h1> 
                    <p>{`"${book.body}"`}</p>
                    <BookFormUpdating id={index} books={books} setBooks={setBooks} title={book.title} />

                </li>
            )
        });
        return (
            <ul>
                {newArrayBooks}
            </ul>
        );
    }
    else return null
};

ElementList.propTypes = {
    books: PropTypes.array.isRequired,
};// enter po
export default ElementList;
