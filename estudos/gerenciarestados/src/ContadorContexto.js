import React, { createContext, useState } from "react";

export const ContadorContexto = createContext()

export function ProvedorContagem(props){
    const [contador,setContador] = useState(0)
    return(
        <ContadorContexto.Provider value={[contador,setContador]}>
            {props.children}
        </ContadorContexto.Provider>
    )
}