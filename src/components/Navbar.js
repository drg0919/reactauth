import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <ul className="navbar__list">
                    <Link to="/"><li className="navbar__item navbar__item--brand">
                        Home
                    </li></Link>
                    <li className="navbar__item"><Link to="/protected-route-1">Protected Route 1</Link></li>
                    <li className="navbar__item"><Link to="/protected-route-2">Protected Route 2</Link></li>
                    <li className="navbar__item"><Link to="/login">Login</Link></li>
                    <li className="navbar__item"><Link to="/public-route">Public Route</Link></li>
                    <Logout />
                </ul>
            </div>
        )
    }
}

export default Navbar;