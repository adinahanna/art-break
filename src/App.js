import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

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
            <Gallery />
          </Switch>
        </main>
    </>
  );
}

export default App;
