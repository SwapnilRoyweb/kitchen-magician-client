import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';


const Header = () => {
    return (
        <div className='sticky-top'>
            <Navbar className='rounded-bottom' bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/" className='d-flex gap-2 align-items-center'>
                        <img src="https://i.ibb.co/Z6qfHN3/799974-18914-NRXLZW.jpg" alt="" className='navbar-logo rounded-circle' />
                        <h6>Kitchen_<span className='text-danger'>_Magician</span></h6>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className='d-flex flex-grow-1 justify-content-center'>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#link">About</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <div>
                                <img title='Swapnil' className='profile-pic rounded-circle' src="https://i.ibb.co/DYQ0b5M/2870602-6411.jpg" alt="" />
                                <button className='btn btn-danger ms-2'>Login</button>
                            </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;