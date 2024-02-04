 // Import necessary dependencies
import React, { useState } from 'react';
import './LoginForm.css';
 import cart from './cart1.svg';
import {NavLink} from 'react-router-dom';

// Create a functional component for the Register/Login page
const AuthPage = () => {
  // State for managing form input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true); // State to switch between Register and Login forms

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration or login logic based on isRegistering state
    if (isRegistering) {
      // Registration logic
      console.log('Registering with email:', email, 'and password:', password);
    } else {
      // Login logic
      console.log('Logging in with email:', email, 'and password:', password);
    }

    // Clear form fields after submission
    setEmail('');
    setPassword('');
  };

  const Headr = () =>{
    return (
      <div className='hdr'> 
        <h1>ShopKart</h1>
        <div className='nav'>
          <a href='#product'>Product</a>
          <a href='#Login'>Login</a>
          <img src='cart' alt='PNG'></img>
        </div>
      </div>
    );
  }


  return (
    <div className='lg-div'>
               
        <Headr />
    
        <div className='main_form_div'>
            
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
         
        <form onSubmit={handleSubmit}>
            {/* Email input */}
            <input type="email" value={email} placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} required />
            <br></br>
            <br></br>

            {/* Password input */}
            <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
            

            {/* Submit button */}
            
        </form>
         
        
        {/* Switch between Register and Login */}
        <div className='btn-main'>
            <p onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Already have an account? Login here.':'New User? Create Account.'}
            </p>
            <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        
        </div>
        
        </div>
    </div>
  );
};

// Export the component
export default AuthPage;