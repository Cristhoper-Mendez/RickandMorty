import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Favourites from "./components/Favourites/Favourites";
import CharacterState from "./Context/CharacterState";

function App() {
  return (
    <CharacterState>
      <div className="Contenedor-app">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favourites" component={Favourites} />
          </Switch>
        </Router>
      </div>
    </CharacterState>
  );
}

export default App;
