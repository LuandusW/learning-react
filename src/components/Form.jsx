import { useState } from "react";
function Form(){

    const cadastraUsuario = (event) =>{
        event.preventDefault();
        console.log(name);
        console.log(contraseña);
        console.log("Cadastrou el usuario!");

    }

    const [name,setName] = useState("Inserte seu nome");
    const [contraseña,setContraseña] = useState("Inserta sua senha");

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastraUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" name="name" 
                    placeholder={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    />
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>

    )

}

export default Form;