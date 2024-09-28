import "./ItemDetailContainer.css"

function ItemDetail({producto}) {
  return (
    <div className="itemDetail">
      <img className="imagenDetalle" src={producto.imagen} alt="" />
      <div className="info">
        <h1>{producto.nombre}</h1>
        <p>{producto.precio} dólares</p>
      </div>
    </div>
  )
}

export default ItemDetail
