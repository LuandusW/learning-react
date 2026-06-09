import { useState } from "react";
function Condicional(){


    const[email, setEmail] = useState();
    const[userEmail, setUserEmail] = useState();

    function enviarEmail(event){
        event.preventDefault();
        setUserEmail(email);
    }

    function limparEmail(){
        setUserEmail('');
    }


    return(

        <div onSubmit={enviarEmail}>

            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite o seu e-mail...." 
                onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <button type="submit">Enviar-Email</button>

                {userEmail && (
                    <div>O e-email do usuario é: {userEmail}
                    <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}

            </form>


        </div>

    )
}

export default Condicional;