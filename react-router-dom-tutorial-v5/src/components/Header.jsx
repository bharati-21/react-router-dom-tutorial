import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <h1 className="hero">React Router DOM Tutorial</h1>
            <ul>
                {/* Using a will refresh the page. To avoid this use Link component */}
                {/* <li><a href="/">Home</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li> */}

                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
        </header>
    )
}

export default Header;
