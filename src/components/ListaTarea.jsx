import { useState } from "react";


function ListaTarea(){
    
    const[palabra, setPalabra] = useState();
    const[tareas, setTareas] = useState([]);

    function textoTarea(e){
        e.preventDefault();
        setPalabra(e.target.value);
    }

    function crearTarea(e){
        e.preventDefault();
        setTareas([...tareas,palabra]);

    }

    console.log(tareas);
    return(

        <>
        <div>
            <form onSubmit={crearTarea}>
                <label htmlFor="tarea">Tarea:</label>
                <input onChange={textoTarea} placeholder="Tarea" type="text" id="tarea"></input>
                <button type="submit">Crear tarea</button>
           </form>

        </div>

        {tareas.map((tarea) =>{
            <p>{tarea}</p>
        })}
        {tareas.map((tarea) => (
         <p key>{tarea}</p>
            ))}

        <div>

        </div>
        
        </>

    )

}

export default ListaTarea;