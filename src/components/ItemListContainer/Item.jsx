import "./ItemListContainer.css"
import { Link } from "react-router-dom"

function Item({producto}) {
  return (
    <div>
        <div className="card">
            <img src={producto.imagen}/>
            <h3>{producto.nombre}</h3>
            <p>{producto.precio} dólares</p>
            <Link to={`/detalle/${producto.id}`} className="botonVerMas">Ver más</Link>
        </div>
    </div>
  )
}

export default Item
