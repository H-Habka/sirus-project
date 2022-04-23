import React from 'react'
import QuestionAnswer from "../Answers/QuestionAnswer.component";
const RelatedQuestions = () => {
  return (
    <>
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
    </>
  )
}

export default RelatedQuestions