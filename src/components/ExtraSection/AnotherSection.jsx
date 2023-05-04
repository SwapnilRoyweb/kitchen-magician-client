import React from 'react';
import './AnotherSection.css'

const AnotherSection = () => {
    return (
        <div className='my-3 bg-dark bg-opacity-25 text-dark py-2 d-flex flex-column flex-md-row align-items-center justify-content-evenly rounded-pill border border-5 border-danger border-top-0 bg-last-img'>
            <h1 className='ms-3 fw-bold'><span className='text-danger'>Fastest</span> & <span className='text-danger'>Tasty</span> <br /> food delivery in <br /> <span className='text-success'>town</span></h1>
            <img src="https://i.ibb.co/jVGSSFy/top-close-up-view-spices-colorful-spices-pilaf-board-garlic-removebg-preview.png" alt="" className='img-fluid w-50 bg-warning bg-opacity-50 p-2 rounded-circle'/>
        </div>
    );
};

export default AnotherSection;