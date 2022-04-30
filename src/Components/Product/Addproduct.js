import React from "react";
import { useForm } from "react-hook-form";
const Addproduct = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit = data=>{
        fetch('http://localhost:5000/addproduct',{
            method:'POST',
              headers:{
                'content-type': 'application/json'
            },
              body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data => console.log(data))
        
        }
  return (
    <div>
      <div class="mt-5">
        <h2 class="text-center text-3xl text-gray-500 pb-4 capitalize">
          Add Product
        </h2>
      </div>
      <div class="bg-green-300 mt-5 flex p-10 justify-center items-center">
     <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg">
         
         <div class="flex">
             <div class="w-full px-3">
                 <label for="email" class="block text-sm text-gray-700 font-bold uppercase tracking-wider mt-4">Product Name</label>
                 <input  type="text" class="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none" placeholder="product name" {...register("pname",{required:true})}/>
                {errors.pname && <p class="text-sm text-green-500 italic mt-2">Please fill out the field</p>}
             </div>
         </div>
         <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label for="proprice" class="block text-xs text-gray-700 font-bold uppercase tracking-wider">Price</label>
                <input {...register("pprice",{required:true,min:0})}  type="number" id="proprice"  class="block mt-2 py-3 px-4 rounded text-gray-700 w-full border-green-500 border outline-none "  />
               { (errors.pprice || errors.pquan) && <p class="text-sm text-green-500 italic mt-2">Please fill out the field or check your input</p>}
            </div>
            <div class="w-full md:w-1/2 px-3 md:mb-0">
               <label for="pquan" class="block text-xs text-gray-700 font-bold uppercase tracking-wider">Quantity</label>
               <input {...register("pquan",{required:true,min:0})} type="number" id="proquan"  class="block mt-2 py-3 px-4 rounded text-gray-700 w-full border-green-500 border outline-none "  />
           </div>
         </div>
         <div class="flex">
             <div class="w-full px-3">
                 <label for="suplier" class="block text-sm text-gray-700 font-bold uppercase tracking-wider mt-4">Supplier</label>
                 <input {...register("psupplier",{required:true})} type="text" class="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none" placeholder="Supplier"  />
                 {errors.psupplier && <p class="text-sm text-green-500 italic mt-2">Please fill out the field</p>}
             </div>
         </div>
         <div class="flex">
             <div class="w-full px-3">
                 <label for="pimg" class="block text-sm text-gray-700 font-bold uppercase tracking-wider mt-4">Product Image link</label>
                 <input {...register("pimg",{required:true})} type="text" class="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none" placeholder="Product img url" />
                 {errors.pimg &&    <p class="text-sm text-green-500 italic mt-2">Please fill out the field</p>}
             </div>
         </div>
         <div class="flex">
            <div class="w-full px-2">
                <label for="" class="block text-sm text-gray-700 font-bold uppercase tracking-wider mt-4">Product Descriptions</label>
                <input {...register("pdesc",{required:true})} class="block mt-2  py-3 px-4 w-full border-green-700 rounded border outline-none resize-none appearance-none"  id="" cols="30" rows="5" placeholder="Product Description" ></input>
              { errors.pdesc &&  <p class="text-sm text-green-500 italic mt-2">Please fill out the field</p>}
            </div>
         </div>
         <div class="md:flex mid:items-center">
             <div>
                <button type="submit" class="bg-green-400 shadow text-white py-2 px-4 rounded mx-2 mt-4 hover:bg-green-700">ADD</button>
             </div>

         </div>

     </form>
 </div>

    </div>
  );
};

export default Addproduct;
