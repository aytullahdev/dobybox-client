import React from 'react';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Progress from "../Header/Progress";
import Swal from "sweetalert2";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Updateproduct = () => {
    const id = useParams().id;
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      Swal.fire({
        title: "Do you want to Add the item?",
        showCancelButton: true,
        confirmButtonText: "Add",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          fetch("https://young-beach-37066.herokuapp.com/updates", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(sp),
          })
            .then((res) => res.json())
            .then((data) => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            });
        } else if (result.isDenied) {
          Swal.fire("Product are not added", "", "info");
        }
      });
    };
    const [sp, setsp] = useState(undefined)
    useEffect(() => {
      fetch(`https://young-beach-37066.herokuapp.com/products/${id}`).then((res)=>res.json()).then((data)=>setsp(data));
    }, [])
    
    
    if (loading || !sp) {
      return <Progress />;
    }
    if(!loading && sp){
        if(user.email!==sp.supplier){
           navigate('/myitems',{replace:true})
        }
    }
    return (
      <motion.div>
        <div className="mt-5">
          <h2 className="text-center text-3xl text-gray-500  capitalize">
            Update Product
          </h2>
        </div>
        <div className="bg-green-300 mt-5 flex p-10 justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
            <div className="flex">
              <div className="w-full px-3">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 font-bold uppercase tracking-wider mt-4"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  value={sp?.name}
                  {...register("pname", { required: true })}
                  onChange={(e)=>{setsp({...sp, name:e.target.value})}}
                  className="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none"
                  placeholder="product name"
                  
                />
                {errors.pname && (
                  <p className="text-sm text-green-500 italic mt-2">
                    Please fill out the field
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  htmlFor="proprice"
                  className="block text-xs text-gray-700 font-bold uppercase tracking-wider"
                >
                  Price
                </label>
                <input
                  {...register("pprice", { required: true, min: 0 })}
                  value={sp?.price}
                  onChange={(e)=>{setsp({...sp, price:e.target.value})}}
                  type="number"
                  id="proprice"
                  className="block mt-2 py-3 px-4 rounded text-gray-700 w-full border-green-500 border outline-none "
                />
                {(errors.pprice || errors.pquan) && (
                  <p className="text-sm text-green-500 italic mt-2">
                    Please fill out the field or check your input
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  htmlFor="pquan"
                  className="block text-xs text-gray-700 font-bold uppercase tracking-wider"
                >
                  Quantity
                </label>
                <input
                   {...register("pquan", { required: true, min: 0 })}
                  value={sp?.quan}
                  onChange={(e)=>{setsp({...sp, quan:e.target.value})}}
                  type="number"
                  id="proquan"
                  className="block mt-2 py-3 px-4 rounded text-gray-700 w-full border-green-500 border outline-none "
                />
              </div>
            </div>
  
            <div className="flex">
              <div className="w-full px-3">
                <label
                  htmlFor="suplier"
                  className="block text-sm text-gray-700 font-bold uppercase tracking-wider mt-4"
                >
                  Supplier
                </label>
                <input
                  {...register("psupplier", { required: true })}
                  value={sp?.supplier}
                  type="text"
                  className="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none"
                  placeholder="Supplier"
                 
                  readOnly
                />
                {errors.psupplier && (
                  <p className="text-sm text-green-500 italic mt-2">
                    Please fill out the field
                  </p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-full px-3">
                <label
                  htmlFor="pimg"
                  className="block text-sm text-gray-700 font-bold uppercase tracking-wider mt-4"
                >
                  Product Image link
                </label>
                <input
                  {...register("pimg", { required: true })}
                  value={sp?.img}
                  onChange={(e)=>{setsp({...sp, img:e.target.value})}}
                  type="text"
                  className="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none"
                  placeholder="Product img url"
                />
                {errors.pimg && (
                  <p className="text-sm text-green-500 italic mt-2">
                    Please fill out the field
                  </p>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="w-full px-2">
                <label
                  htmlFor="pds"
                  className="block text-sm text-gray-700 font-bold uppercase tracking-wider mt-4"
                >
                  Product Descriptions
                </label>
                <textarea
                  {...register("pdesc", { required: true })}
                  value={sp?.desc}
                  onChange={(e)=>{setsp({...sp, desc:e.target.value})}}
                  className="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none resize-none appearance-none"
                  id="pds"
                  cols="30"
                  rows="5"
                  placeholder="Product Description"
                ></textarea>
                {errors.pdesc && (
                  <p className="text-sm text-green-500 italic mt-2">
                    Please fill out the field
                  </p>
                )}
              </div>
            </div>
            <div className="md:flex mid:items-center">
              <div>
                <button
                  type="submit"
                  className="bg-green-400 shadow text-white py-2 px-4 rounded mx-2 mt-4 hover:bg-green-700"
                >
                  UPDATE
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    );
  };

export default Updateproduct;