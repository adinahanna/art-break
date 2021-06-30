export default function Studio({ studioImg })  {
    
   
    return (
        <section className="main-home-container">
            <div className='home-container'>
                <h1 className='welcome'>Welcome to the Studio!</h1>
                <div className='studio-img-container'>
                    <div
                        style={{
                            backgroundColor: 'black',
                            color: 'white',
                            height: '254px',
                            width: '254px',
                        }}>canvas placeholder
                    </div>
                    <div>
                         <img src={studioImg} alt='null' className='studio-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}