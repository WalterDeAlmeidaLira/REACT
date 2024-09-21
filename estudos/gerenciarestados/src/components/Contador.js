import React, { useContext, useState } from "react";
import "./contador.css"
import { ContadorContexto } from "../ContadorContexto";

export default function Contador(){
    const [contador, setContador] = useContext(ContadorContexto) 

    return(
        <div className="contador">
            <p>Contador</p>
            <p>{contador}</p>
            <div>
                <button onClick={()=>setContador(contador + 1)}>+</button>
                <button onClick={()=>setContador(contador - 1)}>-</button>
            </div>
        </div>
    )
}



