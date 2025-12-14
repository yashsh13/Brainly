import BrainIcon from "../icons/BrainIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SideBarElement from "./SideBarElement";

export default function SideBar(){

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
        </div>
    )
}; 