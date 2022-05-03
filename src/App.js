import  Navbar from './Components/Header/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Allinventoris from './Components/Product/Allinventoris';
import Singleproductmanage from './Components/Product/Singleproductmanage';
import Manageinventory from './Components/Manageinventory/Manageinventory';
import Login from './Components/User/Login';
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Components/User/Signup';
import Notrequerauth from './Components/Secure/Notrequerauth';
import Requerdauth from './Components/Secure/Requerdauth';
function App() {
  // const notify = () => toast("Wow so easy!");
  // <button onClick={notify}>Notify!</button>
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={ <Header/>}/>
        <Route path='/inventory' element={<Requerdauth><Allinventoris/></Requerdauth>}/>
        <Route path='/inventory/:id' element={<Requerdauth><Singleproductmanage/></Requerdauth>}/>
        <Route path='/login' element={<Notrequerauth><Login/></Notrequerauth>}/>
        <Route path='/signup' element={<Notrequerauth><Signup/></Notrequerauth>}/>
        <Route path='/manageinventory' element={<Requerdauth><Manageinventory/></Requerdauth>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
