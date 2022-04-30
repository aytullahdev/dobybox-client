import React from "react";
import { Link } from "react-router-dom";
const Productcard = ({name,id,desc,price,quan,supplier,img}) => {
  return (
    <div className="mx-auto">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt={name}
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {name}!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>{desc}?</p>
          <div class="card-actions justify-start">
            <div class="badge badge-outline">Price: $<span>{price}</span></div>
          </div>
          <div className="card-actions flex justify-between">
            <div className="flex flex-col space-y-2">
              <div class="badge badge-outline badge-secondary">Supplier: <span className="px-2">{supplier}</span></div>
              <div>
              <div>
              <span class="badge badge-outline badge-success badge-lg">Quantity:  <span className="px-2"> {quan}</span></span>
              </div>  
              </div>
            </div>
            <div>
              <Link to={`inventory/${id}`} class="btn btn-primary">UPDATE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
