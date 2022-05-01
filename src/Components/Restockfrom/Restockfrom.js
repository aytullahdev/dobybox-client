import React from 'react';
import { useState } from 'react';
const Restockfrom = ({restockItem}) => {
    const [newquantity, setNewquantity] = useState(0)
    return (
        <div className='py-4 flex justify-center'>
            <input type="text" placeholder="New Quantity" class="input w-full max-w-xs input-bordered"
            onChange={(e)=>{
                setNewquantity(e.target.value)
               
            }}></input>
            <button className='btn btn-primary ml-2'
            onClick={()=>{
                restockItem(newquantity);
            }}
            >ADD</button>
             <button className='btn btn-warning text-white ml-2'
            onClick={()=>{
                restockItem(-1*newquantity);
            }}
            >DROP</button>
        </div>
    );
};

export default Restockfrom;