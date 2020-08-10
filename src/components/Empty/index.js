import React from "react";
import { Link } from "react-router-dom";
import "./empty.scss"

import Button from "components/UI/Button";

const Empty = ({ emoji, title, description, buttonRoute ,buttonText, children }) => {
  return (
    <div className="empty">
      <p className="empty__emoji">{emoji}</p>
      <h2 className="empty__title">{title}</h2>
      <p className="empty__description">
        {description || children}
      </p>
      {buttonRoute ? <Link to={buttonRoute}>
        <Button className="empty__action">{buttonText}</Button>
      </Link> : null}
    </div>
  );
};

export default Empty;
