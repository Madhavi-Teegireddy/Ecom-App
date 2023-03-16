import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import { createProductController, getProductController } from "../controllers/productController.js";




const router = express.Router();

//routes
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

//get products
router.get("/get-product", getProductController);


export default router