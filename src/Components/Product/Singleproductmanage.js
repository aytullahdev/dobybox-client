import React from "react";
import Productcard from "./Productcard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Restockfrom from "../Restockfrom/Restockfrom";
const Singleproductmanage = () => {
  const id = useParams().id;
  const [showrestock, setShowrestock] = useState(false);
  const orderItem = (pid) => {
    console.log(pid);
  };
  const restockItem = (quan) => {
    console.log(quan);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto">
        <div className="mx-auto">
          <div class="card w-96 shadow-md bg-base-100 ">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-start">
                <div class="badge badge-outline">
                  Price: $<span>120</span>
                </div>
              </div>
              <div className="card-actions">
                <div className="grid grid-cols-2">
                  <div class="badge badge-outline mx-auto badge-secondary">
                    Supplier: <span className="px-2">AYT</span>
                  </div>
                  <div className="mx-auto">
                    <div>
                      <span class="badge badge-outline badge-success badge-lg">
                        Quantity: <span className="px-2"> 20</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto">
          <div className=" flex justify-center mt-4 space-x-10">
            <div>
              {!showrestock && (
                <button
                  className="btn btn-success text-white btn-lg"
                  onClick={() => {
                    orderItem(id);
                  }}
                >
                  ORDER
                </button>
              )}
            </div>
            <div>
              <button
                className="btn btn-secondary text-white btn-lg"
                onClick={() => {
                  setShowrestock(!showrestock);
                }}
              >
               {showrestock?'HIDE':'Restock'}
              </button>
            </div>
          </div>

          {showrestock && <Restockfrom restockItem={restockItem}/>}
        </div>
      </div>
    </div>
  );
};

export default Singleproductmanage;
