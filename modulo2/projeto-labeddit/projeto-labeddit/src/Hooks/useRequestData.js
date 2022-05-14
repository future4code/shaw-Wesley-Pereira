import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const useRequestData = () => {
    
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
            setPost(response.data);
        })
    }, [])

    if(!post) return null;
    return(
        <div>
            <h1>
                {post.title}
            </h1>
            <p>{post.body}</p>
        </div>
    )


    
}


export default useRequestData;