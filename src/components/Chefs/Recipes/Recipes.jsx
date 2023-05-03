import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ReactStarsRating from 'react-awesome-stars-rating';

const Recipes = ({ recipe }) => {

    const { recipeName, cookingMethod, rating, ingredients } = recipe;

    return (
        <Col>
            <Card border="warning" style={{ width: '18rem', height: '25rem'}}>
                <Card.Header>Ratings: <ReactStarsRating value={rating} /> {rating}</Card.Header>
                <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Card.Text>
                        {cookingMethod}
                    </Card.Text>
                    <h5>Ingredients:</h5>
                    <ul>
                        {
                            ingredients.map(ingredient => <li>{ingredient}</li>)
                        }
                    </ul>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Recipes;