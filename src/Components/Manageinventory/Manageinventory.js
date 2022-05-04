import React from "react";
import { useState } from "react";
import Addproduct from "../Product/Addproduct";
import Manaageallproduct from "./Manaageallproduct";

const Manageinventory = () => {
  const [showmpro, setshowmpro] = useState(false);
  return (
    <>
        <div className="flex items-center justify-center space-x-4 py-3">
       { showmpro ? <button
          className="btn btn-md btn-primary "
          onClick={() => setshowmpro(!showmpro)}
        >
       
          Add Product
        </button>
       :
        <button
          className="btn btn-md btn-primary "
          onClick={() => setshowmpro(!showmpro)}
        >
          Manage Product
        </button>
       }
      </div>

      <div>
        {!showmpro && <Addproduct />}
        {showmpro && (
          <Manaageallproduct
            url={"https://young-beach-37066.herokuapp.com/products"}
          />
        )}
      </div>
    
    </>
  );
};

export default Manageinventory;
