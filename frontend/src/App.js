import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategoryy from './Pages/ShopCategoryy';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from '../src/Frontend_Assets/banner_mens.png'
import women_banner from '../src/Frontend_Assets/banner_women.png'
import kids_banner from '../src/Frontend_Assets/banner_kids.png'



function App() {
  return (
    
    <div >

      <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategoryy banner={men_banner} category='men'/>} />
          <Route path='/womens' element={<ShopCategoryy banner={women_banner} category='women'/>} />
          <Route path='/kids' element={<ShopCategoryy banner={kids_banner} category='kid'/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />

        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
