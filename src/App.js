import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { url, options } from "./fetchApi/utilities";
import { apiFetch } from "./fetchApi/fetch";

import Content from "./layout/Content";

function App() {

  const [books, setBooks] = useState([]);
  const [users,] = url;

  useEffect(() => {
    apiFetch(users, setBooks, options("GET"))
  }, [users]);

  return (
    <Router>
      <div className="App">
        <h1>The best books of all time</h1>
        <Content books={books} setBooks={setBooks} />
      </div>
    </Router>
  );
};

export default App;
