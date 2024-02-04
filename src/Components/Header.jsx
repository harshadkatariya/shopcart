 import React from "react";
 import {NavLink} from "react-router-dom";
 import cart from './LoginForm/cart1.svg';
 
 import './Homepage.css';
 import {logo} from './LoginForm/cart.png'; 

const Header = () =>{
    return 
    return (
        <div className='hdr'> 
          <h1>ShopKart</h1>
          <div className='nav'>
            <a href='#home'>Product</a>
            <a href='#Login'>Login</a>
            <img src={require('./LoginForm/cart.png')} />
          </div>
        </div>
      );
    
};

export default Header;