import React from "react";
import "./QuestionAnswer.style.scss";
import Avatar from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
const QuestionAnswer = (props) => {
  return (
    <>
      <div className="row p-lg-5 p-md-3 p-sm-1 questionAnswer">
        <div className="col-12">
          <p className="text-muted mb-0">
            {props.asker}:{props.category}
          </p>
          <h5 className="fw-bold mb-0">{props.question}</h5>
          <p className="text-muted mt-0 small">
            {props.answersCount} Answers <BsDot size={20}></BsDot>  {props.latestAnswerDate}
          </p>
        </div>
        <Link to="/answers/answer" className="text-decoration-none black">
          <div className="col-12 bg-dark-gray py-3 mt-3 answerTxt">
            <img src={Avatar} alt="" className="img rounded-pill ms-1 me-3" />
            <span className="fw-bold">{props.user}</span>

            <p className="max-ch-200 ps-md-5 ps-sm-1" maxlength="100">
              Rental businesses are way different from sales businesses. Most
              entrepreneurs think all eCommerce solutions can be used to develop
              a rental marketplace, but the requirements to develop one are way
              different Rental businesses are way different from sales
              businesses. Most entrepreneurs think all eCommerce solutions can
              be used to develop a rental marketplace, but the requirements to
              develop one are way different Rental businesses are way different
              from sales businesses. Most entrepreneurs think all eCommerce
              solutions can be used to develop a rental marketplace, but the
              requirements to develop one are way different Rental businesses
              are way different from sales businesses. Most entrepreneurs think
              all eCommerce solutions can be used to develop a rental
              marketplace, but the requirements to develop one are way different
              Rental businesses are way different from sales businesses. Most
              entrepreneurs think all eCommerce solutions can be used to develop
              a rental marketplace, but the requirements to develop one are way
              different Rental businesses are way different from sales
              businesses. Most entrepreneurs think all eCommerce solutions can
              be used to develop a rental marketplace, but the requirements to
              develop one are way different Rental businesses are way different
              from sales businesses. Most entrepreneurs think all eCommerce
              solutions can be used to develop a rental marketplace, but the
              requirements to develop one are way different Rental businesses
              are way different from sales businesses. Most entrepreneurs think
              all eCommerce solutions can be used to develop a rental
              marketplace, but the requirements to develop one are way different
              Rental businesses are way different from sales businesses. Most
              entrepreneurs think all eCommerce solutions can be used to develop
              a rental marketplace, but the requirements to develop one are way
              different
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default QuestionAnswer;
