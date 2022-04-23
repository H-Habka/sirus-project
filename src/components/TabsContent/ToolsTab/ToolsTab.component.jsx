import React from 'react';
import { Container } from 'react-bootstrap';
import CustomButton from '../../Form/CustomButton.component';

const ToolsTap = () => {
  return (<>

    <Container className="mt-5 bg-white rounded p-5">
      <h2 className=' text-center'> Tools </h2>
      <div className="row mt-5">
        <div className="col-12 d-md-flex justtify-md-center left-btns mb-2">
          <CustomButton variant="light" classes="rounded-btn my-1 mx-2 outline-gray w-lg-25" value="CRM" />
        </div>
      </div>

    </Container>
  </>
  );
};

export default ToolsTap;
