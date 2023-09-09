import React from "react";

export default function Header(){

    return (
        <div className="w-full shadow flex justify-center h-16">
            <img alt="Ricettario.it" src={require("../../image/Ricettario.it.jpg")} className="object-contain"/>
        </div>
    )
}