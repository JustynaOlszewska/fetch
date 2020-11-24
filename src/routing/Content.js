import React from 'react';
import { Route, Switch } from "react-router-dom";
import List from "../components/List";

const Content = () => {
  return (
    <Switch>
      <Route path="/">
        <List />
      </Route>
    </Switch >
  );
}

export default Content;