import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { options } from "./fetchApi/utilities";
import { apiFetch } from "./fetchApi/fetch";

import Content from "./layout/Content";

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    apiFetch(setBooks, options("GET"))
  }, []);

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
