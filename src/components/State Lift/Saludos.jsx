function Saludos({ nombre }) {

    function gerarSaludo(usuNombre) {

        return `Hola, ${usuNombre} todo bien ?`;

    }


    return (

        <>
            {nombre && <p>{gerarSaludo(nombre)}</p>}

        </>

    )
}

export default Saludos;