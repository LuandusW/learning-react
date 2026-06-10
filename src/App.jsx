import { use, useState } from 'react'
import Minombre from './components/State Lift/Minombre';
import Saludos from './components/State Lift/Saludos';
import Click from './components/State Lift/Click';
import MostrarClick from './components/State Lift/MostrarClick';
import EligirColor from './components/State Lift/ElegirColor';
import MostrarColor from './components/State Lift/MostrarColor';
import './App.css'



function App() {
  /*
  const [nombre,setNombre] = useState("");
  const [click,setClick] = useState(0);

  function sumar(){
    setClick(click +1 );
  }

  function restar(){
    setClick(click - 1);
  }
*/

const[color,setColor] = useState("");



  return (
    <>
    
    <EligirColor setColor={setColor} />
    <MostrarColor color={color}/>

    </>
  )
}

export default App
