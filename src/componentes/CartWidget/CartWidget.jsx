import './CartWidget.css';
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useAppContext } from '../context/context.jsx';
import { Link } from "react-router-dom";

function CartWidget() {
  const { carrito } = useAppContext();

  return (
    <div style={{ padding: 10, margin: 10 }}>
      <Link to="/carrito" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <PiShoppingCartDuotone size={24} color="black" />
          <p>({carrito.length})</p>
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;

