import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css';


const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }

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
                        <Nav className='d-flex flex-grow-1 justify-content-center gap-3'>
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to='/blog'>Blog</ActiveLink>
                            <ActiveLink to='/About'>About</ActiveLink>
                        </Nav>
                        <div className='d-flex align-items-center gap-2'>
                            {user && <img title={user.displayName} className='profile-pic rounded-circle' src={user.photoURL} alt="" />}
                            {user ? <button className='btn btn-danger' onClick={handleLogout}>Logout</button> : <button className='btn btn-danger ms-2'><Link to='/login' className='text-decoration-none text-white'>Sign In</Link></button>}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;