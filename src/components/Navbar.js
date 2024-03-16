import React from 'react';
import { Link } from 'react-router-dom';
import '../login.css';

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className='navItem'>
                <Link to="/map" style={{ textDecoration: 'none', color: 'inherit' }}>Map</Link>
            </div>
            <div className='navItem'>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Events</Link>
            </div>
            <div className='navItem'>
                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
            </div>
            <div className='navItem'>
                <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
            </div>
        </div>
    )
}

export default Navbar;
