import React from "react";

const Message = ({ nombre, direccion }) => {
  return (
    <>
      <h4>Gracias, {nombre}!</h4>
      <h4>En 30 minutos está llegando tu pedido a {direccion}</h4>
    </>
  );
};

export default Message;
