import React from 'react';
import "./Login.css";

function Login() {
  return (
    <div className='login-only'>
    <div className="login-container">
      <h2 className='form-title'>Log in with</h2>
      <div className='social-login'>
        <button className='social-button'>
          <img src='./images/google.svg' className='social-icon'/>
          Google
        </button>

        <button className='social-button'>
          <img src='./images/apple.svg' className='social-icon'/>
          Apple
        </button>


      </div>

      <p className='seperator'><span>or</span></p>

      <form action="#" className='login-form'>

        <div className='input-wrapper'>
          <input type='email' placeholder='Email address' className='input-field' required/>
          <i className="material-symbols-outlined">mail</i>
          
        </div>


        <div className='input-wrapper'>
          <input type='password' placeholder='Password' className='input-field' required/>
          <i className="material-icons">lock</i>


          
        </div>

        <a href='#' className='forgot-pass-link'>Forgot Password</a>
        <button type="submit" className="login-button">Log In</button>



      </form>
      <p className="signup-prompt">
        Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
      </p>


    </div>
    </div>
  );
}

export default Login;