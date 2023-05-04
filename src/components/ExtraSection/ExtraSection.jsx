import React from 'react';

const ExtraSection = () => {
    return (
        <div className='my-3'>
            <h1 className='text-center fw-bold text-decoration-underline'>How we <span className='text-danger'>Serve</span> you</h1>
            <div className='mt-3 d-flex flex-column flex-md-row justify-content-center align-items-center text-center'>
                <div className='d-flex flex-column align-items-center gap-1'>
                    <img src="https://i.ibb.co/QC9x1PK/9326453-11166-removebg-preview.png" alt="" className='img-fluid bg-dark rounded-circle w-50 border border-5 border-warning border-top-0'/>
                    <h6 className='fw-bold'>Automated Packaging</h6>
                    <p>100% environment friendly packaging</p>
                </div>
                <div className='d-flex flex-column align-items-center gap-1'>
                    <img src="https://i.ibb.co/dW15M4r/25319329-m011t191-delivery-paper-box-mockup-05-removebg-preview.png" alt="" className='img-fluid bg-dark rounded-circle w-50 border border-5 border-warning border-top-0'/>
                    <h6 className='fw-bold'>Packed with Love</h6>
                    <p>We deliver the best experience</p>
                </div>
                <div className='d-flex flex-column align-items-center gap-1'>
                    <img src="https://i.ibb.co/kBms65m/top-view-cooked-bell-peppers-with-fried-sausages-inside-plate-dark-green-surface-removebg-preview.png" alt="" className='img-fluid bg-dark rounded-circle w-50 border border-5 border-warning border-top-0'/>
                    <h6 className='fw-bold'>Serve hot Appetite</h6>
                    <p>Promise to deliver within 30mins</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;