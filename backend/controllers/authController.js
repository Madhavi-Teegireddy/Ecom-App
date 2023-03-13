import userModel from "../models/userModel.js"
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken'


export const registerController = async(req,res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
  
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
    } catch(error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Already Registered Please login",
      error,
    });
}
}

//LOGIN
export const loginController = async(req,res) => {
  try{
    const {email, password} = req.body
    if(!email || !password){
      return res.status(404).send({
        success: false,
        message:"Invalid email or password"
      })
    }
    const user = await userModel.findOne({email})
    if(!user){
      return res.status(404).send({
        success:false,
        message:'Email is not registered'
      })
    }
    const match = await comparePassword(password,user.password)
    if(!match){
      res.status(200).send({
        success:false,
        message:'Invalid Password'
      })
    }
    const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:'7d'})
    res.status(200).send({
      success:true,
      message:'Login Successful',
      user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
      },
      token,
    })
  }catch(error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:"Error in login",
      error
    })
  }
}

//test Controller
export const testController = (req,res) => {
  res.send("Protected Route")
}
