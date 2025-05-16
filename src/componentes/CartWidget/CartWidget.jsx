import './CartWidget.css'
import {PiShoppingCartDuotone} from "react-icons/pi";


function CartWidget () {
  return (
    <div style={{ padding: 10, margin: 10 }}>
        <PiShoppingCartDuotone size={24} color="black"/>
    </div>
  )
}

export default CartWidget
