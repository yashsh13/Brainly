import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export default function useContent(){
    const [allContent,setAllContent] = useState([]);
    const [username,setUsername] = useState('');

    function refresh() {
        
        axios.get(`${BACKEND_URL}/api/v1/content`,{
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