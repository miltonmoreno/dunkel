import "./CartWidget.css"
import { BsCart3 } from "react-icons/bs";


function CartWidget() {
  return (
    <div className="carrito">
      <BsCart3 size="30px" color="white" />
      <span className="badge">4</span>
    </div>
  )
}

export default CartWidget
