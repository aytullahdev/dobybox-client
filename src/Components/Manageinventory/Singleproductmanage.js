import React from 'react';
const Singleproductmanage = ({name,id,desc,price,quan,supplier,img,Reload}) => {
   
  const deleteItem =()=>{
    const data={_id:id};
    
    fetch('https://young-beach-37066.herokuapp.com/products',{
      method:'DELETE',
        headers:{
          'content-type': 'application/json'
      },
        body:JSON.stringify(data)
  })
  .then(res=> res.json())
  .then(data => console.log(data))
    console.log(id);
    Reload();
   }
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
          <button className='btn btn-warning text-white btn-xs ml-2' onClick={()=>deleteItem()}>Delete</button>
        </th>
      </tr>
        
    );
};

export default Singleproductmanage;