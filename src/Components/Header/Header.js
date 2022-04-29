import React from 'react';
import Productcard from '../Product/Productcard';
import Banner from './Banner/Banner';
import Navbarnav from './Navbar/Navbar';


const Header = () => {
    return (
        <div>
            <Navbarnav/>
            <Banner/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 py-5 lg:px-10'>
                <Productcard/>
                <Productcard/>
                <Productcard/>
            </div>
        </div>
    );
};

export default Header;