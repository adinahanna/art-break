import './App.css';
import './largescreen.css';
import './mondrian.css';
import { Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Studio from './components/Studio/Studio';
import { useState } from 'react';
import Footer from './components/Footer/Footer';

function App() {
  const [studioImg, setStudioImg] = useState('');

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
              render={() => <Gallery setStudioImg={setStudioImg} />}
            />
            <Route
              path="/studio"
              render={() => <Studio studioImg={studioImg} />}
            />
          </Switch>
        </main>
      <Footer />
    </>
  );
}

export default App;
