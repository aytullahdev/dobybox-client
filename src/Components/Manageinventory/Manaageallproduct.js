import React from "react";
import useGetproduct from "../Hooks/useGetproduct";
import Singleproductmanage from "./Singleproductmanage";
import Progress from "../Header/Progress";
const Manaageallproduct = ({ url }) => {
  const [products, Reload] = useGetproduct(url);
  return (
    <div className="px-5 relative min-h-screen">
      <div className="overflow-x-auto w-full">
        
        {products.length === 0 && <div>No Product</div>}
        {products.length ===0 && <Progress/>}
        {products.length > 0 && (
          <table className="table w-full my-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Supplier</th>
                <th>Quantity</th>
                <th>Option</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 &&
                products.map((sp) => {
                  return (
                    <Singleproductmanage
                      Reload={Reload}
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
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Supplier</th>
                <th>Quantity</th>
                <th>Option</th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
};

export default Manaageallproduct;
