//Vamos a usar una promesa para devolver un array de objetos y simular una llamada asincronica a una API:

import "./itemListContainer.css";
import { useState, useEffect } from "react";
import { fetchItems, fetchItemsByCategory } from "../../helpers/fetchItems";
import ItemList from "../ItemList/ItemList";
//importamos useParams para habilitar la navegacion entre categorias:
import { useParams } from "react-router-dom";

//Crear el componente:
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  //se declara loading:
  const [loading, setLoading] = useState(true);
  //se declara la categoria para navegacion entre categorias:

  const categoryId = useParams().categoria;
  console.log(categoryId);
  //se declara un estado para cambiar el titulo de acuerdo a la categoria:
  //useEffect permite ejecutar la funcion solamente en la primera carga:
  useEffect(() => {
    const asyncFunc = categoryId ? fetchItemsByCategory : fetchItems;

    asyncFunc(categoryId)
      .then((response) => {
        setItems(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  /*  useEffect(() => {
    fetchItems().then((res) => {
      if (categoria) {
        setItems(res.filter((item) => item.categoria === categoria));
      } else {
        setItems(res);
      }
      setLoading(false);
    });
  }, [categoria]);  */

  //Durante el tiempo de espera de la promesa se mostrara un mensaje de loading:
  if (loading) {
    return (
      <div className="loading">
        <span className="span">
          <img src="../../../assets/compuLogo.jpg" />
          Cargando productos...
          <i className="fa-solid fa-spinner animation"></i>
        </span>
      </div>
    );
  }

  //despues del tiempo de espera de la promesa se mostrara el saludo y el componente ItemList:
  return (
    <div className="itemListContainer">
      <ItemList items={items} />
    </div>
  );
};
//exportar componente e importarlo en App.jsx:
export default ItemListContainer;
