import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
  
  <div>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryid' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
        </Routes>
    </BrowserRouter>
        
  </div>    
      
    
    
  );
}

export default App;
