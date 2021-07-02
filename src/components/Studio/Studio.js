import Canvas from "../Canvas/Canvas";

export default function Studio({ studioImg })  {
        return (
            <section className="main-home-container">
                <div className='studio-container'>
                    <h1 className='welcome'>Welcome to the Studio!</h1>
                    <div className='studio-img-container'>
                        <div>
                            <Canvas />
                        </div>
                        <div>
                            <img src={studioImg} alt='null' className='studio-canvas' />
                        </div>
                    </div>
                </div>
            </section>
            )
        }
