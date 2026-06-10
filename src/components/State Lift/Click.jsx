function Click({ setClick,nombre }) {

    return (
        <>
            <button onClick={setClick}>{nombre}</button>
        </>

    )
}

export default Click;