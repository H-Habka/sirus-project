import React from "react";
import QuestionCard from "./QuestionCard.component";
import Container from 'react-bootstrap/Container'
const OpenQuestions = () => {
  return (
    <>
      <Container fluid className="p-lg-5 p-1">
        <div className="row bg-white rounded">
          <div className="row p-md-3 p-lg-5 p-2">
            <QuestionCard
              user="alisar"
              date="11 mins ago"
              question="Which company do I trust to 'Write my Paper'"
              category=" Creative Writing"
            />
            <QuestionCard
              user="Rentals"
              date="6 days ago"
              question="Which White-label eCommerce solution will you recommend for the online rental market"
              category=" Software Development, B2B eCommerce"
            />
            <QuestionCard
              user="alisar"
              date="11 mins ago"
              question="Which company do I trust to 'Write my Paper'"
              category=" Creative Writing"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default OpenQuestions;
