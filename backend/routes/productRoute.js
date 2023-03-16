import express from "express";
import { createProductController } from "../controllers/createProductController.js";

const router = express.Router();

//routes
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

export default router