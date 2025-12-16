import InputField from "../components/InputField";
import Button from "../components/Button";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";


interface AuthProps{
    title: string
}

export default function Auth({ title }: AuthProps){
    //@ts-ignore
    const usernameRef = useRef<HTMLInputElement>();
    //@ts-ignore
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("token")){
            navigate('/dashboard');
        }
    },[])

    async function onClickSignup(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,
            {
                username,
                password
            }
        )
        console.log(response.data.message);
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        navigate('/login');
    }

    async function onClickLogin(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/user/login`,{
            username,
            password
        })

        const token = response.data.token;
        localStorage.setItem('token',`Bearer ${token}`);
        console.log(response.data.message)
        navigate('/dashboard');
    }

    return(
        <div className="w-screen h-screen bg-gray-500/50 flex justify-center items-center">
            <div className="bg-white flex flex-col gap-5 px-5 py-12 rounded-md">
                <p className="text-center text-3xl font-medium">{title}</p>
                <InputField placeholderValue="Username" reference={usernameRef}/>
                <InputField placeholderValue="Password" reference={passwordRef}/>
                <Button variant="Primary" text="Submit" isFullWidth={true} onClickHandler={(title=='Sign Up')?onClickSignup:onClickLogin}/>
            </div>
        </div>
    )
}