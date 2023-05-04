import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaGooglePlusSquare, FaGithubSquare } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('');

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(from);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            // console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }

    return (
        <div className='my-5 d-flex flex-column justify-content-center align-items-center'>
            <h2>Please Sign In !!!</h2>
            <Form className='w-50 bg-dark p-4 text-white rounded mt-2' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <div className='d-flex gap-2 flex-column mb-2'>
                    <button className='btn btn-success' onClick={handleGoogleSignIn}><FaGooglePlusSquare></FaGooglePlusSquare> Log in with Google</button>
                    <button className='btn btn-warning'><FaGithubSquare></FaGithubSquare> Log in with Github</button>
                </div>
                <p>Don't have an Account? <Link to='/register' className='text-decoration-none'>Sign Up</Link></p>
                <p className='text-danger'>{error}</p>
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;