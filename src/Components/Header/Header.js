import React from 'react';
import Allinventoris from '../Product/Allinventoris';
import Banner from './Banner/Banner';
import Navbarnav from './Navbar/Navbar';


const Header = () => {
    return (
        <div>
            <Navbarnav/>
            <Banner/>
            <Allinventoris/>           
        </div>
    );
};

export default Header;