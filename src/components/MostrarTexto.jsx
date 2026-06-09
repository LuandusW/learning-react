import { useState } from "react";

function MostrarTexto({ msg }) {


    const [esconder,setEsconder] = useState(false);

    function mostrarFrase(){
        setEsconder(!esconder);

    }



    return (

        <>
            <div>
                <button onClick={mostrarFrase}>Mostrar Frase</button>
            </div>
            {esconder && <p>{msg}</p>}
        </>

    )
}

export default MostrarTexto;