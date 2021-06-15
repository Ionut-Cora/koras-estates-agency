import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

        return(
            <div className="full-navi">
                <Navbar fixed="top" bg="dark" expand="lg">
                    <div className="navi container d-flex">
                        <Link to="/" id="logo">Koras</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="nav-links" to="/">Home</Link>
                                <Link className="nav-links" to="/buy">Buy</Link>
                                <Link className="nav-links" to="/rent">Rent</Link>
                                <Link className="nav-links" to="/about">About</Link>
                                <Link className="nav-links" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        )
}

export default Header;
