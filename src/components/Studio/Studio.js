import Canvas from "../Canvas/Canvas";

export default function Studio({ studioImg })  {
    
    return (
        <section className="main-home-container">
            <div className='home-container'>
                <h1 className='welcome'>Welcome to the Studio!</h1>
                <div className='studio-img-container'>
                    <div>
                        {/* <Canvas /> */}
                    </div>
                    <div>
                         <img src={studioImg} alt='null' className='studio-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}