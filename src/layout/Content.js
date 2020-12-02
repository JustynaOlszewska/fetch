import React, { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import Navigation from "../layout/Navigation";

const ElementList = lazy(() => import("../components/ElementList"));
const BookFormAdding = lazy(() => import("../components/BookFormAdding.js"));
const ButtonDelete = lazy(() => import("../components/ButtonDelete"));

const Content = ({ setBooks, books }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ButtonDelete setBooks={setBooks} />
      <Navigation />
      <Switch>
        <Route exact path="/" />
        <Route path="/listBooks" render={props => (
          <ElementList setBooks={setBooks} books={books} />
        )} />
        <Route path="/addBook">
          <BookFormAdding setBooks={setBooks} books={books} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Content;