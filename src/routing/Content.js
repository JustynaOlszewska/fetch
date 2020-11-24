import React, { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
// import List from "../components/List";
const List = lazy(() => import("../components/List"));

const Content = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" >
          <List />
        </Route>
      </Switch >
    </Suspense>
  );
}

export default Content;