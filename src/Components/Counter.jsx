import { useState } from "react";

const Counter = ({ counter, setCounter }) => {
  //   let contador = 0;
  //   console.log(useState());

  const sumar = () => {
    setCounter(counter + 1);
    // contador++;
    // console.log(contador);
  };
  const restar = () => {
    setCounter(counter - 1);
    // contador--;
    // console.log(contador);
  };

  // console.log(counter);

  return (
    <div>
      <button disabled={counter === 0} onClick={restar}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Counter;

// btn.addEventListener("click", () => {});

// btn.onclick = () => {};
