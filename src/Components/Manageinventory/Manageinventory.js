import React from "react";
import { useState, useEffect } from "react";
import Addproduct from "../Product/Addproduct";
import Manaageallproduct from "./Manaageallproduct";

const Manageinventory = () => {
  const [showmpro, setshowmpro] = useState(true);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [totalpro, setTotalpro] = useState(0);
  const [curpage, setCurpage] = useState(0);
  const [url, setUrl] = useState(
    `https://young-beach-37066.herokuapp.com/products?limit=${limit}&page=${curpage}`
  );
  useEffect(() => {
    fetch("https://young-beach-37066.herokuapp.com/productcount/", {
      headers: {
        "content-type": "application/json",
        authorization: `bearear ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTotalpro(data.count);
        setPages(Math.ceil(data.count / limit));
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-center space-x-4 py-3">
        {showmpro ? (
          <button
            className="btn btn-md btn-primary "
            onClick={() => setshowmpro(!showmpro)}
          >
            Add Product
          </button>
        ) : (
          <button
            className="btn btn-md btn-primary "
            onClick={() => setshowmpro(!showmpro)}
          >
            Manage Product
          </button>
        )}
      </div>

      <div>
        {!showmpro && <Addproduct />}
        {showmpro && (
          <div className=" min-h-screen">
            <Manaageallproduct url={url} />
            <div className="px-5 btn-group">
              {[...Array(pages).keys()].map((num) => (
                <button
                  className={`btn ml-1 ${num === curpage ? "btn-active" : ""}`}
                  key={num}
                  onClick={() => {
                    setCurpage(num);
                    setUrl(
                      `https://young-beach-37066.herokuapp.com/products?limit=${limit}&page=${num}`
                    );
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Manageinventory;
