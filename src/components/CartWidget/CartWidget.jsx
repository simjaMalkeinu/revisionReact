//importar imagen del carrito:
import carrito from "./cartImg/carro-de-la-compra.png";
//importar css:
import "./cartWidget.css";
const CartWidget = () => {
  return (
    <div className="cart">
      <img src={carrito} alt="carrito de compras" />
      <span>0</span>
    </div>
  );
};
//exportar el componente y luego importarlo dentro de NavBar.jsx:
export default CartWidget;
