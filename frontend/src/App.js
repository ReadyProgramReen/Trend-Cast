import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategoryy from './Pages/ShopCategoryy';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';


function App() {
  return (
    
    <div >

      <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategoryy category='men'/>} />
          <Route path='/womens' element={<ShopCategoryy category='women'/>} />
          <Route path='/kids' element={<ShopCategoryy category='kid'/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
