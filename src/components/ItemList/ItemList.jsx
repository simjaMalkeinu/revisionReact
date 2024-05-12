import Item from "../Item/Item";
import "./itemList.css";
/* import { toCapital } from "../../helpers/toCapital"; */
//ItemList va a recibir una prop 'items' que es el array de objetos. Para eso es necesario 'recoorrer' el array usando .map:

const ItemList = ({ items }) => {
  return (
    <>
      <h2 className="item-list-title">Nuestros Productos</h2>
      <div className="item-list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
export default ItemList;
