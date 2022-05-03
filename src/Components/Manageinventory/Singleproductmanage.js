import React from "react";
import Swal from "sweetalert2";
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
  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
            <div class="text-sm opacity-50">${price}</div>
          </div>
        </div>
      </td>
      <td>
        <span class="badge text-lg p-3 badge-ghost badge-sm">{supplier}</span>
      </td>
      <td>{quan}</td>
      <th>
        <button class="btn btn-ghost btn-xs">details</button>
        <button
          className="btn btn-warning text-white btn-xs ml-2"
          onClick={() => deleteItem()}
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default Singleproductmanage;
