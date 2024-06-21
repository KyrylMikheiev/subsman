import React from 'react';
import "./SignUp.css"

const SignUp = () => {
  return (
    <div className='signup-page'>
      <div className='signup'>
        <h1>Sign Up</h1>
        <form className='signup-form'>
          <div>
              <input type="email" name="email" placeholder='Email' autoFocus required/>
          </div>
          <div >
              <input type="password" name="password" placeholder='Password' className='password' required />
          </div>
          <button type="submit">Submit</button>
          <div className='submit'>
              <a href='forgot-password'> Forgot password?</a>
              <a href='sign-in'> I already have an acoount</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
