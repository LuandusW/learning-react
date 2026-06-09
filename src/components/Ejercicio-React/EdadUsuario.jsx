import { useState } from "react";

function EdadUsuario() {

    const [edad, setEdad] = useState(19);



    return (
        <>
            {edad > 18 && (
                <>
                <h1>Eres mayor de edad !</h1>
                <p>Edad:  {edad}</p>
                </>
            )}

        </>

    )
}

export default EdadUsuario;