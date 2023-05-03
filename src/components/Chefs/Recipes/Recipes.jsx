import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ReactStarsRating from 'react-awesome-stars-rating';
import { FaSmileWink } from 'react-icons/fa';

const Recipes = ({ recipe }) => {

    const { recipeName, cookingMethod, rating, ingredients } = recipe;

    return (
        <Col>
            <Card border="warning" style={{ width: '18rem', height: '28rem'}}>
                <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Card.Text>
                        {cookingMethod} <br /> <br />
                        Ratings: <ReactStarsRating value={rating} /> {rating}
                    </Card.Text>
                    <h5>Ingredients:</h5>
                    <ul>
                        {
                            ingredients.map(ingredient => <li>{ingredient}</li>)
                        }
                    </ul>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center'><button className='btn btn-warning'><FaSmileWink></FaSmileWink> Favorite</button></Card.Footer>
            </Card>
        </Col>
    );
};

export default Recipes;