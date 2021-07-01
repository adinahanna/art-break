import { useState } from "react";
import { Link } from "react-router-dom";

export default function Gallery({ setStudioImg }) {
    const [artData, setArtData] = useState([]);

    const apiKey = 'a12dc667-7bf0-4aef-9c2b-e09b701d5804';

    let randomNum;
    const getRandomNum = () => {
      randomNum = Math.floor(Math.random() * 1000);
    }
    getRandomNum();
   
    const getArtData = async () => {
      const url = `https://api.harvardartmuseums.org/image?size=10&page=${randomNum}&apikey=${apiKey}`;
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
                        <div className='art-img' key={index} >
                            <Link 
                                to={'/studio/'} onClick={() => setStudioImg(artObject.baseimageurl)} >
                                    <img src={artObject.baseimageurl} alt={artObject.alttext} />
                            </Link>
                        </div>
                            )
                    })}       
            </div>            
        </div>
    ) 
}
