import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs/Chefs';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {

    const chefs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='my-5'>
                <Row sm={1} md={2} lg={3} className="g-3">
                    {
                        chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;