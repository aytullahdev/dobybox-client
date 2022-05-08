import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Restockfrom from "../Restockfrom/Restockfrom";
import Progress from "../Header/Progress";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Singleproductmanage = () => {
  const id = useParams().id;
  const [sp, setSp] = useState(null);
  const [showrestock, setShowrestock] = useState(false);
  const updateDb = (newquan) => {
    const data = { _id: sp._id, quan: newquan };
   
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger mr-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          try {
            fetch("https://young-beach-37066.herokuapp.com/update/", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearear ${localStorage.getItem("token")}`,
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((data) => {
                data?.acknowledged === true && toast("Sucessfull");
                setSp({ ...sp, quan: newquan });
              })
              .catch((error) => {
                toast("Some server issu Plz reload the page");
              });
          } catch (err) {
            toast("Some server issu Plz reload the page");
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });

   
  };
  const orderItem = () => {
    if(sp.quan===0){
        toast("OUT OF STOCK");
        return;
    }
    updateDb(sp.quan - 1);
   
          
   
  };
  const restockItem = (newquan) => {
    newquan = parseInt(sp.quan) + parseInt(newquan);
    if(newquan<0){
       toast("INVALID NUMBER");
       return;
    }
    updateDb(newquan);
  };

  useEffect(() => {
    fetch(`https://young-beach-37066.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSp(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="mx-auto">
        {!sp && <Progress />}
        {sp && (
          <div>
            <div className="mx-auto">
              <div className="card dark:bg-gray-700 dark:text-white w-3/4 mx-auto bg-base-100 dark:shadow-none shadow-xl">
               
                <div className="card-body">
                  <h2 className="card-title">
                    {sp.name}!<div className="badge badge-secondary">NEW</div>
                  </h2>
                 
                  <div className="card-actions justify-start">
                    <div className="py-2 px-2 bg-orange-400 text-white rounded uppercase">
                      Price: $<span>{sp.price}</span>
                    </div>
                    <div>
                       
                          <div className="py-2 px-2 rounded bg-red-400 text-white">
                            Quantity: <span className="px-2"> {sp.quan}</span>
                          </div>
                       
                      </div>
                  </div>
                  <div className="card-actions flex justify-between">
                    <div className="flex flex-col space-y-2">
                     
                      
                      <div className="badge badge-outline badge-secondary">
                        Supplier: <span className="px-2">{sp.supplier}</span>
                      </div>
                    </div>
                  </div>
                  <p>{sp.desc}?</p>
                </div>
                <figure className="p-4">
                  <img src={sp.img} alt={sp.name} />
                </figure>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {sp && (
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
        )}
      </div>
    </div>
  );
};

export default Singleproductmanage;
