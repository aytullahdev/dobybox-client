import React from 'react';
import { Link } from 'react-router-dom';
import Allinventoris from '../Product/Allinventoris';
import Banner from './Banner/Banner';
import Statussection from './Extrasection/Statussection';
import Services from './Extrasection/Services'

const Header = () => {
    return (
        <div>
            
            <Banner/>
            <Allinventoris url="https://young-beach-37066.herokuapp.com/products/?limit=6"/> 
            <Statussection/>
            <Services/>
                     
        </div>
    );
};

export default Header;