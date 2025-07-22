import { createContext, useContext } from "react";
import { useState } from "react"

const Appcontext = createContext();

export const useAppContext = () => useContext(Appcontext);

export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        if (carrito.some (element => element.id === producto.id)) {
            const nuevoCarrito = carrito.map(element => {
                if (element.id === producto.id) {
                    return {
                        ...element,
                        cantidad: element.cantidad + producto.cantidad
                    }
                } else {
                    return element;
                }
            })
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, producto]);
        }
    }

    return (
        <Appcontext.Provider value={{ carrito, agregarAlCarrito }}>
            {props.children}
        </Appcontext.Provider>
    )

}

/* cantidad de productos
array.reduce((acc,value) => acc += value,cantidad, 0)

Precio final
array.reduce((acc,value) => acc += value.price * value.cantidad, 0)
*/

