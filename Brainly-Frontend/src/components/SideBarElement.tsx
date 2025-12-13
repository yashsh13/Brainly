import type { ReactElement } from "react"

interface SideBarElementProps{
    text: string,
    frontIcon: ReactElement
};

export default function SideBarElement({ text, frontIcon}: SideBarElementProps){
    return(
        <div className="flex items-center gap-2 ml-10 mt-6 text-xl text-[#323541]">
            {frontIcon}
            {text}
        </div>
    )
};