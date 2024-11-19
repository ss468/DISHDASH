import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
const userschema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type: String,      
        required: true,    
        trim: true,          
        validate(value) {    
          if (!validator.isEmail(value)) {
            throw new Error("Not Valid Email");
          }
        },
      },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ]
});



userschema.pre("save", async function (next) {
    try {
      if (this.isModified("password") && this.password) {
        this.password = await bcrypt.hash(this.password, 12);
      }
      next();
    } catch (error) {
      next(error);
    }
  });
export const users=mongoose.model("USERS",userschema);