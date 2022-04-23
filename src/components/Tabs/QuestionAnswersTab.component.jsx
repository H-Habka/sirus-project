import React from "react";
import QuestionAnswers from "../Answers/QuestionAnswers.component";
const QuestionAnswersTab = () => {
  return (
    <>
    <div className="col-12">
      <QuestionAnswers
        asker="alisar"
        category="Software Development, B2B eCommerce"
        question="Which White-label eCommerce solution will you recommend for the online rental market?"
        answersCount="3"
        details="I am looking for a RV rental industry specific solution which has built in functionality of adding buffer time between two rental durations and quote
        functionality where customers can share quotes to the sellers registered on the platform. Please share suitable suggestions. Looking to create something
        like RVShare, Outdoorsy"
        latestAnswerDate="6 days ago"
        user="alisar haider"
      />
         
    </div>
    </>
  );
};

export default QuestionAnswersTab;
