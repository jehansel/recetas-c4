import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(url)
      .then((respuesta) => {
        console.log(respuesta);
        return respuesta.json();
      })
      .then((data) => {
        console.log(data);
        setDog(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>{loading ? "Cargando..." : <img src={dog.message} alt="" />}</div>
  );
};

export default FetchExample;

//Montaje
//Parte funcional
//Parte de render
//useEffect -> actualizo uno o más estados

//Actualización
//Parte funcional
//Parte de render
