import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Outlet } from 'react-router-dom';

import './navbar.css';

const NavigationBar = () => {

    return (
        <div>
            <Container className="nav-container">
                <Navbar className="nav-bar" bg="nav-bar" variant="dark" fixed="top" expand="sm" collapseOnSelect>
                    {/* Logo style */}
                    <Link to="/" className="logo-link" style={{ zIndex: "0" }}>
                        <img className="logo" src={require("../Images/C-Cube.png")} alt="C-cube" />
                    </Link>
                    {/* Navigation bar style, hamburger display for smaller devices */}
                    <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="nav-collapse">

                        <Nav className="nav">
                            <Nav.Link className="nav-link" as={Link} to="/" eventKey={0}>Home</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/about" eventKey={1}>About</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/events" eventKey={2}>Events</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/contact" eventKey={3}>Contact</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/donate" eventKey={4}>Donate</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <Outlet />
        </div>
    );
}

export default NavigationBar;