import React, { useState } from "react";
import Message from "../Components/Message";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;

    if (
      user.nombre.trim().length >= 3 &&
      user.direccion.includes(" ") &&
      regexNum.test(user.direccion)
    ) {
      setShow(true);
      setError(false);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {/* {condicion ? true : false } */}
      {show ? (
        <Message nombre={user.nombre} direccion={user.direccion} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Dirección: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, direccion: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor coloque la información correctamente
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
