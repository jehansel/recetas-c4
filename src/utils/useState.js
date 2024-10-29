//Esto no es useState real sino una representación
function useState(valorInicial) {
  let estado = valorInicial;

  const actualizadorEstado = (valorNuevo) => {
    estado = valorNuevo;
  };

  return [estado, actualizadorEstado];
}
