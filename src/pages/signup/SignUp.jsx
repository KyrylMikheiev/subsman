import React from 'react';
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signup_page}>
      <div className={styles.signup}>
        <h1>Sign Up</h1>
        <form className={styles.signup_form}>
          <div>
              <input type="email" name="email" placeholder='Email' autoFocus required/>
          </div>
          <div >
              <input type="password" name="password" placeholder='Password' required />
          </div>
          <button type="submit">Submit</button>
          <div className={styles.submit}>
              <a href='forgot-password'> Forgot password?</a>
              <a href='sign-in'> I already have an acoount</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
