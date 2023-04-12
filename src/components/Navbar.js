import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [color, setColor] = useState(false);

    return (
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/speisekarte'>Speisekarte</Link>
            <Link to='/kontakt'>Kontakt</Link>
            <Link to='/galerie' onClick={() => setColor(!color)} style={{ color: color ? "red" : "indigo" }} >Galerie</Link>
        </nav>
    );
}

export default Navbar;