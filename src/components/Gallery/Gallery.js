import { useState, useEffect } from "react";

export default function Gallery() {
    const [artData, setArtData] = useState(null);

    let randomNum;
    const getRandomNum = () => {
      randomNum = Math.floor(Math.random() * 500);
    }
    getRandomNum();
   
    const getArtData = async () => {
      const url = `https://api.harvardartmuseums.org/image?size=10&page=${randomNum}&apikey=${process.env.REACT_APP_API_KEY}`;
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

    const handleClick = (event) => {
        event.preventDefault();
        const artArray = artData.records;
        return (
            <div className='art-container'>
                {artArray.map((artObject, index) => {
                    return (
                        <div className='art-img' key={index}>
                        <img src={artObject.baseimageurl} alt='art image' />
                        </div>
                        )
                })}
            </div>
        )}

    return (
        <main>
            <button onClick={handleClick}>Click to generate random artwork!</button>            
        </main>
    ) 
}
