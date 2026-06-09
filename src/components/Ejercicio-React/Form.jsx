import { useState } from "react"


function Form() {

    const [nombre,setNombre] = useState();

    return (
        <>
        
        <p>{nombre}</p>
        <br/>
            <form>
                <input type="text" onChange={(e) => setNombre(e.target.value)}/>
            </form>
        </>
    )
}

export default Form