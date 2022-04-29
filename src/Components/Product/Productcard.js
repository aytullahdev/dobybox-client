import React from "react";

const Productcard = () => {
  return (
    <div className="mx-auto">
      <div class="card w-96 bg-base-100 shadow-xl">
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
            <div class="badge badge-outline">Price: $120</div>
          </div>
          <div className="card-actions flex justify-between">
            <div >
              <div class="badge badge-outline badge-secondary">Supplier: AYT</div>
            </div>
            <div>
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
