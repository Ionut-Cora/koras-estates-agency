import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className="container d-flex">
                    <Navbar.Brand href="/koras-estates-agency/" id="logo">Koras</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/koras-estates-agency/">Home</Nav.Link>
                        <Nav.Link href="/koras-estates-agency/buy">Buy</Nav.Link>
                        <Nav.Link href="/koras-estates-agency/rent">Rent</Nav.Link>
                        <Nav.Link href="/koras-estates-agency/about">About</Nav.Link>
                        <Nav.Link href="/koras-estates-agency/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;
