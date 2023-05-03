import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { FaHandPointLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Chefs.css';

const Chefs = ({ chef }) => {

    const { chefName, chefPic, yearsOfExperience, Likes, numberOfRecipes, id } = chef;

    return (
        <Col>
            <Card>
                <div className='bg-danger bg-opacity-75 rounded'>
                    <Card.Img variant="top" src={chefPic} className='img-fluid w-75 chef-image' />
                </div>
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                        {yearsOfExperience} <br />
                        Recipes: {numberOfRecipes} <br />
                        Likes: {Likes} <FaHandPointLeft></FaHandPointLeft>
                    </Card.Text>
                    <Button variant="danger"><Link to={`/chef/${id}`} className='text-decoration-none text-white'>View Recipes</Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Chefs;