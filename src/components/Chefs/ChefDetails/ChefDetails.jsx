import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHandPointLeft } from 'react-icons/fa';
import Recipes from '../Recipes/Recipes';
import Row from 'react-bootstrap/Row';

const ChefDetails = () => {

    const chefDetails = useLoaderData();
    // console.log(chefDetails);
    const { chefName, chefPic, yearsOfExperience, Likes, numberOfRecipes, description, notableRecipe } = chefDetails;

    return (
        <div className='my-3'>
            <div className='d-flex align-items-center bg-warning bg-opacity-25 p-3 rounded'>
                <div className='h-100 w-100 bg-warning rounded border border-4 border-dark border-start-0 border-end-0'>
                    <img src={chefPic} alt="" className='img-fluid' />
                </div>
                <div className='ms-5 bg-danger bg-opacity-25 p-3 rounded border border-5 border-danger border-top-0 border-bottom-0'>
                    <h2>{chefName}</h2>
                    <p>{yearsOfExperience}</p>
                    <p>Recipes: {numberOfRecipes}</p>
                    <p>Likes: {Likes} <FaHandPointLeft></FaHandPointLeft></p>
                    <h5>Description:</h5>
                    <p>{description}</p>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-center text-decoration-underline mb-5'>Recipes of {chefName}</h1>
                <Row sm={1} md={3} className="g-4">
                    {
                        notableRecipe.map(recipe => <Recipes key={recipe.id} recipe={recipe}></Recipes>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ChefDetails;