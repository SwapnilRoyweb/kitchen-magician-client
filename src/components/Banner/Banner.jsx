import React from 'react';
import './Banner.css';
import { FaHandPointRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='my-3 d-flex flex-column flex-lg-row align-items-center justify-content-evenly gap-2 bg-warning bg-opacity-50 rounded-pill border border-danger border-3 border-start-0 border-end-0 py-1'>
            <div className='ms-5 mt-4'>
                <h1 className='text-start fw-bold'>Fastest <br /> <span className='text-danger'>Delivery</span> & <br /> Tasty <span className='text-danger'>Food</span></h1>
                <div className='bg-warning bg-opacity-75 px-5 py-2 ms-5 mt-4 text-center rounded-pill border border-5 border-danger border-end-0 border-top-0'>
                    <h5><FaHandPointRight></FaHandPointRight> Good Taste</h5>
                    <h5><FaHandPointRight></FaHandPointRight> 24/7 Open</h5>
                    <h5><FaHandPointRight></FaHandPointRight> Best Cuisine</h5>
                    <h5><FaHandPointRight></FaHandPointRight> Event Catering</h5>
                </div>
            </div>
            <img src="https://i.ibb.co/z4xf9TX/cheerful-young-cook-uniform-holding-salad-pointing-you-removebg-preview.png" alt="" />

        </div>
    );
};

export default Banner;