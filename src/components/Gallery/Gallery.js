import { useState, useEffect } from "react";

export default function Gallery() {
    const [artData, setArtData] = useState([]);

    let randomNum;
    const getRandomNum = () => {
      randomNum = Math.floor(Math.random() * 1000);
    }
    getRandomNum();
   
    const getArtData = async () => {
      const url = `https://api.harvardartmuseums.org/image?size=10&page=${randomNum}&apikey=${process.env.REACT_APP_API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArtData(data.records); 
    } catch(err) {
        console.error(err);
    }
}

    return (
        <div className="gallery-container">
            <button onClick={getArtData}>Click to generate random artwork</button>
            <div className="art-container">
                {artData.map((artObject, index) => {
                    return (
                        <div className='art-img' key={index}>
                            <img src={artObject.baseimageurl} alt='art image' />
                        </div>
                        )
                    })}
                </div>            
        </div>
    ) 
}
