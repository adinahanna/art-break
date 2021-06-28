import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Studio from './components/Gallery/Studio/Studio';

function App() {
  

  return (
    <>
      <Header />
        <main className="main">
          <Switch>
            <Route
              exact 
              path="/"
              render={() => <Home />}
            />
            <Route
              exact
              path="/gallery"
              render={() => <Gallery />}
            />
            <Route
              exact
              path="studio"
              render={() => <Studio />}
            />
          </Switch>
        </main>
    </>
  );
}

export default App;
