import React, { useState } from "react";
import styles from "./Auth.module.scss";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../component/loader/Loader";

// const initialState = {
//   email: "",
//   password: "",
// };

const Login = () => {
   
  return (
    <div className={`container ${styles.auth}`}>
       {/* {isLoading && <Loader />} */}
    
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>

          <form >
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      
    </div>
  );
};

export default Login;