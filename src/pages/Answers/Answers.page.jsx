import { React, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AnswersBar from "../../components/Answers/AnswersBar.component";
import OpenQuestions from "../../components/Answers/OpenQuestions.component";
import AskQuestion from "../../components/Form/AskQuestion.component";
import Answers from "../../components/Tabs/Answers.component";

const AnswersPage = (props) => {
  const [tabContent, setTabContent] = useState(<Answers />);

  return (
    <>
      <Container fluid className="bg-gray">
        <div className="row justify-content-center  bg-white">
          <div className="col-md-10 col-sm-12 ">
            <AnswersBar onChange={setTabContent}></AnswersBar>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Answers type="latest" />} />
          <Route path="/popular" element={<Answers type="popular" />} />
          <Route path="/questions" element={<OpenQuestions />} />
          <Route path="/ask" element={<AskQuestion />} />
        </Routes>
        {/* <Container fluid className="p-lg-5 p-1">
          <div className="row bg-white rounded">
            {props.children ? props.children : tabContent}
          </div>
        </Container> */}
      </Container>
    </>
  );
};

export default AnswersPage;
