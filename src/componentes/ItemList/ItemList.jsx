
import './ItemList.css'
import Item from '../Item/Item.jsx'
import getProducts from '../../promise/promise.js';
import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";


function ItemList() {
  const [productos, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoria } = useParams();

   useEffect(() => {
    setLoading(true);
    getProducts()
      .then(result => {
        setAllProducts(result);

        if (categoria) {
          const filtrados = result.filter(el => el.category === categoria);
          setProducts(filtrados);
        } else {
          setProducts(result);
        }

        setLoading(false);
      })
      .catch((err) => alert(err));
  }, [categoria]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="card-grid">
      {productos.length > 0 ? (
        productos.map((elem) => (
          <Item key={elem.id} {...elem} />
        ))
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
}

export default ItemList;