import { useState } from "react";
import "./main.css"
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{

    const[email,Setemail]=useState("");
    const sendotp=async(e)=>{
        e.preventDefault();
        if(email==""){
            toast.error("Enter Email address!!!!");
        }
        else if(!email.includes("@")){
            toast.error("Enter Valid Email!!!!");
        }
        else{
            const data={
                email:email,
            }
            console.log(data);
        }

    }
    return (
        <>
          <section>
            <div className="form_data">
              <div className="form_heading">
                <h1>Welcome Back, Log In</h1>
                <p>Hi, we are you glad you are back. Please login.</p>
              </div>
              <form>
                <div className="form_input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    onChange={(e)=>Setemail(e.target.value)}
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <button className="btn" onClick={sendotp} >
                  SEND OTP
                  
                </button>
                <p>donot have account??? <NavLink to="/signup">SIGN UP</NavLink> </p>
                    
               
                
              </form>
            </div>
            <ToastContainer/>
          </section>
        </>
      );
}
export default Login;