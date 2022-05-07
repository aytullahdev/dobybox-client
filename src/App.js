import Navbar from "./Components/Header/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Allinventoris from "./Components/Product/Allinventoris";
import Singleproductmanage from "./Components/Product/Singleproductmanage";
import Manageinventory from "./Components/Manageinventory/Manageinventory";
import Login from "./Components/User/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./Components/User/Signup";
import Notrequerauth from "./Components/Secure/Notrequerauth";
import Requerdauth from "./Components/Secure/Requerdauth";
import Myitems from "./Components/Manageinventory/Myitems";
import Blogs from "./Components/Blogs/Blogs";
import Notfound from "./Components/Errorpage/Notfound";
import Updateproduct from "./Components/Product/Updateproduct";
import Passwordreset from "./Components/User/Passwordreset";
import Forbidden from "./Components/Errorpage/Forbidden"
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/User/Dashboard";
function App() {
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/inventory"
          element={
            <Requerdauth>
              <Allinventoris url="https://young-beach-37066.herokuapp.com/products" />
            </Requerdauth>
          }
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/inventory/:id"
          element={
            <Requerdauth>
              <Singleproductmanage />
            </Requerdauth>
          }
        />
        <Route
          path="/myitems"
          element={
            <Requerdauth>
              <Myitems />
            </Requerdauth>
          }
        />
        <Route
          path="/login"
          element={
            <Notrequerauth>
              <Login />
            </Notrequerauth>
          }
        />
        <Route
          path="/signup"
          element={
            <Notrequerauth>
              <Signup />
            </Notrequerauth>
          }
        />
        <Route path="/dashboard" element={<Requerdauth><Dashboard/></Requerdauth>}/>
        <Route
          path="/manageinventory"
          element={
            <Requerdauth>
              <Manageinventory />
            </Requerdauth>
          }
        />
        <Route path="update/:id" element={<Requerdauth><Updateproduct/></Requerdauth>}/>
        <Route path="/pwdreset" element={<Notrequerauth><Passwordreset/></Notrequerauth>}/>
        <Route path="/unauthorized" element={<Forbidden/>}/>
        <Route path="*" element={<Notfound/>}/>

      </Routes>
      <Footer/>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      
    </div>
  );
}

export default App;
