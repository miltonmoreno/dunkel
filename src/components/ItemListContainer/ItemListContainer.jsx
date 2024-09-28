import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import getProductos from "../../data/productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true)
    const {genero} = useParams()

    useEffect(() => {
        getProductos
        .then((respuesta) => {
            if (genero){
                const nuevosProductos = respuesta.filter((producto) => producto.genero === genero || producto.genero === "ambos")
                setProductos(nuevosProductos)
            } else {
                setProductos(respuesta)
            }
        setLoading(false)
        })
        .catch((error) => console.error("Lo siento, no tenemos lo que buscas", error))
    }, [genero])

    if(loading){
        return <h2>Cargando..</h2>
    }

    console.log (productos)

return (
    <div>
        <ItemList productos={productos}/>
    </div>
)
}

export default ItemListContainer