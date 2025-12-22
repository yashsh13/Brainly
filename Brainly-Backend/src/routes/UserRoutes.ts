import Router from "express";
import { UserModel } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { z } from "zod"
;import { JWT_PASSWORD } from '../config.js';

const UserRouter = Router();

UserRouter.post('/signup',async (req,res)=>{
    try{
        const UserSignupSchema = z.object({
            username: z.string().min(3).max(15),
            password: z.string().min(3).max(15)
        })

        const validate = UserSignupSchema.safeParse(req.body);

        if(!validate.success){
            return res.json({
                message: "Zod validation error",
                error: validate.error
            })
        }

        const {username,password} = validate.data;
        const hashedPassword = await bcrypt.hash(password,5);

        await UserModel.create({
            username,
            password: hashedPassword
        })

        return res.json({
            message:"Signed up successfully"
        })

    } catch (error){
        return res.json({
            message: "Sign Up Error",
            error: error
        })
    }
})

UserRouter.post('/login',async (req,res)=>{
    try{
        const UserLoginSchema = z.object({
            username: z.string(),
            password: z.string()
        })

        const validate = UserLoginSchema.safeParse(req.body);

        if(!validate.success){
            return res.json({
                message: "Zod validation error",
                error: validate.error
            })
        }
        const {username,password} = validate.data;

        const user = await UserModel.findOne({
            username:username
        })

        if(!user){
            return res.status(401).json({
                message:"This user does not exist"
            })
        }

        const verify = await bcrypt.compare(password,user.password);

        if(!verify){
            return res.json(401).json({
                message: "Invalid Credentials"
            })
        }

        const token = await jwt.sign({id:user._id,username:user.username},JWT_PASSWORD);

        return res.json({
            message: "Logged in successfully",
            token: token
        })

    } catch (error){
        return res.json({
            message: "Login Error",
            error: error
        })
    }
})

export default UserRouter;

