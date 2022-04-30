import React from "react";
import Productcard from "./Productcard";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
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
  const [sp,setSp]= useState(null)
  useEffect(() => {
    fetch(`http://localhost:5000/products${id}`)
    .then(res=>res.json())
    .then(data=>setSp(data))
  }, [])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto">
      {sp && <Productcard key={sp._id} id={sp._id} name={sp.name} desc={sp.desc} price={sp.price} supplier={sp.supplier} quan={sp.quan} img={sp.img} />}
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
