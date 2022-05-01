import React from 'react';
import useGetproduct from '../Hooks/useGetproduct';

const Manaageallproduct = () => {
    const [products]= useGetproduct('https://young-beach-37066.herokuapp.com/products');
    return (        
        <div>
        {console.log(products)};
            Managee All;
        </div>
    );
};

export default Manaageallproduct; 