import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const SiteNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container className="mobile-logo">
                <Navbar.Brand href="#home">
                    <div className="brand">
                        <h4 className="text-white pt-3">Logo</h4>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#">Who we are</Nav.Link>
                        <Nav.Link href='#we-do'>What we do</Nav.Link>
                        <Nav.Link href="#">How we do</Nav.Link>
                        <Nav.Link href="#contact" className="contact-btn">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default SiteNavbar;