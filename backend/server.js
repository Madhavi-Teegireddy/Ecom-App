import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoute.js"
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"

import cors from "cors"

dotenv.config()

connectDB();

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/auth", authRoutes);
app.use("/category", categoryRoute)
app.use("/product", productRoute)


app.get("/", (req, res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>"
    )
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgCyan.white)
})