import  Navbar from './Components/Header/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Allinventoris from './Components/Product/Allinventoris';
import Singleproductmanage from './Components/Product/Singleproductmanage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Header/>}/>
        <Route path='/inventory' element={<Allinventoris/>}/>
        <Route path='/inventory/:id' element={<Singleproductmanage/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
