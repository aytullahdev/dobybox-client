import React from 'react';
import useGetproduct from '../Hooks/useGetproduct';
import Singleproductmanage from './Singleproductmanage';
import Progress from '../Header/Progress'
const Manaageallproduct = () => {
    const [products]= useGetproduct('https://young-beach-37066.herokuapp.com/products');
    return (        
        <div className='px-5'>
      
      <div class="overflow-x-auto w-full">
  <table class="table w-full">
    
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Supplier</th>
        <th>Quantity</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
     {products.length>0 && products.map(sp=>{
        return(
            <Singleproductmanage key={sp._id} id={sp._id} name={sp.name} desc={sp.desc} price={sp.price} supplier={sp.supplier} quan={sp.quan} img={sp.img} />
        )
     })}
     {products.length<=0 && <Progress/>}
    
      
      
    </tbody> 
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Supplier</th>
        <th>Quantity</th>
        <th>Option</th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default Manaageallproduct; 