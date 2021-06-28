export default function Home() {
    return (
        <div className="home-container">
            <h1 className='welcome'>Welcome to Art Break!</h1>
                <p className='welcome-par'>Need an art break? Head to the gallery to view artwork from the Harvard Art Museums collection. Click any image to visit the art studio and test your drawing skills.
                </p>
                <div   
                style={{
                    backgroundColor: 'black',
                    width: '170px',
                    height: '170px',
                    margin: '0 auto',
                    marginTop: '25px'
                }}>
                </div>
                <div
                style={{
                    backgroundColor: 'black',
                    width: '170px',
                    height: '170px',
                    margin: '0 auto',
                    marginTop: '25px'
                }}>
                </div>
        </div>
    )
}