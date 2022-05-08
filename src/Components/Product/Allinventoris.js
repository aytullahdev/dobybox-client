import React from "react";
import Productcard from "./Productcard";
import Progress from "../Header/Progress";
import { Link } from "react-router-dom";
import useGetproduct from "../Hooks/useGetproduct";
const Allinventoris = ({url}) => {
  const [products] = useGetproduct(
     url
  );
  return (
    <div className="px-5 dark:bg-gray-700 dark:text-white py-5 lg:px-10 min-h-screen overflow-x-hidden relative">
      <div className="py-4">
        <h1 className="text-3xl">ALL PRODUCTS</h1>
        <input
          type="text"
          className="input my-2 input-bordered w-full max-w-xs text-black"
          placeholder="Search Supplier"
        />
      </div>
      {products.length === 0 && <div>No Product</div>}
      {products.length ===0 && <Progress/>}
      {products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {products.length > 0 &&
            products.map((sp) => {
              return (
                <Productcard
                  key={sp._id}
                  id={sp._id}
                  name={sp.name}
                  desc={sp.desc}
                  price={sp.price}
                  supplier={sp.supplier}
                  quan={sp.quan}
                  img={sp.img}
                />
              );
            })}
        </div>
      )}
      <div className="flex flex-row items-center justify-center py-5">
        <Link
          to="/manageinventory"
          className="btn btn-lg btn-warning mx-auto text-white"
        >
          Manage Products
        </Link>
      </div>
    </div>
  );
};

export default Allinventoris;
