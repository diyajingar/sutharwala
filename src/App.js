import "./App.css";
import "../node_modules/tailwindcss/dist/base.css";
import "../node_modules/tailwindcss/dist/components.css";
import "../node_modules/tailwindcss/dist/utilities.css";
import "../node_modules/tailwindcss/dist/tailwind.css";
import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import Home from "./screen/Home";

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
