import React from 'react';
import { useEffect,useState } from 'react';
const Statussection = () => {
    const [totalpro,setTotalpro] = useState(0);
    useEffect(() => {
        fetch("https://young-beach-37066.herokuapp.com/productcount/", {
          headers: {
            "content-type": "application/json",
            authorization: `bearear ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setTotalpro(data.count);
            
          });
      }, []);
    return (
        <div className='grid grid-cols-2 dark:text-white lg:grid-cols-4 gap-4 my-10 mx-10'>
            <div className='flex space-x-5  justify-center w-full'>
                <img className='w-10 ' src="https://3zbp9d3ee1ru1ps51i53b651-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/counter-icon1-1.png" alt="" />
                <div>
                    <h2 className='text-xl p-2 font-bold'>234</h2>
                    <p className='text-xs lg:text-xl uppercase font-semibold'>Packages Delivered</p>
                </div>
            </div>
            <div className='flex space-x-5  justify-center w-full'>
                <img className='w-10 ' src="https://3zbp9d3ee1ru1ps51i53b651-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/counter-icon2-1.png" alt="" />
                <div>
                    <h2 className='text-xl p-2 font-bold'>2314</h2>
                    <p className='text-xs lg:text-xl uppercase font-semibold'>Repeat Customer</p>
                </div>
            </div>
            <div className='flex space-x-5  justify-center w-full'>
                <img className='w-10 ' src="https://3zbp9d3ee1ru1ps51i53b651-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/counter-icon3-2.png" alt="" />
                <div>
                    <h2 className='text-xl p-2 font-bold'>1234</h2>
                    <p className='text-xs lg:text-xl uppercase font-semibold'>Our Happy Clients</p>
                </div>
            </div>
            <div className='flex justify-center w-full'>
                <img className='w-10 ' src="https://3zbp9d3ee1ru1ps51i53b651-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/counter-icon4-1.png" alt="" />
                <div>
                    <h2 className='text-xl p-2 font-bold'>{totalpro}</h2>
                    <p className='text-xs lg:text-xl uppercase font-semibold'>Commercial Goods</p>
                </div>
            </div>
        </div>
    );
};

export default Statussection;