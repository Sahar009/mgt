import {useState} from 'react'
import styles from "./Auth.module.scss";
import { TiUserAddOutline } from "react-icons/ti";
import Card from '../../component/card/Card';
import Loader from '../../component/loader/Loader'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const Register = () => {
   
    // const initialState = {
    //   name:"",
    //   email:"",
    //   password:"",
    //   password2:"",
    // }


  return (
    <div className={`container ${styles.auth}`}>
    {/* {isLoading && <Loader />} */}
    <Card>
      <div className={styles.form}>
        <div className="--flex-center">
          <TiUserAddOutline size={35} color="#3060ff" />
        </div>
        <h2>Register</h2>

        <form >
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
           
           
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="password2"
          />
          <button type="submit" className="--btn --btn-primary --btn-block">
            Register
          </button>
        </form>

        <span className={styles.register}>
          <Link to="/">Home</Link>
          <p> &nbsp; Already have an account? &nbsp;</p>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </Card>
  </div>
  )
}

export default Register