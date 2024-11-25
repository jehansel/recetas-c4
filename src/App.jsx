import "./styles/App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";
import ParentComponent from "./Clase 13/ParentComponent";
import LoboEstepario from "./Clase 13/LoboEstepario";
import Context from "./Clase 13/Context";

function App() {
  return (
    <>
      {/* <Context>
        <ParentComponent />
        <LoboEstepario />
      </Context> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/envio" element={<Form />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<h1>Page not found - Error 404</h1>} />
      </Routes>
    </>
  );
}

export default App;
