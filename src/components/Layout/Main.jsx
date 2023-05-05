import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Loader from '../Shared/Loader/Loader';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Loader></Loader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;