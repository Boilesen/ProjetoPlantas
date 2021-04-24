import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Plants from "./Components/Plants";
import "./App.css";

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Plants} />
      </Switch>
    </div>
  );
};

export default App;
