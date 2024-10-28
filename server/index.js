import express from "express";
import mongoose from "mongoose";
import { fooddata } from "./models/ONLINE-FOODAPP.js";
import routers from"./routes/router.js";
import cors from'cors'
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())


app.use(routers);
app.get("/",async(req,res)=>{
    try{
        const sendingfooddata=await fooddata.find({});
    return res.status(201).json({
        length:sendingfooddata.length,
        fooddata:sendingfooddata

    });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({"message":"error in sending data"});
    }
        
    

    
})




const mongodburl = "mongodb://localhost:27017/ONLINE-FOODAPP";
mongoose
  .connect(mongodburl)
  .then(() => {
    console.log("APP connected to the database");
    app.listen(4000, () => {
      console.log("App is listening on port 4000");
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });

