import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container d-flex">
                    <Navbar.Brand href="/" id="logo">Koras</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/#/">Home</Nav.Link>
                        <Nav.Link href="/#/buy">Buy</Nav.Link>
                        <Nav.Link href="/#/rent">Rent</Nav.Link>
                        <Nav.Link href="/#/about">About</Nav.Link>
                        <Nav.Link href="/#/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;
