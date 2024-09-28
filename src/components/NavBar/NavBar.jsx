import "./NavBar.css";
import logo from "../../assets/logo_Mesa de trabajo 1.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="divLogo">
        <img className="logo" src={logo} alt="Logo de Dunkel" />
      </div>
      <ul className="navBarLinks">
        <Link to="/" className="navBarItems">Inicio</Link>
        <Link to="/categoria/hombre" className="navBarItems">Hombres</Link>
        <Link to="/categoria/mujer" className="navBarItems">Mujeres</Link>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar
