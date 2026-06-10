import { useState } from "react";

function Minombre({setNombre}){

    return(
        <div>
            <p>Escribe tu nombre: </p>
            <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        </div>

    )
}

export default Minombre;