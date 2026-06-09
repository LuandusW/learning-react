import Button from "./Eventos/Button";

function Evento(){

    function miEvento(){
        window.alert("Hola!");
    }

    function segundoEvent(){
        window.alert("Activindo Segundo Evento!")
    }

    return(

        <>
        <h1>Meu Evento!</h1>
        <Button event={miEvento} text="Primero Evento"/>
        <Button event={segundoEvent} text="Segundo Evento"/>

        </>

    )
}

export default Evento;