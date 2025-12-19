import AddContentForm from "../components/AddContentForm";
import ShareBrainForm from "../components/ShareBrainForm";
import DashBoardBody from "../components/DashBoardBody";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useContent from "../hooks/useContent";
import { BACKEND_URL } from "../config";

export default function DashBoard(){
    
    //@ts-ignore
    const {openAddContent, setOpenAddContent, openShareBrain, setOpenShareBrain} = useContext(DashBoardBodyContext);
    const {allContent,username,refresh} = useContent(`${BACKEND_URL}/api/v1/content`);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[])

    return(
        <>
            <AddContentForm isVisible={openAddContent} onClose={()=>setOpenAddContent(false)} refresh={refresh}/>
            <ShareBrainForm isVisible={openShareBrain} onClose={()=>setOpenShareBrain(false)} />
            <DashBoardBody username={username} allContent={allContent} refresh={refresh} share={false} />
        </>
    )
}