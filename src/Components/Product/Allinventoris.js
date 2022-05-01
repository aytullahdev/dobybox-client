import React from "react";
import Productcard from "./Productcard";
import { useState,useEffect } from "react";
import Progress from "../Header/Progress";
const Allinventoris = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://young-beach-37066.herokuapp.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <div className="px-5 py-5 lg:px-10">
      <div className="py-4">
          <h1 className="text-3xl">
            ALL PRODUCTS
          </h1>
          <input type="text" className="input my-2 input-bordered w-full max-w-xs text-black" placeholder="Search Supplier" />
      </div>
      {!products.length>0 && <Progress/>}
      {products.length>0 &&
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
         {products.length>0 && products.map((sp)=>{
            return (
              <Productcard key={sp._id} id={sp._id} name={sp.name} desc={sp.desc} price={sp.price} supplier={sp.supplier} quan={sp.quan} img={sp.img} />
         )
         })}
      </div>
      }
    </div>
  );
};

export default Allinventoris;
