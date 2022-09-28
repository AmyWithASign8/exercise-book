import React from "react";
import "./Card.scss";
import noPhoto from "../../assets/img/noPhoto.jpg";
import counterImg from "../../assets/img/counter.png";
import { Link } from "react-router-dom";

function Card({ imageCard, descriptionCard, namingCard, cardRoute }) {
  console.log(noPhoto);
  return (
    <div className="Card">
      {imageCard ? (
        <img src={imageCard} width="520px" />
      ) : (
        <img src={noPhoto} width="520px" />
      )}
      <h1>{namingCard}</h1>
      <p>{descriptionCard}</p>
      <Link to={cardRoute}>
        <button>Открыть</button>
      </Link>
    </div>
  );
}

export default Card;
