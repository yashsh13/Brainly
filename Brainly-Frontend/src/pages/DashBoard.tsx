import SideBar from "../components/SideBar";
import Button from "../components/Button";
import AddContentForm from "../components/AddContentForm"
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useContent from "../hooks/useContent";

export default function DashBoard(){
    const [open,setOpen] = useState(false);
    const {allContent,username,refresh} = useContent();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[])

    return(
        <>
            <AddContentForm isVisible={open} onClose={()=>setOpen(false)} refresh={refresh}/>
            <div className={"flex"}>
                <SideBar username={username}/>
                <div className={"ml-[20%] w-[80%] bg-[#f9fbfc]" + (open?" fixed":"")}>
                    <div className="flex justify-between items-center p-10">
                        <p className="text-3xl font-bold">All Notes</p>
                        <div className="flex gap-4">
                            <Button variant={"Secondary"} text={"Share Brain"} startIcon={<ShareIcon />} />
                            <Button variant={"Primary"} text={"Add Content"} startIcon={<PlusIcon />} onClickHandler={()=>setOpen(true)}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        {allContent.map(({_id,title,type,link})=><Card
                        key={_id}
                        title={title} 
                        type={type} 
                        link={link} 
                        />)}
                    </div>
                </div>
            </div>
        </>
    )
}