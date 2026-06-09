import style from './BTNBackground.module.css';
import { useState } from 'react';
function Btnbacgkround(){


    const [azul, setAzul] = useState(false);

    function colorAzul(){
        setAzul(!azul);
    }


    return(
        <>
        <div className={azul ? style.azul : style.blanco}>
            <button onClick={colorAzul}>Fundo Azul</button>
        </div>
        </>
    )
}

export default Btnbacgkround;