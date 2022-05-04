import React from 'react';
import { Link } from 'react-router-dom';
import Allinventoris from '../Product/Allinventoris';
import Banner from './Banner/Banner';


const Header = () => {
    return (
        <div>
            
            <Banner/>
            <Allinventoris/> 
                     
        </div>
    );
};

export default Header;