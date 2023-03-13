import express from "express";
import {registerController, 
    loginController,
    testController
     } from "../controllers/authController.js"
import { requireSignIn } from "../middlewares/authMiddleware.js";


const router = express.Router();

//register
router.post('/register', registerController)

//login
router.post('/login', loginController)

router.get('/test',requireSignIn, testController)
export default router