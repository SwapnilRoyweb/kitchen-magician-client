import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaHandPointLeft } from 'react-icons/fa';

const Chefs = ({ chef }) => {

    const { chefName, chefPic, yearsOfExperience, Likes, numberOfRecipes, id } = chef;

    return (
        <Card>
            <div className='bg-danger bg-opacity-75 mt-2 rounded w-100 h-100'>
                <Card.Img variant="top" src={chefPic} className='img-fluid w-75 h-100' />
            </div>
            <Card.Body>
                <Card.Title>{chefName}</Card.Title>
                <Card.Text>
                    <p>{yearsOfExperience}</p>
                    <p>Recipes: {numberOfRecipes}</p>
                    <p>Likes: {Likes} <FaHandPointLeft></FaHandPointLeft></p>
                </Card.Text>
                <Button variant="danger">View Recipes</Button>
            </Card.Body>
        </Card>
    );
};

export default Chefs;