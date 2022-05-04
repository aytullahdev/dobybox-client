import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.init";
const Singleproductmanage = ({
  name,
  id,
  desc,
  price,
  quan,
  supplier,
  img,
  Reload,
}) => {
  const deleteItem = () => {
    const data = { _id: id };
    if(user.email!==supplier){
      toast("⚠ This is not your item");
      return;
    }
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch("https://young-beach-37066.herokuapp.com/products", {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
              Reload();
            });
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
  const [user] = useAuthState(auth);
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">${price}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge text-lg p-3 badge-ghost badge-sm">{supplier}</span>
      </td>
      <td>{quan}</td>
      <th>
        <Link to={`/update/${id}`} className="btn btn-ghost btn-xs">details</Link>
        <button
          className="btn btn-warning text-white btn-xs ml-2"
          onClick={() => deleteItem()}
          disabled={user.email!==supplier}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default Singleproductmanage;
