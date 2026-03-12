import React from 'react';
import Navbar from '../componants/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../componants/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;