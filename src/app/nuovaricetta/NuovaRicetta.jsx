import React from "react";
import Header from "../header/Header";

export default function NuovaRicetta(){

    const _handleSubmit = ()=>{
        console.log("INVIATO");
    }

    return (
        <div className="flex w-full flex-col">
            <Header />
            <div className="w-full grid justify-center ">
                <h1 className="font-bold text-2xl mt-3" >AGGIUNGI UNA NUOVA RICETTA</h1>
                <div className="w-full grid  mt-3" >
                    <label className="text-lg m-0 p-0" >Titolo Ricetta:</label>
                    <input type="text" className="rounded-none border-b-2 focus:outline-none border-sky-500 -mt-2" />
                    <label className="text-lg mt-5 p-0" >Descrizione:</label>
                    <input type="text" className="rounded-none border-b-2 focus:outline-none border-sky-500 -mt-2" />

                    <div className="w-full flex justify-center mt-5">
                        <input type="submit" onClick={()=>_handleSubmit()}  value="Salva Ricetta" className="px-3 py-1 w-fit rounded-full bg-sky-500 text-white text-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}