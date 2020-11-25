import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./layout/Navigation";
import Content from "./layout/Content";

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
