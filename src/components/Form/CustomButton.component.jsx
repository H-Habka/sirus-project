import React from "react";
import Button from "react-bootstrap/Button";
import "./CustomButton.style.scss";
import { GiPadlock } from "react-icons/gi";
const CustomButton = (props) => {
  return (
    <>
      {props.locked ? (
        <Button
          as={props.as}
          to={props.to}
          onMouseOver={props.handleHover}
          variant={props.variant}
          className={`lock-btn ${props.classes}`}
          onClick={props.handleClick}
        >
          {props.value}
          <div className="lock-icon">
            <GiPadlock></GiPadlock>
          </div>
        </Button>
      ) : (
        <Button
          as={props.as}
          to={props.to}
          onMouseOver={props.handleHover}
          variant={props.variant}
          className={props.classes}
          onClick={props.handleClick}
        >
          {props.value}
        </Button>
      )}
    </>
  );
};

export default CustomButton;
