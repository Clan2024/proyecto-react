import './ItemList.css'
import card from '../../assets/bandeja-ceramica-colores.jpg';
import cardDos from '../../assets/bandejas-de-colores-ceramica.jpg';
import cardTres from '../../assets/platos-colores-ceramica.jpg';




function ItemList() {
  return (
    <div className='container' style={{display: "flex", justifyContent: 'space-evenly', listStyle: "none", padding: 40, margin: 0, gap: 10, textAlign: "center"}}>
      <div className='card'>
        <img src={card} alt="bandejas-grandes-ceramicas"/>
        <h3>Bandejas</h3>
        <p>$25.000</p>
        <button className='btn-btn-secondary' >Agregar</button>
      </div>
      <div className='card'>
        <img src={cardDos} alt="platos-grandes-pintados-a-mano-ceramica" />
        <h3>Platos Big</h3>
        <p>$25.000</p>
        <button className='btn-btn-secondary'>Agregar</button>
      </div>
      <div className='card'>
        <img src={cardTres} alt="platos-pequeños-pintados-a-mano-ceramica" />
        <h3>Platos Small</h3>
        <p>$25.000</p>
        <button className='btn-btn-secondary'>Agregar</button>
      </div>

    </div>
  )
}

export default ItemList