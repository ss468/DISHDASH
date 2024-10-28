import { useState } from "react";
import "./main.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Otp=()=>{
    const [otp,Setotp]=useState("")
    const loginuser=async(e)=>{
        e.preventDefault();
        if(otp===""){
            toast.error("ENTER OTP!!!!")
        }
        else if (!/[^a-zA-Z]/.test(otp)) {
            toast.error("Enter Valid Otp");
        }
        else if(otp.length<6){
            toast.error("LENGTH OF OTP MUST BE 6!!!!");
        }
        else{
            const data={
                otp:otp
            }
            console.log(data);
            toast.success("OTP VERIFIED SUCESSFULLY !!!!");

        }


    }
    return (
        <>
          <section>
            <div className="form_data">
              <div className="form_heading">
                <h1>ENTER YOUR OTP HERE</h1>
              </div>
              <form>
                <div className="form_input">
                  <label htmlFor="otp">OTP</label>
                  <input
                    type="text"
                    name="otp"
                    id=""
                    onChange={(e) => Setotp(e.target.value)}
                    placeholder="Enter Your OTP"
                  />
                </div>
                <button className="btn" onClick={loginuser} >SUMBIT</button>
              </form>
            </div>
            <ToastContainer/>
          </section>
        </>
      );
   }
   export default Otp;