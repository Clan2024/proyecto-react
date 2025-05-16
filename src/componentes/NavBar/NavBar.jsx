import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/casi-perfecto-logo.png';


function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "yellow" }}>
      <div style={{ margin: 10 }}>
        <img src={logo} alt="casi-perfecto-logo" style={{height: 50, }}/>
      </div>
      <ul style={{ display: "flex", justifyContent: 'space-evenly', listStyle: "none", padding: 10, margin: 10, gap: 60 }}>
        <li>Home</li>
        <li>Poductos</li>
        <li>Contacto</li>
      </ul>
      <div>
      <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
