import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-200 py-5 my-10">
      <div>
        <h1 className="text-3xl uppercase text-center">Our Services</h1>
        <hr className="divider" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mx-10">
          <div className="flex items-center justify-center flex-col gap-y-2">
              <img src="https://3zbp9d3ee1ru1ps51i53b651-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/icon10-1.png" className="w-40 h-40" alt="" />
              <p className="text-xl uppercase">Premium Services</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-2">
              <img src="https://3zbp9d3ee1ru1ps51i53b651-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/icon12.png" className="w-40 h-40" alt="" />
              <p className="text-xl uppercase">Cargo Services</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-2">
              <img src="https://3zbp9d3ee1ru1ps51i53b651-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/icon13.png" className="w-40 h-40" alt="" />
              <p className="text-xl uppercase">Courier Services</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-2">
              <img src="https://3zbp9d3ee1ru1ps51i53b651-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/icon11.png" className="w-40 h-40" alt="" />
              <p className="text-xl uppercase">Express Servicecs</p>
          </div>
      </div>
    </div>
  );
};

export default Services;
