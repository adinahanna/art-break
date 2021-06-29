import { useState, useEffect } from "react";

export default function Gallery() {
    const [artData, setArtData] = useState([]);

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
        console.log(data);
        setArtData(data.records);
        console.log(artData);
    } catch(err) {
        console.error(err);
    }
}

    return (
        <section>
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
        </section>
    ) 
}
