import './Item.css'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/context.jsx';
import Contador from '../contador/contador.jsx';

import { useState } from 'react';

function Item({id, price, title, text, img}){

  const {agregarAlCarrito} = useAppContext();
  const [cantidad, setCantidad] = useState(1);

  const sumarCantidad = () => setCantidad(cantidad + 1);
  const restarCantidad = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  const agregarCantidadAlCarrito = () => {
    agregarAlCarrito({id, price, title, cantidad});
    setCantidad(1);
    alert(`Se agrego ${cantidad} unidades de ${title} al carrito`);
  };
  
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
      </div>
      <div className='card-footer'>
                        <Contador cantidad ={cantidad} sumarCantidad={sumarCantidad} restarCantidad={restarCantidad}/>
                        <button className="card-button"
                        onClick={agregarCantidadAlCarrito}> Agrear al carrito </button>
                    </div>
    </div>
  </div>

)
}

export default Item;