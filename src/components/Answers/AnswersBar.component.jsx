import { React } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import "./AnswersBar.style.scss";
import Answers from "../Tabs/Answers.component";
import AskQuestion from "../Form/AskQuestion.component";
import OpenQuestions from "./OpenQuestions.component";
import { useLocation } from "react-router-dom";

const AnswersBar = (props) => {

  const location = useLocation();
  const menu = [
    {
      title: "Latest answers",
      link: "/answers/",
      type: "all",
    },
    {
      title: "Popular answers",
      link: "/answers/popular",
      type: "user",
    },
    {
      title: "Open questions",
      link: "/answers/questions",
      type: "mentor",
    },
    {
      title: "Ask a question",
      link: "/answers/ask",
      type: "all",

    },
  ];

    // location.pathname === "/answers/ask" ? setPrimary(3) : setPrimary(0)

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
          <div className="col-lg-6 col-12 d-flex flex-column flex-md-row text-center justify-content-between bar-links">
            {menu.map((item, index) =>             
                <Button
                  variant="empty"
                  className={location.pathname === item.link ? "primary fw-bold" : "fw-bold"}
                  as={Link}
                  to={item.link}
                >
                  {item.title}
                </Button>
              
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswersBar;
