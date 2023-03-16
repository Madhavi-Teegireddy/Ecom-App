import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { createProductController } from "../controllers/productController.js";




const router = express.Router();

//routes
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

export default router