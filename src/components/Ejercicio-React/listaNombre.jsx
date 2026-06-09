import { useState } from 'react';
function ListaNombres() {

    const [nombres] = useState([
        "Pepe",
        "Ronaldo",
        "Messi",
        "Dembele"
    ]);

    return (
        <>
            <h1>Lista nombres</h1>

            <ul>
                {nombres.map((nombre, index) => (
                    <li key={index}>{nombre}</li>
                ))}
            </ul>



        </>




    )
}


export default ListaNombres;