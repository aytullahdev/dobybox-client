import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import Manaageallproduct from './Manaageallproduct';
import { useState,useEffect } from 'react';
const Myitems = () => {
    const [user]=useAuthState(auth);
    const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [totalpro, setTotalpro] = useState(0);
  const [curpage,setCurpage] = useState(0);
  const [url,setUrl] =useState(`https://young-beach-37066.herokuapp.com/productsby/?email=${user.email}&limit=${limit}&page=${curpage}`)
  useEffect(() => {
    fetch(`https://young-beach-37066.herokuapp.com/productcount/?email=${user.email}`, {
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
        <div className=" min-h-screen">
            <Manaageallproduct url={url}/>
            <div className="px-5">
                {
                  [...Array(pages).keys()]
                  .map(num=>(<button className="btn ml-1" key={num} onClick={()=>{setUrl(`https://young-beach-37066.herokuapp.com/productsby/?email=${user.email}&limit=${limit}&page=${num}`)}}>{num+1}</button>))
                }
            </div>
        </div>
    );
};

export default Myitems;