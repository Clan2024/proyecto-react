import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/casi-perfecto-logo.png';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "yellow" }}>
      <div style={{ margin: 10 }}>
        <img src={logo} alt="casi-perfecto-logo" style={{ height: 50, }} />
      </div>
      <ul style={{ display: "flex", justifyContent: 'space-evenly', listStyle: "none", padding: 10, margin: 10, gap: 60 }}>
        <li>
          <Link to ="/">
            Home
            </Link>
        </li>
        <li>
          <Link to="/productos">Todos</Link>
        </li>
        <li>
          <Link to="/productos/bandejas">Bandejas</Link>
        </li>
        <li>
          <Link to="/productos/platos">Platos</Link>
        </li>
          <li>
            <Link to="/productos/vasos">Vasos</Link>
            </li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
