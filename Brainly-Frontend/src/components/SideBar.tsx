import BrainIcon from "../icons/BrainIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SideBarElement from "./SideBarElement";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function SideBar({username}: {username:string}){
    const navigate = useNavigate();

    function LogOut(){
        localStorage.removeItem("token");
        navigate('/login');
    }

    return(
        <div className="h-screen w-[20%] border-r-2 border-[#f1f3f5] fixed z-1 left-0 top-0">
            <div className="flex items-center text-3xl font-bold p-5 gap-2">
                <BrainIcon />
                Second Brain
            </div>
            <div>
                <SideBarElement text={"Tweets"} frontIcon={<TwitterIcon />}/>
                <SideBarElement text={"Videos"} frontIcon={<YoutubeIcon />}/>
            </div>
            <div className="flex flex-col justify-between items-center w-full h-1/8 absolute bottom-10">
                <p className="text-2xl text-[#323541]">Welcome {username}</p>
                <Button variant={"Secondary"} text={"Log Out"} onClickHandler={LogOut}/> 
            </div>
        </div>
    )
}; 