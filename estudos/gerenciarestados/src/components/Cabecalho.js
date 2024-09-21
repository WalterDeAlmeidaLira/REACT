import React, { useContext } from "react";
import "./Cabecalho.css"
import { ContadorContexto } from "../ContadorContexto";

function Cabecalho(){
    const value = useContext(ContadorContexto)
    return(
        <div className="cabecalho">
            <h3>Contador Cabeçalho</h3>
            <p>{value}</p>
        </div>
    )
}

export default Cabecalho