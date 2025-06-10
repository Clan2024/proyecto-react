import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import getProducts from '../../promise/promise';

/*
function ItemDetail() {

    const { id } = useParams();
    const [producto, setProducto] = useState({})

    useEffect(() => {
        getProducts()
            .then(result => {
                const product = result.find(el => el.id === id)
                setProducto(product)
            }).catch((err) => {alert(err)})
    })

    return (
        <p> Detalle del producto {producto.title}</p>
    )
}

export default ItemDetail
*/

function ItemDetail() {

    const { id } = useParams();
    const [producto, setProducto] = useState({})

    useEffect(() => {
        getProducts()
            .then(result => {
                const product = result.find(el => el.id === id)
                setProducto(product)
            }).catch((err) => { alert(err) })
    })

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
                        <button className="card-button" onClick={() => console.log("Vas a agregar al carrito", title)}> Agrear al carrito </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail


