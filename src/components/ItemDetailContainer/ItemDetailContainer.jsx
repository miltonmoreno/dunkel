import { useEffect, useState } from "react"
import "./ItemDetailContainer.css"
import getProductos from "../../data/productos"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

  const [producto, setProducto] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getProductos
    .then((respuesta) => {
      const encontrarProducto = respuesta.find((producto) => producto.id === id)
      setProducto(encontrarProducto)
    })
    .catch((error) => console.log(error))
  }, [id])

  return (
    <ItemDetail producto = {producto}/>
  )
}

export default ItemDetailContainer

