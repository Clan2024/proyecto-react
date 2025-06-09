import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import getProducts from '../../promise/promise';

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