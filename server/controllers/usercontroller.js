import dotenv from "dotenv";
import { users } from "../models/userschema.js";
import { usersotp } from "../models/userotp.js";

import nodemailer from "nodemailer";
import { text } from "stream/consumers";
dotenv.config();
const transporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:process.env.EMAIL,
    pass:process.env.PASSWORD,
  }
})
const userregister = async (req, res) => {
  const { fname, email, password } = req.body;
  if (!fname || !email || !password) {
    return res.status(400).send({ error: "SEND VALUE OF EMAIL, NAME, PASSWORD!!!!" });
  }
  try {
    const preuser = await users.findOne({ email: email });
    if (preuser) {
      return res.status(400).send({ error: "USER IS ALREADY REGISTERED!!!!" });
    } else {
      const newuser = await users.create({
        fname,
        email,
        password,
      });
      return res.status(201).send(newuser);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "ERROR IN SIGNING UP!!!!" });
  }
};

const userOtpSend = async (req, res) => {
  // Functionality to be added
  const {email}=req.body;
  if(!email){
    return res.status(400).json({error:"SEND EMAIL !!!!"});
  }
  try{
     const preuser=await users.findOne({email})
     if(preuser){
            const OTP=Math.floor(100000 +Math.random()*900000);

            const existemail=await usersotp.findOne({email:email});
            if(existemail){
              const updatedata=await usersotp.findByIdAndUpdate( { _id: existEmail._id },{otp:OTP},{new:true});
              await updatedata.save();
              const mailoptions={
                from:process.env.EMAIL,
                to:email,
                subject:"SENDING EMAIL FOR OTP VALIDATION",
                text:"DISHDASH HERE IS YOUR OTP!!!!"
                       `YOUR OTP IS ${OTP}`
              };
              transporter.sendMail(mailoptions,(error,info)=>{
                if(error){
                  console.log("error ==>", error);
                  res.status(400).json({ error: "ERROR IN SENDING MAIL!!!!" });
                }else{
                  console.log("EMAIL SENT", info.response);
                  res.status(200).json({ MESSAGE: "EMAIL SENT SUCCESSFULL!!!!" });
                }
              });
            }else{
              const savedata=new usersotp({
                email:email,
                otp:OTP,
              });
              await savedata.save();
              const mailoptions={
                from:process.env.EMAIL,
                to:email,
                subject:"SENDING EMAIL FOR OTP VALIDATION",
                text:"DISHDASH HERE IS YOUR OTP!!!!"
                      `YOUR OTP IS ${OTP}`
              };
              transporter.sendMail(mailoptions,(error,info)=>{
                if(error){
                  console.log("error ==>", error);
                  res.status(400).json({ error: "ERROR IN SENDING MAIL!!!!" });
                }else{
                  console.log("EMAIL SENT", info.response);
                  res.status(200).json({ MESSAGE: "EMAIL SENT SUCCESSFULL!!!!" });
                }
              });
            }
     }else{
      return res.status(400).json({message:"USER IS NOT REGESTERED !!!!"});
     }
  }catch(error){
    return res.status(400).json({error:"error in userotpsending",error})
  }
};

const userLogin = async (req, res) => {
  // Functionality to be added

  const {email,otp}=req.body;

};

const user = async (req, res) => {
  // Functionality to be added
};

export default { userregister, userOtpSend, userLogin, user };
