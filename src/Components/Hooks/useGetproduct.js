import { useState, useEffect } from "react";
function useGetproduct(url) {
  const [products, setProducts] = useState([]);
  const loadData = (lurl) => {
    try {
      fetch(lurl)
        .then((res) => res.json())
        .then((data) =>{ setProducts(data)})
        .catch((err)=>{setTimeout(loadData(url),1000)})
    } catch (err) {
      console.error("Server error to load the data");
      setTimeout(loadData(url),2000)
      
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
