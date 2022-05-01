import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Restockfrom from "../Restockfrom/Restockfrom";
const Singleproductmanage = () => {
  const id = useParams().id;
  const [sp, setSp] = useState(null);
  const [showrestock, setShowrestock] = useState(false);
  const updateDb=(newquan)=>{
    const data ={_id:sp._id,quan:newquan};
    setSp({...sp,quan:newquan});
    console.log(data);
    fetch("https://young-beach-37066.herokuapp.com/update/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  const orderItem = () => {
    setSp({...sp,quan:sp.quan-1});
    updateDb(sp.quan-1);
  };
  const restockItem = (newquan) => {
    
     updateDb(newquan);
   
  };
  
  

  useEffect(() => {
    fetch(`https://young-beach-37066.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSp(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto">
        {sp && (
          <div>
            <div className="mx-auto">
              <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={sp.img} alt={sp.name} />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    {sp.name}!<div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{sp.desc}?</p>
                  <div class="card-actions justify-start">
                    <div class="badge badge-outline">
                      Price: $<span>{sp.price}</span>
                    </div>
                  </div>
                  <div className="card-actions flex justify-between">
                    <div className="flex flex-col space-y-2">
                      <div class="badge badge-outline badge-secondary">
                        Supplier: <span className="px-2">{sp.supplier}</span>
                      </div>
                      <div>
                        <div>
                          <span class="badge badge-outline badge-success badge-lg">
                            Quantity: <span className="px-2"> {sp.quan}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
                {showrestock ? "HIDE" : "Restock"}
              </button>
            </div>
          </div>

          {showrestock && <Restockfrom restockItem={restockItem} />}
        </div>
      </div>
    </div>
  );
};

export default Singleproductmanage;
