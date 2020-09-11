import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Favourites from "./components/Favourites";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favourites" component={Favourites} />
      </Switch>
    </Router>
  );
}

export default App;
