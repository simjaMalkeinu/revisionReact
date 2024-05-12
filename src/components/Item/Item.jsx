//Estas son las tarjetas de producto.
//Este componente se va a renderizar en ItemList.jsx con los datos obtenidos del array de productos:
import "./item.css";
import { Link } from "react-router-dom";

//La funcion recibe una prop {item}
const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.nombre}</h3>
      <picture>
        <img src={item.img} alt={item.nombre} />
      </picture>

      <p> Precio: ${item.precio.toFixed(2)}</p>
      <p>Disponibles: {item.stock} unidades </p>
      <footer className="item-footer">
        <Link className="item-detail-link" to={`/productos/${item.id}`}>
          Ver detalle
        </Link>
      </footer>
    </div>
  );
};
export default Item;

/*
La ruta dentro del Link 'ver detalle' debe coincidir con la Route definida en App:

<Link to={`/productos/${item.id}`}>Ver detalle</Link

debe ser igual a:

<Route path="/productos/:id" element=<ItemDetailContainer />} />
*/
