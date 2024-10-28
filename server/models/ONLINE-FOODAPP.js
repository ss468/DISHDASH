import mongoose from "mongoose";

const fooddataschema = new mongoose.Schema({
  id: Number,
  rname: String,
  imgdata: String,
  address: String,
  delimg: String,
  somedata: String,
  price: Number,
  rating: String,
  arrimg: String,
  qnty: Number,
}, { collection: "FOODDATA" });  

export const fooddata = mongoose.model("FoodData", fooddataschema);
