import DashBoardBody from "../components/DashBoardBody";
import useContent from "../hooks/useContent";
import { useParams } from "react-router";
import { BACKEND_URL } from "../config";

export default function Share(){

    const params = useParams();
    const{allContent,username} = useContent(`${BACKEND_URL}/api/v1/brain/share/${params.hash}`);

    return(
        <>
            <DashBoardBody username={username} allContent={allContent} share={true}/>
        </>
    )
}