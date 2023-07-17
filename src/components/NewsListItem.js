import React from "react";
import imgCard from "../assets/news.jpg";
const NewsListItem = ({ name, description, category, onDelete }) => {
  let elementClassName;
  switch (category) {
    case "Hot News":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "Sport News":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "World News":
      elementClassName = "bg-success bg-gradient";
      break;
    default:
      elementClassName = "bg-info bg-gradient";
  }
  return (
    <li
      className={`card flex-row ${elementClassName} shadow-lg text-white my-2 `}
    >
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <img
        src={imgCard}
        alt="news img"
        className="img-fluid w-25 d-inline"
        style={{ objectFit: "cover" }}
      />
      <span className="position-absolute top-0 end-90 translate-middle badge border rounded-pill bg-light">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onDelete}
        ></button>
      </span>
    </li>
  );
};

export default NewsListItem;
