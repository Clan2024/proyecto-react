import { useAppContext } from '../context/context.jsx';
import { db } from '../../firebase-config.jsx';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function Carrito() {
  const { carrito } = useAppContext();

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const precioFinal = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  const Comprar = async () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    const orden = {
      productos: carrito,
      total: precioFinal,
      fecha: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      alert(`Compra efectuada. ID de la orden: ${docRef.id}`);

    } catch (error) {
      console.error("Error al registrar la orden:", error);
      alert("Error al procesar tu compra.")
    }
    
  };

  

  return (
    <div style={{ padding: 20 }}>
      <h2>Resumen del Carrito</h2>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                <img src="producto.img" alt="" />
                <div>
                {producto.name} — {producto.cantidad} x ${producto.price}
                </div>
              </li>
            ))}
          </ul>
          <p>Total de productos: {cantidadTotal}</p>
          <p>Total a pagar: ${precioFinal}</p>

          <button className="card-button" onClick={Comprar}>
            Comprar
          </button>
        </>
      )}
    </div>
  );
}

export default Carrito;
