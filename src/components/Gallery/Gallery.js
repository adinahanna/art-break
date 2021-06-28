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

    if (!artData) {
        return <p>loading...</p>
    }

    const artArray = artData.records;
    console.log(artArray)

    return (
        <section className='art-container'>
           {/* {artArray.map((artObject, index) => {
               return (
                <div className='art-img'>
                    <img src={artObject.records[index].baseimageurl} alt='art image' />
                </div>
               )
           })} */}
        </section>
    ) 
}
