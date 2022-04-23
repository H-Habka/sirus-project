import React from 'react';
import { Container } from 'react-bootstrap';
import CustomButton from '../../Form/CustomButton.component';

const ExpertiseTab = () => {
  return (<>

    <Container className="mt-5 bg-white rounded p-5">
      <h2 className=' text-center'> Expertise </h2>
      <div className="row mt-5">
        <div className="col-12 d-md-flex justtify-md-center left-btns mb-2">
          <CustomButton variant="light" classes="rounded-btn my-1 mx-2 outline-gray w-lg-25" value="Mindset Coaching" />
          <CustomButton variant="light" classes="rounded-btn my-1 mx-2 outline-gray w-lg-25" value="Team Building" />
          <CustomButton variant="light" classes="rounded-btn my-1 mx-2 outline-gray  w-lg-25" value="Growth Marketing" />
        </div>
      </div>

    </Container>
  </>
  );
};

export default ExpertiseTab;
