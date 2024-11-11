import { useState, useEffect } from "react";

const FuncComponent = () => {
  console.log("Cuerpo de una función");
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(true);

  //componentDidMount()
  useEffect(() => {
    console.log("Esto se ejecuta una vez (useEffect)");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //componentDidUpdate()
  useEffect(() => {
    console.log("Esto se ejecuta cuando contador o nombre se actualiza");
  }, [contador, nombre]);

  //componentWillUnmount()
  useEffect(() => {
    return () => {
      console.log("Se desmontó el componente");
    };
  }, []);

  return (
    <div>
      {console.log("Render")}
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <h1>{contador}</h1>
          <button onClick={() => setContador(contador + 1)}>+</button>
          <input type="text" onChange={(e) => setNombre(e.target.value)} />
          <input type="text" />
        </>
      )}
    </div>
  );
};

export default FuncComponent;
