import { React, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEnvelopeFill, BsSearch, BsTriangleFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import "./AnswersBar.style.scss";
import QuestionAnswersTab from "../Tabs/QuestionAnswersTab.component";
import RelatedQuestions from "../Tabs/RelatedQuestions.component";

const AnswerBar = (props) => {
  const [primary, setPrimary] = useState(0);

  const menu = [
    {
      title: "Answer",
      component: <QuestionAnswersTab />,
    },
    {
      title: "Related questions",
      component: <RelatedQuestions />,
    },
  ];
  return (
    <>
      <div className="py-5 filter-bar">
        <div className="row">
          <div className="col-12">
            <div className="search d-flex w-100 align-items-center">
              <BsSearch></BsSearch>{" "}
              <input type="search" placeholder="Search" className="w-100" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 col-12 d-flex flex-column flex-md-row text-center justify-content-start bar-links">
            {menu.map((item, index) => (
              <Button
                variant="empty"
                className={primary === index ? "primary fw-bold" : "fw-bold"}
                onClick={(e) => {
                  props.onChange(item.component);
                  setPrimary(index);
                }}
              >
                {item.title}
              </Button>
            ))}
          </div>
          <div className="col-lg-6 col-12 d-flex flex-column flex-md-row text-center justify-content-end bar-links">
            <Button variant="empty">
              <BsFillEnvelopeFill size={20} className="primary"></BsFillEnvelopeFill> Share this question
            </Button>
            <Button variant="empty">
              <BsTriangleFill  size={20}  className="primary"></BsTriangleFill> Report this question
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerBar;
