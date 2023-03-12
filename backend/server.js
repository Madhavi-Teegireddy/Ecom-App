import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"

dotenv.config()

connectDB();

const app = express();

app.use(express.json())
app.use(morgan('dev'))
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>"
    )
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgCyan.white)
})