import React from 'react';
import { useEffect,useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
const Dashboard = () => {
    const [totalp,setTotalp]=useState(0)
    const [myp,setMyp] = useState(0);
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`https://young-beach-37066.herokuapp.com/productcount/?email=${user.email}`,{
            headers: {
                "content-type": "application/json",
                authorization: `bearear ${localStorage.getItem("token")}`,
              }
        })
        .then(res=>res.json())
        .then(data=>setMyp(data?.count));
        fetch(`https://young-beach-37066.herokuapp.com/productcount/`,{
            headers: {
                "content-type": "application/json",
                authorization: `bearear ${localStorage.getItem("token")}`,
              }
        })
        .then(res=>res.json())
        .then(data=>setTotalp(data?.count));
    }, [])
    return (
        <div className=' min-h-screen'>
            <h1 className='py-10 text-center text-3xl uppercase'>Deshboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10'>
                <div className='bg-green-400 text-white text-xl uppercase text-center rounded py-5'>
                    <p>MY Products</p>
                    <span className='text-2xl font-bold block py-2'> {myp}</span>
                </div>
                <div className='bg-orange-400  text-white text-xl uppercase text-center rounded py-5'>
                    <p>Total Orders</p>
                    <span className='text-2xl font-bold block py-2'> 0</span>
                </div>
                <div className='bg-blue-400 text-white text-xl uppercase text-center rounded py-5'>
                    <p>Total PRODUCTS</p>
                    <span className='text-2xl font-bold block py-2'> {totalp}</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;