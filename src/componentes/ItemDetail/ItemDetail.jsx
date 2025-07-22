import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import getProducts from '../../promise/promise';
import { useAppContext } from '../context/context.jsx';
import Contador from '../contador/contador.jsx';
import {db} from '../../firebase-config.jsx';
import { getDocs, collection, doc } from 'firebase/firestore';



function ItemDetail() {

    const { id } = useParams();
    const [producto, setProducts,] = useState({})
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { agregarAlCarrito } = useAppContext();

    const [cantidad, setCantidad] = useState(1);


    function restarCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    function sumarCantidad() {
        if (cantidad < 10) {
            setCantidad(cantidad + 1);
        }
    }

    function agregarCantidadAlCarrito() {
        agregarAlCarrito ({id: producto.id, price: producto.price, title: producto.title, cantidad })
        setCantidad(1);
        alert (`Se agrego ${cantidad} unidades de ${producto.title} al carrito`)
    }

useEffect(() => {
  setLoading(true);
  const productosCollection = collection(db, "productos");

  getDocs(productosCollection)
    .then(snapshot => {
      const result = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      const product = result.find(el => el.id === id);
      setProducts(product);
    })
    .catch((err) => { alert(err) });
}, [id]);

    return (
        <div>
            <div className="products">
                <div className="card-img-container">
                    <img src={producto.img} className="card-img" width="150" height="150" alt="{}" />
                </div>
                <div className="card-info">
                    <h3 className="card-title">{producto.title}</h3>
                    <p className="card-description">{producto.text}</p>
                    <div>
                        <p className="card-price">$ {producto.price}</p>
                    </div>
                    <div className='card-footer'>
                        <Contador cantidad ={cantidad} sumarCantidad={sumarCantidad} restarCantidad={restarCantidad}/>
                        <button className="card-button"
                        onClick={agregarCantidadAlCarrito}> Agrear al carrito </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail


