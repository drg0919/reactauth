import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul className="navbar__list">
                    <Link to="/"><li className="navbar__item navbar__item--brand">
                        Home
                    </li></Link>
                    <li className="navbar__item"><Link to="/protected-route">Protected Route</Link></li>
                    <li className="navbar__item"><Link to="/login">Login</Link></li>
                    <li className="navbar__item"><Link to="/public-route">Public Route</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;