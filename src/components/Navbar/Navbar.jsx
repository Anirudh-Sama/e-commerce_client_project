import React, { useState } from 'react'
import './navbar.css'
import Logo from '../assets/Frontend_Assets/logo.png'
import Cart_icon from '../assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={Logo} alt="" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick ={() => {setMenu("shop")}}><Link to ='/' >Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
            <li onClick ={() => {setMenu("men")}}><Link to ='/men' >Men</Link>{menu === "men"?<hr/>:<></>}</li>
            <li onClick ={() => {setMenu("women")}}><Link to ='/women' >Women</Link>{menu === "women"?<hr/>:<></>}</li>
            <li onClick ={() => {setMenu("kids")}}><Link to ='/kids' >Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to = '/login'><button>Login</button></Link>
            <Link to = '/\cart'><img src={Cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar;