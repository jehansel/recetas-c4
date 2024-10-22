import "./App.css";
import Card from "./Components/Card";
// import Navbar, { Logo, OtroElemento } from "./Components/Navbar";
// import { Logo, OtroElemento } from "./Components/Navbar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Bienvenidos a proyecto Recetas</h1>
      <Card title="Receta 1" text="Como hacer un curry estilo chef" />
      <Card
        title="Ejemplo receta 2"
        text="El budin se va a levantar si haces esto"
      />
      <Card title="Tercera receta" text="La clave de como amasar pizza" />

      <hr />
      <h2>Quienes Somos</h2>
      <Card title="Luiggi Rodriguez" text="Devops">
        <h4>Facebook</h4>
      </Card>
      <Card title="Kenia Vilcapaza" text="Frontend y UX/UI">
        <h4>Linkedin</h4>
        <h4>Behance</h4>
      </Card>
    </>
  );
}

export default App;
