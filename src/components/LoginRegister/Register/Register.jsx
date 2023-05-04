import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');

    const {createUser, updateInformation} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photo.value;
        // console.log(name, email, password, photoURL);
        
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })

        updateInformation({displayName: name, photoUrl: photoURL})
        .then(() => console.log(name, photoURL))
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }

    return (
        <div className='my-5 d-flex flex-column justify-content-center align-items-center'>
            <h2>Please Register !!!</h2>
            <Form className='w-50 bg-dark p-4 text-white rounded mt-2' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="photo URL" required />
                </Form.Group>
                <p>Already have an Account? <Link to='/login' className='text-decoration-none'>Sign In</Link></p>
                <p className='text-danger'>{error}</p>
                <Button variant="danger" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;