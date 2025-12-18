import SideBar from "../components/SideBar";
import Card from "../components/Card";
import useContent from "../hooks/useContent";
import { useParams } from "react-router";
import { BACKEND_URL } from "../config";

export default function Share(){

    const params = useParams();
    const{allContent,username} = useContent(`${BACKEND_URL}/api/v1/brain/share/${params.hash}`);

    return(
        <>
            <div className={"flex"}>
                <SideBar username={username} share={true}/>
                <div className={"ml-[20%] w-[80%] bg-[#f9fbfc]"}>
                    <div className="flex justify-between items-center p-10">
                        <p className="text-3xl font-bold">All Notes</p>
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