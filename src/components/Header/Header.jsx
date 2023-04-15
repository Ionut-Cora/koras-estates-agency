import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
    return(
        <Navbar className='position-absolute w-100' id="top-nav" variant='dark' expand="lg">
            <Container>
                <Link to="/" className="text-light text-decoration-none" id="logo">Koras</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
                    <Nav>
                        <Link className="nav-link active" to="/">Home</Link>
                        <Link className="nav-link" to="/buy">Buy</Link>
                        <Link className="nav-link" to="/rent">Rent</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
