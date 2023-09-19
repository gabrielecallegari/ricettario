import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const navigate = useNavigate()

    const _handleClick = ()=>{
        console.log("QUI");
        navigate("/")
    }

    return (
        <div className="w-full shadow flex justify-center h-16" >
            <img alt="Ricettario.it" src={require("../../image/Ricettario.it.jpg")} className="object-contain" onClick={()=>_handleClick()} />
        </div>
    )
}