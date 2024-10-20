import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignUp from './pages/LoginSignUp.jsx';
import Footer from './components/Footer/Footer.jsx';
import men_banner from './components/assets/Frontend_Assets/banner_mens.png'
import women_banner from './components/assets/Frontend_Assets/banner_women.png'
import kid_banner from './components/assets/Frontend_Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner ={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner = {women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner  = {kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

