import { useState } from "react"


function Contador() {
    const [contador, setContador] = useState(0);
    function contar() {
        setContador(contador + 1);
    }


    return (
        <>
            <button onClick={contar}>Click para contar</button>
            <br></br>

            {contador > 0 && (
                <p>Cantidad de click: {contador}</p>
            )}
        </>


    )
}

export default Contador