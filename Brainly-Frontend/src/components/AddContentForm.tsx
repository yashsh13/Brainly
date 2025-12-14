import CrossIcon from "../icons/CrossIcon";
import InputField from "./InputField";
import Button from "./Button";

interface AddContentFormProps {
    isVisible: boolean,
    onClose: ()=>void
}

export default function AddContentForm({ isVisible, onClose }: AddContentFormProps){
    return(
        <>{isVisible && <div className="fixed z-2 w-screen h-screen flex justify-center items-center bg-gray-500/70">
                <div className="bg-white px-5 py-8 rounded-md">
                    <div className="flex justify-between">
                        <p className="text-3xl font-medium">Add Content</p>
                        <CrossIcon onClickHandler={onClose}/>   
                    </div>
                    <div className="flex flex-col gap-5 mt-8">
                        <InputField placeholder="Title"/>
                        <InputField placeholder="Type"/>
                        <InputField placeholder="Link"/>
                        <Button variant={"Primary"} text={"Submit"} isFullWidth={true}/>
                    </div>
                </div>
            </div>}</>
    )
}