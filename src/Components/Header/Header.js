import React from 'react';
import { Link } from 'react-router-dom';
import Allinventoris from '../Product/Allinventoris';
import Banner from './Banner/Banner';


const Header = () => {
    return (
        <div>
            
            <Banner/>
            <Allinventoris/> 
            <div className='flex flex-row items-center justify-center py-5'>
                <Link to="/manageinventory" className='btn btn-lg btn-warning mx-auto text-white'>Manage Products</Link>
            </div>          
        </div>
    );
};

export default Header;