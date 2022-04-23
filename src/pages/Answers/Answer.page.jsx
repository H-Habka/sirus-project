import { React, useState } from "react";
import { Container } from "react-bootstrap";
import AnswerBar from "../../components/Answers/AnswerBar.component";
import QuestionAnswersTab from "../../components/Tabs/QuestionAnswersTab.component";
const Answer = () => {
  const [tabContent, setTabContent] = useState(<QuestionAnswersTab />);

  return (
    <>
      <Container fluid className="bg-gray">
        <div className="row justify-content-center  bg-white">
          <div className="col-md-10 col-sm-12 ">
            <AnswerBar onChange={setTabContent}></AnswerBar>
          </div>
        </div>
        <Container fluid className="p-lg-5 p-1">
          <div className="row bg-white">{tabContent}</div>
        </Container>
      </Container>
    </>
  );
};

export default Answer;
