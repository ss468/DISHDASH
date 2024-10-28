import express from "express";
const router = new express.Router();
import controllers from "../controllers/usercontroller.js";


router.post("/home/user/register", controllers.userregister);
router.post("/home/user/sendotp", controllers.userOtpSend);
router.post("/home/user/login", controllers.userLogin);

export default router;