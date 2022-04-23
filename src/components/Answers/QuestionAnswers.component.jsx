import React from "react";
import "./QuestionAnswers.style.scss";
import Avatar from "../../assets/img/avatar.jpg";
import { Button } from "react-bootstrap";
import { BsDot } from "react-icons/bs";
// import { Link } from "react-router-dom";
const QuestionAnswers = (props) => {
  return (
    <>
      <div className="row p-md-5 p-sm-1 questionAnswer">
        <div className="col-12">
          <p className="text-muted mb-0">
            {props.asker}:{props.category}
          </p>
          <h5 className="fw-bold mb-0">{props.question}</h5>
          <p className="text-muted">
              {props.details}
          </p>
          <p className="text-muted mt-0 small">
            {props.answersCount} Answers <BsDot size={20}></BsDot> {props.latestAnswerDate}
          </p>
        </div>
        <div className="col-12 d-flex flex-column bg-dark-gray  mb-5 py-3 mt-3 answerTxt">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src={Avatar} alt="" className="img rounded-pill ms-1 me-3" />
              <span className="fw-bold">{props.user}</span>
            </div>
            <div>
              <span className="fw-bold pe-3">date : 12/12/2012</span>

            </div>
          </div>

          <p className="ps-md-5 ps-sm-1" maxlength="100">
            Rental businesses are way different from sales businesses. Most
            entrepreneurs think all eCommerce solutions can be used to develop a
            rental marketplace, but the requirements to develop one are way
            different Rental businesses are way different from sales businesses.
            Most entrepreneurs think all eCommerce solutions can be used to
            develop a rental marketplace, but the requirements to develop one
            are way different Rental businesses are way different from sales
            businesses. Most entrepreneurs think all eCommerce solutions can be
            used to develop a rental marketplace, but the requirements to
            develop one are way different Rental businesses are way different
            from sales businesses. Most entrepreneurs think all eCommerce
            solutions can be used to develop a rental marketplace, but the
            requirements to develop one are way different Rental businesses are
            way different from sales businesses. Most entrepreneurs think all
            eCommerce solutions can be used to develop a rental marketplace, but
            the requirements to develop one are way different Rental businesses
            are way different from sales businesses. Most entrepreneurs think
            all eCommerce solutions can be used to develop a rental marketplace,
            but the requirements to develop one are way different Rental
            businesses are way different from sales businesses. Most
            entrepreneurs think all eCommerce solutions can be used to develop a
            rental marketplace, but the requirements to develop one are way
            different Rental businesses are way different from sales businesses.
            Most entrepreneurs think all eCommerce solutions can be used to
            develop a rental marketplace, but the requirements to develop one
            are way different Rental businesses are way different from sales
            businesses. Most entrepreneurs think all eCommerce solutions can be
            used to develop a rental marketplace, but the requirements to
            develop one are way different
          </p>
          <Button className="white rounded align-self-end px-5"> Request a meeting</Button>
        </div>
        <div className="col-12 d-flex flex-column bg-dark-gray  mb-5 py-3 mt-3 answerTxt">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src={Avatar} alt="" className="img rounded-pill ms-1 me-3" />
              <span className="fw-bold">{props.user}</span>
            </div>
            <div>
              <span className="fw-bold pe-3">date : 12/12/2012</span>

            </div>
          </div>

          <p className="ps-md-5 ps-sm-1" maxlength="100">
            Rental businesses are way different from sales businesses. Most
            entrepreneurs think all eCommerce solutions can be used to develop a
            rental marketplace, but the requirements to develop one are way
            different Rental businesses are way different from sales businesses.
            Most entrepreneurs think all eCommerce solutions can be used to
            develop a rental marketplace, but the requirements to develop one
            are way different Rental businesses are way different from sales
            businesses. Most entrepreneurs think all eCommerce solutions can be
            used to develop a rental marketplace, but the requirements to
            develop one are way different Rental businesses are way different
            from sales businesses. Most entrepreneurs think all eCommerce
            solutions can be used to develop a rental marketplace, but the
            requirements to develop one are way different Rental businesses are
            way different from sales businesses. Most entrepreneurs think all
            eCommerce solutions can be used to develop a rental marketplace, but
            the requirements to develop one are way different Rental businesses
            are way different from sales businesses. Most entrepreneurs think
            all eCommerce solutions can be used to develop a rental marketplace,
            but the requirements to develop one are way different Rental
            businesses are way different from sales businesses. Most
            entrepreneurs think all eCommerce solutions can be used to develop a
            rental marketplace, but the requirements to develop one are way
            different Rental businesses are way different from sales businesses.
            Most entrepreneurs think all eCommerce solutions can be used to
            develop a rental marketplace, but the requirements to develop one
            are way different Rental businesses are way different from sales
            businesses. Most entrepreneurs think all eCommerce solutions can be
            used to develop a rental marketplace, but the requirements to
            develop one are way different
          </p>
          <Button className="white rounded align-self-end px-5"> Request a meeting</Button>
        </div>
      </div>
    </>
  );
};

export default QuestionAnswers;
