import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <div className="controls">
        <button className="button" onClick={decrement}>
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button className="button" onClick={increment}>
          +
        </button>
      </div>
      <div className="add-to-cart">
        <button
          className="add-button"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
