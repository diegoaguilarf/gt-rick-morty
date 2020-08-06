import React from "react";
import { Link } from "react-router-dom";
import useFavorites from "hooks/useFavorites"
import "./characteritem.scss";

import Card from "components/UI/Card";

const Character = ({ data }) => {
  const { id, image, name, status, species, type, gender } = data;
  const { isFavorite, addFavorite, removeFavorite } = useFavorites(data);

  return (
    <Card className="characteritem">
      <Link to={`/personajes/${id}`}>
        <img src={image} className="characteritem__image" alt={name} />
        <div className="characteritem__content">
          <p>{species}</p>
          <p className="characteritem__content__name">{name}</p>
          <p>{status}</p>
          <p>{type}</p>
          <p>{gender}</p>
        </div>
      </Link>
      <div className="characteritem__actions">
        {isFavorite ? (
          <i className="material-icons favorite" onClick={() => removeFavorite()}>
            favorite
          </i>
        ) : (
          <i className="material-icons" onClick={() => addFavorite()}>
            favorite_border
          </i>
        )}
      </div>
    </Card>
  );
};

export default Character;
