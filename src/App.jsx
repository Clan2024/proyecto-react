import './App.css'
import NavBar from './componentes/NavBar/NavBar.jsx'
import ItemList from './componentes/ItemList/ItemList.jsx'
import ItemDetail from './componentes/ItemDetail/ItemDetail.jsx'
import Carrito from './componentes/carritoCheckout/carrito.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './componentes/context/context.jsx';



function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Bienvenido a la tienda</h1>} />
        <Route path="/productos" element={<ItemList />} />
        <Route path="/productos/:categoria" element={<ItemList />} />
        <Route path="/detalle/:id" element={<ItemDetail />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
)}

export default App