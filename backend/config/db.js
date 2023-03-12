import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to mongodb")
    }catch(error) {
        console.log(`Error ${error}`.bgMagenta.white)
    }
}

export default connectDB