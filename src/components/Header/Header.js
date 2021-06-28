import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <nav>
                <Link to="/gallery">Gallery</Link>
                <h1>Art Break</h1>
                <Link to="/studio">Studio</Link>
            </nav>
        </header>
    )
}