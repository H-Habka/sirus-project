import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { IoIosArrowForward } from "react-icons/io";
import { MdCompareArrows, MdConnectWithoutContact } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./Hero.style.scss";
const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid ">
        <div className="hero row">
          <Row>
            <div className="hero-container  mx-auto col-md-8 col-sm-10 col-xs-12">
              <h1 className=" text-center fs-2">
                Library of business videos and templates you need to plan,
                start, organize, manage & grow your business.
              </h1>
              <div className="col-md-3 col-sm-6 pt-5">
              <Link to="/results" className="white p-3"> Expand knowledge now </Link>

              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Hero;
