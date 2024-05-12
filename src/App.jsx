import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailcontainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/inicio"} element={<ItemListContainer />} />
          <Route
            path={"/categoria/:categoria"}
            element={<ItemListContainer />}
          />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*<Route path={"/"} element={<ItemListContainer />} />
Muestra la vista de todos los productos del array*/

/*
La ruta dentro del Link 'ver detalle' debe coincidir con la Route definida en App:

<Link to={`/productos/${item.id}`}>Ver detalle</Link

debe ser igual a:

<Route path="/productos/:id" element=<ItemDetailContainer />} />
*/
