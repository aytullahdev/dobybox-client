import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Progress from "../Header/Progress";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const Addproduct = () => {
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
        fetch("https://young-beach-37066.herokuapp.com/addproduct", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
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
  if (loading) {
    return <Progress />;
  }
  return (
    <motion.div>
      <div className="mt-5">
        <h2 className="text-center text-3xl text-gray-500 pb-4 capitalize">
          Add Product
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
                className="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none"
                placeholder="product name"
                {...register("pname", { required: true })}
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
                type="text"
                className="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none"
                placeholder="Supplier"
                value={user?.email}
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
              <input
                {...register("pdesc", { required: true })}
                className="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none resize-none appearance-none"
                id="pds"
                cols="30"
                rows="5"
                placeholder="Product Description"
              ></input>
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
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Addproduct;
