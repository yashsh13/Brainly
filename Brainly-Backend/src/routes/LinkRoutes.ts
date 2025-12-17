import { Router } from "express";
import UserMiddleware from "../UserMiddleware.js";
import { UserModel, ContentModel, LinkModel } from "../db.js";
import generateHash from "../utils.js";

const LinkRouter = Router();

LinkRouter.post('/share',UserMiddleware,async (req,res)=>{

    const shareToggle = req.body.share;
    //@ts-ignore
    const userId = req.userId;

    if(shareToggle){

        const link = await LinkModel.findOne({
            userid:userId
        });

        if(link){

            return res.json({
                message:"Your share hash",
                hash:link.hash,
                share:true
            })
        }

        const hash = generateHash(7);

        await LinkModel.create({
            userid:userId,
            hash:hash
        })

        return res.json({
            message:"Your share hash is created",
            hash:hash,
            share:true
        })

    } 

    await LinkModel.deleteOne({
        userid:userId
    })

    return res.json({
        message:"Your share hash is deleted",
        share:false
    })

})

LinkRouter.get('/share',UserMiddleware,async (req,res)=>{
    //@ts-ignore
    const userId = req.userId

    const link = await LinkModel.findOne({
        userid:userId
    })

    if(link){
        return res.json({
            message:"Link Exists",
            hash:link.hash,
            share:true
        })
    }

    return res.json({
        message:"Link does not exist",
        share:false
    })
})

LinkRouter.get('/share/:hash',async (req,res)=>{

    const hash = req.params.hash;

    const link = await LinkModel.findOne({
        hash:(hash as string)
    });

    if(link){
        const userid = link?.userid;

        const user = await UserModel.findOne({
            _id:userid
        });

        const content = await ContentModel.find({
            userid:userid
        })

        return res.json({
            message:"Succesfully got shared content",
            username: user?.username,
            content: content
        });
    }

    return res.json({
        message:"Invalid Share Link"
    })
})

export default LinkRouter;