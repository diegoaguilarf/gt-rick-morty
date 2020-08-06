import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

import Header from './components/Header'

import Characters from './pages/Characters';
import Filters from './pages/Filters';
import Character from './pages/Character';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/filtros">
            <Filters />
          </Route>
          <Route path="/personajes/favoritos">
            <Favorites />
          </Route>
          <Route path="/personajes/:id">
            <Character />
          </Route>
          <Route path="/personajes" exact>
            <Characters />
          </Route>
          <Route path="/" exact>
            <Characters />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
