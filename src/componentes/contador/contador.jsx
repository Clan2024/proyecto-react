import './Contador.css'
import { useState } from 'react';


function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial);

  const buttonStyle = {
    width: "40px",
    height: "40px",
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#5a5a5a",
    color: "white",
    cursor: "pointer",
  };

  const counterContainer = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    margin: "20px 0",
  };

  const numberStyle = {
    fontSize: "1.5rem",
    width: "30px",
    textAlign: "center",
  };

  return (
    <div style={counterContainer}>
      <button
        style={buttonStyle}
        onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
      >
        -
      </button>
      <span style={numberStyle}>{count}</span>
      <button
        style={buttonStyle}
        onClick={() => setCount((prev) => Math.min(prev + 1, stock))}
      >
        +
      </button>
    </div>
  );
}

export default ItemCount;
