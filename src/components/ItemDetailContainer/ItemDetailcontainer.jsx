import "./itemDetailContainer.css";
import { useState, useEffect } from "react";
import { fetchItemsById } from "../../helpers/fetchItems";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null); //item inicia como 'null', por eso necesita una validacion en la linea 27 dentro de 'return' para poder renderizarse.

  const itemId = useParams().id; //aqui tuve que usar useParams().id . De lo contrario el detalle de producto no se renderizaba.
  console.log(itemId);

  useEffect(() => {
    fetchItemsById(Number(itemId)) //Aqui tuve que usar (Number(itemId)) porque de lo contrario el detalle no se renderizaba. Al parecer'itemId' se devuelve como string y habia que pasarlo a Numero.
      .then((response) => {
        setItem(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="detail-container">
      {/* <ItemDetail item={item} /> */
      /*Sin la validacion 'item &&' */}
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
