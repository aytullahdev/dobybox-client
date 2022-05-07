import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
function useGetproduct(url) {
  const navigator = useNavigate();
  const [products, setProducts] = useState([]);
  const loadData = (lurl) => {
    try {
      fetch(lurl, {
        headers: {
          authorization: `bearear ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }else if(res.status===401){
              signOut(auth);
              navigator('/unauthorized',{replace:true});
          }
          console.log(res.status);
        })
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => {});
    } catch (err) {
      console.error("Server error to load the data");
    }
  };
  useEffect(() => {
    loadData(url);
  }, [url]);
  const Reload = () => {
    loadData(url);
  };
  return [products, Reload];
}
export default useGetproduct;
