import React from 'react';
import { Container } from 'react-bootstrap';
import Review from './Review.component';

const ReviewsTab = () => {
  return(
      <>
      <Container className=' bg-white p-5'>
          <h2 className='mb-5'> Reviews (14) </h2>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
      </Container>
      </>
  );
};

export default ReviewsTab;
