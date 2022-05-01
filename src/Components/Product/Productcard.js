import React from "react";
import { Link } from "react-router-dom";
const Productcard = ({name,id,desc,price,quan,supplier,img}) => {
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl">
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
          <p>{desc}?</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">Price: $<span>{price}</span></div>
          </div>
          <div className="card-actions flex justify-between">
            <div className="flex flex-col space-y-2">
              <div className="badge badge-outline badge-secondary">Supplier: <span className="px-2">{supplier}</span></div>
              <div>
              <div>
              <span className="badge badge-outline badge-success badge-lg">Quantity:  <span className="px-2"> {quan}</span></span>
              </div>  
              </div>
            </div>
            <div>
              <Link to={`inventory/${id}`} className="btn btn-primary">UPDATE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
