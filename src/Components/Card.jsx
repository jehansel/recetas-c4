import CardStyles from "../styles/Card.module.css";
console.log(CardStyles);
const Card = ({ pizza }) => {
  const { tipo, img, precio } = pizza;
  return (
    <div className={CardStyles.cardContainer}>
      <img src={img} alt={tipo} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
    </div>
  );
};

export default Card;
