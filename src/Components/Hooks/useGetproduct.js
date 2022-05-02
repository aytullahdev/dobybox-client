import { useState, useEffect } from "react";
function useGetproduct(url) {
  const [products, setProducts] = useState([]);
  const loadData = (lurl) => {
    try {
      fetch(lurl)
        .then((res) => res.json())
        .then((data) =>{ setProducts(data)})
        .catch((err)=>{console.log("Some server error;")})
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
