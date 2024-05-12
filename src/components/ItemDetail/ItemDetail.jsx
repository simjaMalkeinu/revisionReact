import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <>
      <article className="detail-card">
        <h3>Detalle de producto:</h3>
        <header className="detail-header">
          <h3 className="detail-title">{item.nombre}</h3>
        </header>
        <section className="detail-descrip">
          <img src={item.img} alt={item.nombre} className="item-img" />
          <div className="info-container">
            <p className="info">
              <b> Categoría:</b> {item.categoria} <br />
              <b>Id:</b> {item.id}
            </p>
            <p className="info">
              <b>Descripción:</b> {item.descripcion}
            </p>
            {item.precio !== undefined && (
              <p className="info">
                <b>Precio:</b> ${item.precio.toFixed(2)}
              </p>
            )}
            <p className="info">
              <b>Disponibles:</b> {item.stock} piezas
            </p>
          </div>
        </section>
        <footer className="item-footer">
          <ItemCount
            initial={1}
            stock={item.stock}
            onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
          />
        </footer>
      </article>
    </>
  );
};

export default ItemDetail;
