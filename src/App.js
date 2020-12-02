import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./layout/Content";

import BooksState from "./context/booksList/BooksState";

function App() {

  return (
    <BooksState>
        <Router>
          <div className="App">
            <h1>The best books of all time</h1>
            <Content />
          </div>
        </Router>
    </BooksState>
  );
};

export default App;
