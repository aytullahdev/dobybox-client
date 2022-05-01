import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
const Restockfrom = ({restockItem}) => {
    const [newquantity, setNewquantity] = useState(0)
    return (
        <div className='py-4 flex justify-center'>
            <input type="number" min={0} placeholder="New Quantity" className="input w-full max-w-xs input-bordered"
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
                if(newquantity<0){
                    toast("INVALID NUMBER");
                    return;
                }
                restockItem(-1*newquantity);
            }}
            >DROP</button>
        </div>
    );
};

export default Restockfrom;