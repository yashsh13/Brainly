import ShareIcon from "../icons/ShareIcon";
import TrashIcon from "../icons/TrashIcon";

interface CardProps{
    title: string,
    type: "Youtube" | "Twitter",
    link: string
};

export default function Card({ title, type, link}: CardProps){

    return(
        <div className="border-2 border-[#f1f3f5] w-xs h-auto px-4 py-2 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-medium">
                    <ShareIcon />
                    {title}
                </div>
                <div className="flex gap-2">
                    <ShareIcon />
                    <TrashIcon />
                </div>
            </div>
            <div className="mt-5">
                {(type=='Youtube') && <iframe className="w-full h-auto" src={link.replace('watch?v=','embed/')} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }

                {(type=='Twitter') && <blockquote className="twitter-tweet w-full h-auto">
                    <a href={link.replace('x','twitter')}></a> 
                </blockquote>}
            </div>
        </div>
    )
}