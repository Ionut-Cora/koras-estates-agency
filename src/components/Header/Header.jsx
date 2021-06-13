import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return(
        <div>
                <div className="container d-flex">
                    <Link to="/" id="logo">Koras</Link>
                    <Link to="/">Home</Link>
                    <Link to="/buy">Buy</Link>
                    <Link to="/rent">Rent</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
        </div>
    )
}

export default Header;
