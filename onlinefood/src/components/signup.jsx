import { useState } from "react";
import "./main.css"
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { regesterfunction } from "../services/apis";

const Signup=()=>{
    const navigate=useNavigate();
    const [inputdata,Setinputdata]=useState({
        "fname":"",
        "email":"",
        "password":""
    })
    const [passshow,Setpassshow]=useState(false);
    const handlechange=(e)=>{
        const {name,value}=e.target;
        Setinputdata({...inputdata,[name]:value});
    }
    // const handleSubmit=async(e)=>{
    //     e.preventDefault();
    //     const {fname,email,password} = inputdata;
    //     if(fname===""){
    //         toast.error("ENTER NAME !!!!")
    //     }
    //     else if(!email.includes("@")){
    //         toast.error("WRITE THE VALID EMAIL !!!!")
    //     }
    //     else if(email===""){
    //         toast.error("WRITE EMAIL!!!!")
    //     }
    //     else if(password.length<8){
    //         toast.error("PASSWORD SHOULD BE MINIMUM 8 CHARACTERS LONG!!!!")
    //     }
    //     else{
    //         // const data={inputdata};
    //         // console.log(data)
    //         // toast.success("SIGN-UP SUCESSFULL!!!!")
    //         const response=await regesterfunction(inputdata);
    //         console.log(response);
    //         if(response.status===201){
    //             Setinputdata({...inputdata,fname:"",email:"",passsword:""});
    //             navigate("/Login");
    //         }
    //         else{
    //             console.log("error");
    //         }
    //     }

        
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Input validation...
        
        try {
            const response = await regesterfunction(inputdata);
            if (response.status === 201) {
                Setinputdata({ fname: "", email: "", password: "" }); 
                navigate("/Login");
            }
        } catch (error) {
            console.error("Registration Error:", error);
            toast.error(error.error || "An error occurred during sign-up!"); 
        }
    };
    
    return (
        <>
          <section>
            <div className="form_data">
              <div className="form_heading">
                <h1>Sign Up</h1>
                <p style={{ textAlign: "center" }}>
                  We are glad that you will be using Project Cloud to manage your
                  tasks! We hope that you will get like it.
                </p>
              </div>
              <form>
                <div className="form_input">
                  <label htmlFor="fname">Name</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    onChange={handlechange}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handlechange}
                    id="email"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="password">Password</label>
                  <div className='two'>
                  <input type= {!passshow ? "password":"text"} name="password" onChange={handlechange} id="password"    placeholder='Enter Your password' />
                  <div className='showpass' onClick={()=>Setpassshow(!passshow)} >
                  {!passshow ? "show":"hide"}
                  </div>
                  </div>
                </div>
                <button className="btn" onClick={handleSubmit}>SIGNUP</button>
                <p>
                  already have account??? <NavLink to="/login">LOGIN</NavLink>
                </p>
              </form>
            </div>
            <ToastContainer />
          </section>
        </>
      );
   }
   export default Signup;