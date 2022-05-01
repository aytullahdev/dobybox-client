import  Navbar from './Components/Header/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Allinventoris from './Components/Product/Allinventoris';
import Singleproductmanage from './Components/Product/Singleproductmanage';
import Manageinventory from './Components/Manageinventory/Manageinventory';
import Login from './Components/User/Login';
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  // const notify = () => toast("Wow so easy!");
  // <button onClick={notify}>Notify!</button>
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={ <Header/>}/>
        <Route path='/inventory' element={<Allinventoris/>}/>
        <Route path='/inventory/:id' element={<Singleproductmanage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/manageinventory' element={<Manageinventory/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
