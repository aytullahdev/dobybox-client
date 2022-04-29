import React from "react";
import Productcard from "./Productcard";
const Allinventoris = () => {
  return (
    <div className="px-5 py-5 lg:px-10">
      <div className="py-4">
          <h1 className="text-3xl">
            ALL PRODUCTS
          </h1>
          <input type="text" className="input my-2 input-bordered w-full max-w-xs text-black" placeholder="Search Supplier" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
    </div>
  );
};

export default Allinventoris;
