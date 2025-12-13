import SideBar from "../components/SideBar";
import Button from "../components/Button";
import ShareIcon from "../icons/ShareIcon";
import PlusIcon from "../icons/PlusIcon";
import Card from "../components/Card"

export default function DashBoard(){
    return(
        <div className="flex">
            <SideBar />
            <div className="ml-[20%] w-[80%] bg-[#f9fbfc]">
                <div className="flex justify-between items-center p-10">
                    <p className="text-3xl font-bold">All Notes</p>
                    <div className="flex gap-4">
                        <Button variant={"Secondary"} text={"Share Brain"} startIcon={<ShareIcon />} />
                        <Button variant={"Primary"} text={"Add Content"} startIcon={<PlusIcon />} />
                    </div>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    <Card title={"Motivational Video"} type={"Youtube"} link={"https://www.youtube.com/watch?v=jhBAUzoXj_A"} />
                    <Card title={"Motivational Tweet"} type={"Twitter"} link={"https://x.com/Cristiano/status/1999550086628466788"} />
                    <Card title={"Motivational Video"} type={"Youtube"} link={"https://www.youtube.com/watch?v=jhBAUzoXj_A"} />
                    <Card title={"Motivational Video"} type={"Youtube"} link={"https://www.youtube.com/watch?v=jhBAUzoXj_A"} />
                    <Card title={"Motivational Video"} type={"Youtube"} link={"https://www.youtube.com/watch?v=jhBAUzoXj_A"} />
                    <Card title={"Motivational Tweet"} type={"Twitter"} link={"https://x.com/Cristiano/status/1999550086628466788"} />
                </div>
            </div>
        </div>
    )
}