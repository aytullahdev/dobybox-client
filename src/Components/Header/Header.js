import React from 'react';
import { Link } from 'react-router-dom';
import Allinventoris from '../Product/Allinventoris';
import Banner from './Banner/Banner';


const Header = () => {
    return (
        <div>
            
            <Banner/>
            <Allinventoris url="https://young-beach-37066.herokuapp.com/products/?limit=6"/> 
                     
        </div>
    );
};

export default Header;