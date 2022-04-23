import React from "react";
import Button from 'react-bootstrap/Button'
import { BsCheckCircleFill } from "react-icons/bs";
const Mentor = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="col text-center">
          <h2>Want to become a mentor?</h2>
          <h4 className="font">
            join our mentor network who are keen to share their knowledge and
            help others grow
          </h4>
          <Button className="mt-3 px-4 py-2 fw-bold">
            Join as a Mentor{" "}
          </Button>
        </div>
      </div>
      <div className="bg-gray mt-5 py-5">
        <div className="container row justify-content-center g-3 py-3 bg-white rounded ms-auto me-auto">
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center">
              <h5 className="text-info">01</h5>
              <h4 className="fw-bold">Join vega</h4>
              <p className="text-muted">
                Once you sign up with vega, you are one of us. You are making an
                effort to grow, and we respect that. We will do our best to
                support you in this exciting journey.
              </p>
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-5 align-self-center">
              <p className="pb-3">
                <BsCheckCircleFill className="me-3  success" size={20}></BsCheckCircleFill>A proven track
                record of at least 5 years hands-on experience
              </p>
              <p>
                <BsCheckCircleFill className="me-3  success" size={20}></BsCheckCircleFill>Friendly with great
                interpersonal skills
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-6">
              <h5 className="text-info">02</h5>
              <h4  className="fw-bold">Approval</h4>
              <p className="text-muted">
                Once we approve your request will be active in mentoring and
                answering questions.
              </p>
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-0 align-self-center">
              <p className="pb-3">
                <BsCheckCircleFill className="me-3  success" size={20}></BsCheckCircleFill>A proven track
                record of at least 5 years hands-on experience
              </p>
              <p>
                <BsCheckCircleFill className="me-3  success" size={20}></BsCheckCircleFill>Friendly with great
                interpersonal skills
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentor;
