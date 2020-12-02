import React, { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

const Navigation = lazy(() => import("../layout/Navigation"));
const ElementList = lazy(() => import("../components/ElementList"));
const BookFormAdding = lazy(() => import("../components/BookFormAdding.js"));
const ButtonDelete = lazy(() => import("../components/ButtonDelete"));

const Content = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ButtonDelete />
      <Navigation />
      <Switch>
        <Route exact path="/" />
        <Route path="/listBooks" component={ElementList} />
        <Route path="/addBook" component={BookFormAdding}>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Content;