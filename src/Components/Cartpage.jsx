import React, { useState } from 'react';
import Headr from './Header';
import cart from './LoginForm/cart1.svg';
import {NavLink} from 'react-router-dom';
 
import {logo} from './LoginForm/cart.png'; 
import {tshirt} from './tshirt1.png';
import './Cartpage.css';

 const Cartpage = () =>{
  const Headr = () =>{
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
  }


  return (
    <div>   
        <Headr />
         <div className='cartpg'>
            <div className='mycart'>
                <h2>My Cart</h2>
                <div className='mycart-item'>
                    <div>
                        x
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className='mycart-item'>
                    <div>
                        y
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='peice-detail'>
                    xx
            </div>
            <h2>My Cart</h2>
           <div class=" ">
             <div class=" ">
               <div class="card">
                 <div className='card-img'>
                     <img src={require('./tshirt2.jpg')} />
                 </div>
                 <div className='detail-div'>
                     <p>T-shirt</p>
                     <p>&#8377; 200</p>
                     <p className='review-div'>4.0</p>
                 </div>
                 <div className='like-div'>
                     <img className='img1' src={require('./like.png')} /> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <img className='img2' src={require('./LoginForm/cart.png')} />
                 </div>
               </div>
             </div>
             
             

              
 

           </div>


         </div>
    </div>
         
  );
};


export default Cartpage;