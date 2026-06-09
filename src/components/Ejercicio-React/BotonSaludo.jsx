function BotonSaludo({ textBtn, msgFunction }) {

    function saludar() {
        window.alert(msgFunction);
    }

    return (
        <>
        <button onClick={saludar}>{textBtn}</button>
        </>
    )
}

export default BotonSaludo;