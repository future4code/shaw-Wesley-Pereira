import React,{useEffect} from "react"
import {useNavigate,useParams} from "react-router-dom"

export const UseProtectedPage = () =>{
    const navigate = useNavigate();
    useEffect(()=>{
        const token  = window.localStorage.getItem("token");
        if(!token){
            navigate("/login")
        }
    },[navigate])
}