import React from "react";
import { Container } from "react-bootstrap";
import QuestionAnswer from "../Answers/QuestionAnswer.component";
const Answers = (props) => {


  return (
    <>
      <Container fluid className="p-lg-5 p-1">
        <div className="row bg-white rounded">
          <div className="col-12 pt-5 ps-5">
            <h5 className="fw-bold">
              {props.type} Answers
            </h5>
          </div>
          <div className="col-12">
            <QuestionAnswer
              asker="alisar"
              category="category"
              question="Lorem epsom kjshlkshdfljksh"
              answersCount="3"
              latestAnswerDate="6 days ago"
              user="alisar haider"
            />
            <QuestionAnswer
              asker="alisar"
              category="category"
              question="Lorem epsom kjshlkshdfljksh"
              answersCount="3"
              latestAnswerDate="6 days ago"
              user="alisar haider"
            />
            <QuestionAnswer
              asker="alisar"
              category="category"
              question="Lorem epsom kjshlkshdfljksh"
              answersCount="3"
              latestAnswerDate="6 days ago"
              user="alisar haider"
            />

          </div>
        </div>
      </Container>
    </>
  );
};

export default Answers;
