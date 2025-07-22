
import './ItemList.css'
import Item from '../Item/Item.jsx'
import getProducts from '../../promise/promise.js';
import { useState, useEffect,} from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import {db} from '../../firebase-config.jsx';


function ItemList() {
  const [allProducts, setAllProducts] = useState([]);
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const productosCollection = collection(db, "productos");
  const { categoria } = useParams();

  const filterProducts = (arrayProductos, category) => {
    if (category) {
      setProducts(arrayProductos.filter(element=> element.category === category));
    }
    else {
      setProducts(arrayProductos);
    }
  }

useEffect(() => {


  getDocs(productosCollection)
    .then(snapshot => {
      const arrayDeProductos = snapshot.docs.map(el => ({
        id: el.id,
        ...el.data()
      }));
      setAllProducts(arrayDeProductos);
      filterProducts(arrayDeProductos, categoria);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });

}, [categoria]);

    return (
    <div className="card-grid">
    
      {productos.length > 0 ? (
        productos.map((elem) => (
          <Item key={elem.id} {...elem} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}


export default ItemList;

  /*

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
        <p>ERROR 404</p>
      )}
    </div>
  );
}

export default ItemList;
*/