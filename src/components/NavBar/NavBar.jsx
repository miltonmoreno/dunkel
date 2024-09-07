import "./NavBar.css";
import logo from "../../assets/logo_Mesa de trabajo 1.png"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <nav className="navBar">
      <div className="divLogo">
        <img className="logo" src={logo} alt="Logo de Dunkel" />
      </div>
      <ul className="navBarLinks">
        <li>
          <a className="navBarItems" href="">Inicio</a>
        </li>
        <li>
          <a className="navBarItems" href="">Hombres</a>
        </li>
        <li>
          <a className="navBarItems" href="">Mujeres</a>
        </li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar
