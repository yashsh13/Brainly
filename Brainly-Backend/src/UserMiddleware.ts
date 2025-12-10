import { type Request, type Response, type NextFunction } from "express";
import jwt , {type JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";

const UserMiddleware = async (req: Request, res: Response, next: NextFunction) =>{

    const BearerToken = req.headers.authorization;
    const token = BearerToken?.split(' ')[1];

    const decoded = await jwt.verify(token as string,JWT_PASSWORD);

    if(decoded){
        //@ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next();
        return
    }

    return res.json({
            message:"User not logged in"
        })

}

export default UserMiddleware;