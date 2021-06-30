import { useEffect, useState } from "react";

export default function Studio({ studioImg })  {
    
   
    return (
        <section className="main-home-container">
            <div className='home-container'>
                <h1 className='welcome'>Welcome to the Studio!</h1>
                <div
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        height: '254px',
                        margin: '0 auto',
                        marginTop: '25px',
                        width: '254px',
                    }}>canvas placeholder
                </div>
                <div>
                     <img src={studioImg} alt='null' />
                </div>
            </div>
        </section>
    )
}