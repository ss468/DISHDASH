import mongoose from "mongoose";

import validator from "validator";


const userotpschema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value) {
            if (!validator.isEmail(value)) {
              throw new error("ENTER A VALID EMAIL");
            }
          },
    },
    otp:{
         type:String,
         required:true,
    }
});

export const usersotp=mongoose.model("usersotp",userotpschema);