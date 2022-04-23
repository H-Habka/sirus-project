import React from "react";
// BsHeart
import { BsHeart } from "react-icons/bs";
import "./Card.style.scss";
import { Button } from "react-bootstrap";

const Card = ({
  image,
  location,
  category,
  title,
  description,
  catDescription,
  footerClass,
}) => {
  return (
    <div className="card card-box">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title fw-bold">{title}</h6>
        <p className="card-text text-muted small fw-bold pt-2">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div className="col-12 d-flex justify-content-end px-3 pb-3">
        <span className="primary">{category}</span>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center py-3">
        <BsHeart size={20}></BsHeart>
        <Button className="white px-3 py-0"> watch</Button>
      </div>
    </div>
  );
};

export default Card;
