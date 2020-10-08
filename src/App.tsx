import { createBrowserHistory } from "history";
import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  let history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" key="home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
