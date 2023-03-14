import express from "express";
import {registerController, 
    loginController,
    testController,
    forgotPasswordController
     } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


const router = express.Router();

//register
router.post('/register', registerController)

//login
router.post('/login', loginController)

//forgot password
router.post('/forgot-password', forgotPasswordController)


router.get('/test',requireSignIn, isAdmin, testController)

router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ok: true});
})

export default router