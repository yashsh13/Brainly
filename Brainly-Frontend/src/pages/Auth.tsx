import InputField from "../components/InputField";
import Button from "../components/Button";

interface AuthProps{
    title: string,
    onClickHandler?: ()=>void
}

export default function Auth({ title, onClickHandler}: AuthProps){
    return(
        <div className="w-screen h-screen bg-gray-500/50 flex justify-center items-center">
            <div className="bg-white flex flex-col gap-5 px-5 py-12 rounded-md">
                <p className="text-center text-3xl font-medium">{title}</p>
                <InputField placeholder="Email"/>
                <InputField placeholder="Password"/>
                <Button variant="Primary" text="Submit" isFullWidth={true} onClickHandler={onClickHandler}/>
            </div>
        </div>
    )
}