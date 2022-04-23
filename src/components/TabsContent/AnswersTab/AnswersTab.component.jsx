import React from 'react';
import { Container } from 'react-bootstrap';
import Answer from './Answer.component';

const AnswersTab = () => {
  return(
      <>
      <Container className=' bg-white p-5'>
          <h2 className='mb-5'> Answers (14) </h2>
          <Answer />
          <Answer />
          <Answer />
          <Answer />
      </Container>
      </>
  );
};

export default AnswersTab;
