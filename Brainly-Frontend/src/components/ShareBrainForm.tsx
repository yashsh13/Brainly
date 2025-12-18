import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL, FRONTEND_URL } from "../config";

interface ShareBrainFormProps {
    isVisible: boolean,
    onClose: ()=>void
}

export default function ShareBrainForm({ isVisible, onClose }: ShareBrainFormProps){

    const [toggle,setToggle] = useState(false);
    const [link,setLink] = useState('');

    async function ShareBrain(){

        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
            share:!toggle
        },{
            headers:{"authorization":localStorage.getItem("token")}
        });

        if(response.data.share){
            setLink(`${BACKEND_URL}/brain/share/${response.data.hash}`);
        }

        setToggle(!toggle);
        console.log(response.data.message);
    }

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/brain/share`,{
            headers:{"authorization":localStorage.getItem("token")}
        })
        .then(function(response){
            if(response.data.share){
                setToggle(true);
                setLink(`${FRONTEND_URL}/brain/share/${response.data.hash}`);
            }
            console.log(response.data.message);
        })
    })

    return <>{ isVisible && <div className="h-screen w-screen fixed z-2 bg-gray-500/75 flex justify-center items-center">
            <div className="w-md bg-white p-5 rounded-md">
                <div className="w-full flex justify-between items-center">
                    <p className="text-3xl font-medium">Share Your Brain</p>
                    <CrossIcon onClickHandler={onClose} />
                </div>
                <div className="flex flex-col items-center gap-10 mt-10">
                    {toggle?<div className="w-full flex flex-col gap-2 text-lg">
                        <p className="">Your Share Link is :</p>
                        <p className="bg-gray-200 p-5 text-lg">{link}</p>
                    </div>:<p className="text-xl text-[#9fa1a3]">Your Share link is disabled</p>}
                    <Button variant={toggle?"Secondary":"Primary"} text={toggle?"Turn Off":"Turn On"} onClickHandler={ShareBrain} />
                </div>
            </div>
        </div>}</>
}