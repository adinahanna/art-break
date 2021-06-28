import './App.css';
import { Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

let randomNum;
const getRandomNum = () => {
  randomNum = Math.floor(Math.random() * 1000);
}
getRandomNum();

function App() {
  const [artData, setArtData] = useState(null);

  const getArtData = async () => {
    const url = `https://api.harvardartmuseums.org/image?size=10&page=${randomNum}?apikey=${process.env.API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArtData(data);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getArtData();
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
    
    </div>
  );
}

export default App;
