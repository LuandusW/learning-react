function MostrarClick({ click }){
    return(
        <>
        {click > 0 && <p>Click: {click}</p>}
        </>
    )
}

export default MostrarClick;