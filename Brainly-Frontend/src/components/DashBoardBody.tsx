import SideBar from "./SideBar";
import Button from "./Button";
import AddContentForm from "./AddContentForm";
import ShareBrainForm from "./ShareBrainForm";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import Card from "./Card";
import { useContext } from "react";
import { DashBoardBodyContext } from "../contexts/DashBoardBodyContext";

interface DashBoardBodyProps {
    username: string,
    allContent: never[],
    refresh?: ()=>void,
    share: boolean
}

export default function DashBoardBody({ username, allContent, refresh, share}: DashBoardBodyProps){

    //@ts-ignore
    const {openAddContent, setOpenAddContent, openShareBrain, setOpenShareBrain} = useContext(DashBoardBodyContext); 
    
    return(
        <>
            {!share&&<>
            <AddContentForm isVisible={openAddContent} onClose={()=>setOpenAddContent(false)} refresh={refresh}/>
            <ShareBrainForm isVisible={openShareBrain} onClose={()=>setOpenShareBrain(false)} /> 
                </>}
            <div className={"flex"}>
                <SideBar username={username} share={share}/>
                <div className={"ml-[20%] w-[80%] bg-[#f9fbfc]" + ((openAddContent||openShareBrain)&&!share?" fixed":"")}>
                    <div className="flex justify-between items-center p-10">
                        <p className="text-3xl font-bold">All Notes</p>
                        {!share&&<div className="flex gap-4">
                            <Button variant={"Secondary"} text={"Share Brain"} startIcon={<ShareIcon />} onClickHandler={()=>setOpenShareBrain(true)} />
                            <Button variant={"Primary"} text={"Add Content"} startIcon={<PlusIcon />} onClickHandler={()=>setOpenAddContent(true)} />
                        </div>}
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