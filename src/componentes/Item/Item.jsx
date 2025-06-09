import './Item.css'
import card from '../../assets/bandeja-ceramica-colores.jpg';
import cardDos from '../../assets/bandejas-de-colores-ceramica.jpg';
import cardTres from '../../assets/platos-colores-ceramica.jpg';
import { Link } from 'react-router-dom';


function Item(props){
  const { id, price, title, text, img } = props

  return (
  <div className="products">
    <div className="card-img-container">
      <img src={img} className="card-img" width="150" height="150" alt="{}" />
    </div>
    <div className="card-info">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{text}</p>
      <div>
        <p className="card-price">$ {price}</p> 
      </div>
      <div className='card-footer'>
        <Link to= { `/detalle/${id}`}>
        <button className="card-button"> Ver Detalles </button>
        </Link>
        <button className="card-button" onClick={() => console.log("Vas a agregar al carrito", title)}> Agrear al carrito </button>
      </div>
    </div>
  </div>

)
}

export default Item;