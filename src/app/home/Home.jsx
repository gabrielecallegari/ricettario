import React, { useState } from "react";

export default function Home(){

    let risultato_ingredienti = ["farina","uova","melone", "marmellata di albicocca" ]

    const [ ingrediente, setIngrediente ] = useState("")
    const [ visualizza, setVisualizza ] = useState(false)
    const [ disponibili, setDisponibili ] = useState(risultato_ingredienti)
    const [ filtro, setFiltro ] = useState([])
    const [ lista, setLista ] = useState([])

    const _inputOnChange = (value)=>{
        value = value+""
        value = value.toLowerCase()
        setIngrediente(value)
        if(value.length > 0){
            setVisualizza(true)
        }else{
            setVisualizza(false)
        }
        let fil =disponibili.filter(el => el.includes(value)) 
        if (fil.length<1) {
            fil=["Non trovato"] 
        }
        setFiltro(fil)
    }

    const _onSelectedInput = (value)=>{
        setDisponibili(disponibili.filter(el => el !== value))
        let ls = lista
        ls.push(value)
        setLista(ls)
        setIngrediente("")
        setVisualizza(false)
    }
    

    
    return(
        <div className="w-full flex flex-col  items-center overflow-hidden h-screen">

            <h1 className="mt-3 text-3xl" >Ricettario.it</h1>
            
            <div className="w-5/6 border border-sky-500 px-5 py-6 rounded-xl shadow-xl flex mt-3 flex-col ">
                <div className="w-full text-center">
                    <label className="text-xl font-mono w-full">INSERISCI GLI INGREDIENTI</label>
                </div>
                <div className="w-full relative z-0">
                    <input placeholder="farina ..." className="mt-2 w-full text-lg border-b-2 rounded-none px-1 focus:outline-none border-sky-500"
                     value={ingrediente} onChange={ e => _inputOnChange(e.target.value)} />
                    {visualizza &&
                        <div className="w-full absolute z-10 divide-y divide-sky-500 border-b-2 border-sky-500 rounded-b-lg border-l-2 border-r-2">
                            { filtro.map((el,i) => {
                                let mclass = "bottom-0 left-0 py-2 bg-white "
                                if(i === filtro.length-1){
                                    mclass = "bottom-0 left-0 py-2 bg-white  rounded-b-lg"
                                }

                                return(
                                    <div className={mclass} key={i} onClick={()=>_onSelectedInput(el)} >
                                        <label className="ml-2 text-lg font-mono " >{el}</label>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                
                {lista.length > 0 &&
                    <div>
                        {lista.map(el => {
                            return (
                                <div key={el} className="mt-2 flex bg-gray-200 px-3 rounded-full w-fit items-center">
                                    <label className="text-lg" >{el}</label>
                                    <img src={require("../../image/x.png")} alt="X" className="w-4 h-4 ml-2"/>
                                </div>
                            )
                        })}
                    </div>    
                }
            </div>

        </div>
    )
}