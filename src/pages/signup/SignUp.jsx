import React from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';

const SignUp = () => {
  return (
    <div className='signup'>
      <h1>Sign Up</h1>
      <form className='signup-form'>
        <div >
          <label className='line'>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div >
          <label className='line'>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div className='submit'>
            <a href='sign-in'> I already have an acoount</a>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
