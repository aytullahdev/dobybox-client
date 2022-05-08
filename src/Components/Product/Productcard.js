import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Productcard = ({name,id,desc,price,quan,supplier,img}) => {
  return (
    <motion.div 
     initial={{opacity:0,x:'100vw'}}
     animate={{opacity:1,x:0}}
     transition={{delay:0.5}}
    className="mx-auto w-full ">
      <div className="card  bg-base-100 dark:bg-slate-600 shadow-xl">
        <figure>
          <img
            src={img}
            alt={name}
            className="h-60"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{desc.substring(0,20)}...</p>
          <div className="badge badge-outline badge-secondary">Supplier: <span className="px-2">{supplier}</span></div>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">Price: $<span>{price}</span></div>
          </div>
          
          <div className="card-actions flex justify-between">
            <div className="flex flex-col space-y-2">
              
              <div>
              <div>
              <span className="badge badge-outline badge-success badge-lg">Quantity:  <span className="px-2"> {quan}</span></span>
              </div>  
              <div>
              { quan===0 && <span className="bg-orange-500 text-white  py-1 block m-1 rounded text-center text-xs">SOLD OUT</span>}
              </div>
              </div>
            </div>
            <div>
              <Link to={`/inventory/${id}`} className="btn btn-primary">UPDATE</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Productcard;
