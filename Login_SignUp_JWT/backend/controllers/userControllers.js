import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModels from '../models/userModels.js'

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const loginUser = async (req, res) =>{
    try {
        const {email, password} = req.body;
        const user = await userModels.findOne({email})
        if(!user){
            return res.json({success:false,message:"User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = createToken(user._id);
            res.json({success:true, message:"Login Successfully", token})
        }
        else{
            res.json({success:false, message:"Incorrect Password Entered"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:true, message:error.message})
    }
}
const registerUser = async (req, res) => {
    try {
        const {name,email,password} = req.body
        const exists = await userModels.findOne({email})

        if(exists){
            return res.json({success:false, message:"User already exists"})
        }
        
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Invalid email address!"})
        }

        if(password.length<8){
            return res.json({success:false, message:"Password too short"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new userModels({
            name, email, password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true, message:"Account Created Successfully", token})



    } catch (error) {
        console.log(error)
        res.json({success:true, message:error.message})
    }
}

export { loginUser, registerUser }
