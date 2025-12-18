import axios from "axios";
import { useEffect, useState } from "react";


export default function useContent(url: string){
    const [allContent,setAllContent] = useState([]);
    const [username,setUsername] = useState('');

    function refresh() {
        
        axios.get(url,{
                headers:{'authorization':localStorage.getItem('token')}
            })
            .then(function(response){
                setAllContent(response.data.content);
                setUsername(response.data.username);
                console.log(response.data.message);
            })
    }

    useEffect(() => {
            refresh();
        }    
        ,[])

    return {allContent,username,refresh}
}