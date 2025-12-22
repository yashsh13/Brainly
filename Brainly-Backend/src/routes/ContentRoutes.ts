import { Router } from "express";
import UserMiddleware from '../UserMiddleware.js';
import { ContentModel } from "../db.js";
import { z } from "zod";

const ContentRouter = Router();

ContentRouter.post('/',UserMiddleware,async (req,res)=>{
    try{
        const ContentPostSchema = z.object({
            title: z.string().min(3).max(1000),
            link: z.url(),
            type: z.literal(["Youtube","Twitter"])
        })

        const validate = ContentPostSchema.safeParse(req.body);

        if(!validate.success){
            return res.json({
                message: "Zod Validation Error",
                error: validate.error
            })
        }

        const { title, link, type} = validate.data;
        //@ts-ignore
        const userId = req.userId;

        await ContentModel.create({
            title:title,
            link:link,
            type:type,
            tags:[],
            userid:userId
        })

        return res.json({
                message:"Posted Content"
            })

    } catch (error){
        return res.json({
            message: "Posting Content Error",
            error: error
        })
    }
})

ContentRouter.get('/',UserMiddleware,async (req,res)=>{
    try{
        //@ts-ignore
        const userId = req.userId;
        //@ts-ignore
        const username = req.username;
        
        const content = await ContentModel.find({
            userid:userId
        }).populate('userid','username');

        return res.json({
            message:"Fetched all your content",
            content:content,
            username:username
        })
        
    } catch (error){
        return res.json({
            message: "Fetching user content error",
            error: error
        })
    }
})

ContentRouter.delete("/",UserMiddleware, async (req,res)=>{
    try{
        //@ts-ignore
        const userId = req.userId;
        const contentId = req.body.contentid;

        await ContentModel.deleteMany({
            _id:contentId,
            userid:userId
        })

        return res.json({
            message:"Deleted the content"
        })
        
    } catch (error){
        return res.json({
            message: "Deleting Content Error",
            error: error
        })
    }
})

export default ContentRouter;