import { Router } from "express";
import UserMiddleware from '../UserMiddleware.js';
import { ContentModel } from "../db.js";

const ContentRouter = Router();

ContentRouter.post('/',UserMiddleware,async (req,res)=>{

    const { title, link, type} = req.body;
    //@ts-ignore
    const userId = req.userId;

    await ContentModel.create({
        title:title,
        link:link,
        type:type,
        tags:[],
        userid:userId
    })

    return res.json(
        {
            message:"Posted Content"
        }
    )
})

ContentRouter.get('/',UserMiddleware,async (req,res)=>{

    //@ts-ignore
    const userId = req.userId;

    const content = await ContentModel.find({
        userid:userId
    }).populate('userid','username');

    return res.json({
        message:"Fetched all your content",
        content:content
    })
})

ContentRouter.delete("/",UserMiddleware, async (req,res)=>{

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
})

export default ContentRouter;