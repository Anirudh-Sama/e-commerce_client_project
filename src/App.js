import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignUp from './pages/LoginSignUp.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path = '/' element ={<Shop/>}></Route>
        <Route path = '/men' element ={<ShopCategory category = "men"/>}></Route>
        <Route path = '/women' element ={<ShopCategory category = "women"/>}></Route>
        <Route path = '/kids' element ={<ShopCategory category = "kids"/>}></Route>
        <Route path  = '/product' element = {< Product/>}>
          <Route path =":productId" element = {< Product/>}></Route>
        </Route>
        <Route path = '/cart' element ={<Cart/>}></Route>
        <Route path = '/login' element ={<LoginSignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
