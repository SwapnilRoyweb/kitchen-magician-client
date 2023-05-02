import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaCookieBite } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mx-5 fixed-bottom'>
            <div className='d-flex flex-row gap-3 align-items-center justify-content-evenly bg-dark text-white p-3 rounded-top'>
                <h3>Kitchen_<span className='text-danger'>_Magician</span></h3>
                <p>@Copyright observation/<span className='text-danger'>2023</span></p>
                <p>Contact us on: <FaFacebook></FaFacebook> <FaInstagramSquare></FaInstagramSquare> <FaTwitter></FaTwitter> <FaCookieBite></FaCookieBite> </p>
            </div>
        </div>
    );
};

export default Footer;