import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Empresa">Empresa</Link></li>
      <li><Link to="/Contacto">Contacto</Link></li>
    </ul>
  );
}

export default Navbar;