import React from 'react';
import { useNavigation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
    return <div className='d-flex justify-content-center'><Spinner animation="grow" variant="dark" /></div>
    }
};

export default Loader;