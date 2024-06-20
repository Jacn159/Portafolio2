import "./Cards.css";
const Cards = ({ oficio, img, value }) => {
  return (
    <article className="cards">
      <img src={img} className={"cards__logo "+"cards__logo__"+value}></img>
      <p className="cards__etiqueta">{oficio} </p>
    </article>
  );
};

export default Cards;
