import dotenv from "dotenv";
import { users } from "../models/userschema.js";

dotenv.config();

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
};

const userLogin = async (req, res) => {
  // Functionality to be added
};

const user = async (req, res) => {
  // Functionality to be added
};

export default { userregister, userOtpSend, userLogin, user };
