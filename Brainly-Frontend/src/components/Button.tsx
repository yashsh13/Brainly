import type { ReactElement } from "react";

interface ButtonProps{
    variant : 'Primary' | 'Secondary',
    text : string,
    startIcon: ReactElement
};

const variantStyles = {
    Primary: 'bg-[#5046e4] text-white',
    Secondary: 'bg-[#dee7ff] text-[#5e56c8]'
};

const defaultStyles = "px-5 py-2 text-xl rounded-md flex items-center gap-2 cursor-pointer";


export default function Button({ variant, text, startIcon}: ButtonProps){
    return(
        <div>
            <button className={`${variantStyles[variant]} ${defaultStyles}`} >
                {startIcon}
                {text}
            </button>
        </div>
    )
}