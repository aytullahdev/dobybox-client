import React from 'react';

const Banner = () => {
    return (
        <div className='px-5 shadow-sm dark:bg-gray-600 lg:px-10 py-10 bg-green-300 '>
        <h1 className='bg-green-300 dark:bg-transparent  text-white text-xl lg:text-4xl uppercase'> Manage  stocks And Sell With One STEP
        </h1>
        <p className='text-2xl uppercase py-2 dark:text-white'>Make your Bussiness Grow</p>
        <button className='btn btn-success dark:btn-secondary text-white shadow-lg my-2'>STOCK YOUR ITEM</button>
        </div>
    );
};

export default Banner;