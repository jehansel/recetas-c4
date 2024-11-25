import { useState } from "react";
import CardStyles from "../styles/Card.module.css";
import Counter from "./Counter";
import { Link, useLocation } from "react-router-dom";
import { useRecipeStates } from "../Context/Context";

const Card = ({ recipe }) => {
  const { title, image, pricePerServing, id } = recipe;
  const [counter, setCounter] = useState(0);
  const { setCart } = useRecipeStates(); //Llamo al set desde el context
  const location = useLocation(); //Herramienta que uso para saber en que página se renderiza la card
  console.log(location);

  return (
    <div className={CardStyles.cardContainer}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </Link>
      <h4>${pricePerServing}</h4>
      {location.pathname == "/cart" ? (
        <h3>Cantidad de platos: {recipe.counter}</h3>
      ) : (
        <>
          <Counter counter={counter} setCounter={setCounter} />
          <button
            disabled={counter === 0}
            onClick={() =>
              setCart((prev) => [...prev, { ...recipe, counter: counter }])
            }
          >
            Agregar al 🛒
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
