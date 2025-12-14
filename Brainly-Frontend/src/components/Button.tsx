import type { ReactElement } from "react";

interface ButtonProps{
    variant : 'Primary' | 'Secondary',
    text : string,
    startIcon?: ReactElement,
    isFullWidth?:boolean,
    onClickHandler?:()=>void
};

const variantStyles = {
    Primary: 'bg-[#5046e4] text-white',
    Secondary: 'bg-[#dee7ff] text-[#5e56c8]'
};

const defaultStyles = "px-5 py-2 text-xl rounded-md flex justify-center items-center gap-2 cursor-pointer";


export default function Button({ variant, text, startIcon, isFullWidth, onClickHandler}: ButtonProps){
    return(
        <div>
            <button className={`${variantStyles[variant]} ${defaultStyles}`+(isFullWidth?' w-full':'')} onClick={onClickHandler} >
                {startIcon}
                {text}
            </button>
        </div>
    )
}