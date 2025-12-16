import Router from "express";
import { UserModel } from "../db.js";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from '../config.js';

const UserRouter = Router();

UserRouter.post('/signup',async (req,res)=>{

    const {username,password} = req.body;

    await UserModel.create({
        username,
        password
    })

    return res.json({
        message:"Signed up successfully"
    })

})

UserRouter.post('/login',async (req,res)=>{

    const {username,password} = req.body;

    const user = await UserModel.findOne({
        username:username,
        password:password
    })

    if(!user){

        return res.status(401).json({
            message:"Incorrect Credentials"
        })
    }

    const token = await jwt.sign({id:user._id,username:user.username},JWT_PASSWORD);

    return res.json({
        message: "Logged in successfully",
        token: token
    })
})

export default UserRouter;

