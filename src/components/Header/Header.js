import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/gallery" className="nav-link">Gallery</Link>
                <Link to="/" className="nav-title">ART BREAK</Link>
                <Link to="/studio" className="nav-link">Studio</Link>
            </nav>
        </header>
    )
}