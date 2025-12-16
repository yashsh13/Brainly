import CrossIcon from "../icons/CrossIcon";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface AddContentFormProps {
    isVisible: boolean,
    onClose: ()=>void,
    refresh: ()=>void
}

export default function AddContentForm({ isVisible, onClose, refresh }: AddContentFormProps){

    //@ts-ignore
    const titleRef = useRef<HTMLInputElement>();
    //@ts-ignore
    const typeRef = useRef<HTMLInputElement>();
    //@ts-ignore
    const linkRef = useRef<HTMLInputElement>();

    async function onClickHandler(){

        const title = titleRef.current.value;
        const type = typeRef.current.value;
        const link = linkRef.current.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/content`,{
            title,
            type,
            link
        },{
            headers:{'authorization':localStorage.getItem('token')}
        })

        console.log(response.data.message);
        refresh();
        onClose();
    }


    return(
        <>{isVisible && <div className="fixed z-2 w-screen h-screen flex justify-center items-center bg-gray-500/70">
                <div className="bg-white px-5 py-8 rounded-md">
                    <div className="flex justify-between">
                        <p className="text-3xl font-medium">Add Content</p>
                        <CrossIcon onClickHandler={onClose}/>   
                    </div>
                    <div className="flex flex-col gap-5 mt-8">
                        <InputField placeholderValue="Title" reference={titleRef}/>
                        <SelectField options={["Youtube","Twitter"]} reference={typeRef}/>
                        <InputField placeholderValue="Link" reference={linkRef}/>
                        <Button variant={"Primary"} text={"Submit"} isFullWidth={true} onClickHandler={onClickHandler}/>
                    </div>
                </div>
            </div>}</>
    )
}