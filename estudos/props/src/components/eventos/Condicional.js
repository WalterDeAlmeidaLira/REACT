import React, { useState } from "react";
export default function Condicional() {
    const [ouvidor,setOuvidor] = useState('')
    const[nome, setNome] = useState('')
    function atriburNome(e) {
        e.preventDefault()
        setNome(ouvidor)
    }

    function limparNome(e){
        setNome('')
    }


    return (
        <>
            <h2>Digite seu nome:</h2>
            <form>
                <input placeholder="digite seu nome" onChange={(e)=>{
                    setOuvidor(e.target.value)
                }}></input>
                <button onClick={atriburNome}>Enviar</button>
            </form>
            {nome && (
                <div>
                    <p>Seu nome é: {nome}</p>
                    <button onClick={limparNome}>limpar nome</button>
                </div>
            )}
        </>
    )
}