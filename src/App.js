import React from 'react';
import Navigation from "./routing/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./routing/Content";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>The best books of all time</h1>
        <Navigation />
        <Content />
      </div>
    </Router>
  );
};

export default App;
