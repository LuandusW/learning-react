import { useState } from "react";

function Botones() {

    const [suma, setSuma] = useState(0);
    const [decrementar, restSuma] = useState(0);

    function contadorMas() {
        setSuma(suma + 1);
    }

    function decrementarResto(){
        restSuma(decrementar - 1);
    }

    return (
        <>
            <div>
                <button onClick={contadorMas}>Contador</button>
                <p>Contador: {suma}</p>
            </div>
            <div>
                <button onClick={decrementarResto}>Decrementar</button>
                <p>Resta: {decrementar}</p>
            </div>

        </>


    )
}

export default Botones;