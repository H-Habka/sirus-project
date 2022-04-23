import React from "react";
import Button from "react-bootstrap/Button";
import JoinVega from "../../assets/img/Join-vega.jpeg";
import RightMentor from "../../assets/img/righ-mentor.jpeg";
import Coaching from "../../assets/img/coaching.jpeg";
import Meeting from "../../assets/img/meeting.jpeg";

const Entrepreneurs = () => {
  return (
    <>
      <div className="container text-center mt-5">
        <div className="col text-center">
          <h2>How vega works?</h2>
          <h4 className="font">Meet with mentors to grow your business</h4>
          <Button className="mt-3 px-4 py-2 fw-bold"> I’am in! sign me up </Button>
        </div>
      </div>
      <div className="bg-gray mt-5 py-5">
        <form className="container row justify-content-center g-3 py-3 bg-white rounded ms-auto me-auto">
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center">
              <h5>01</h5>
              <h5>Join vega</h5>
              <p className="fz-p">
                Once you sign up with vega, you are one of us. You are making an
                effort to grow, and we respect that. We will do our best to
                support you in this exciting journey.
              </p>
              <Button className="mt-3 px-4 py-2 fw-bold"> Get started today </Button>
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <img src={JoinVega} className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-6 mt-3 mt-lg-0 align-self-center order-last order-lg-first">
              <img src={RightMentor} className="img-fluid" />
            </div>
            <div className="col-12 col-lg-6 order-first order-lg-last">
              <h5>02</h5>
              <h5>Find the right mentor</h5>
              <p className="fz-p">
                Whatever advice you're looking for, we'll help you find the
                right mentor for you. Check out their profiles, reviews, and
                prices to help you make a decision.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-6 order-first order-lg-first">
              <h5>03</h5>
              <h5>Request a meeting or coaching</h5>
              <p className="fz-p">
                Once you choose the right mentor, you can send a meeting request
                that suites you.
              </p>
            </div>
            <div className="col-12 col-lg-6 mt-3 mt-lg-0 align-self-center order-last order-lg-last">
              <img src={Coaching} className="img-fluid" />
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-12 col-lg-6 align-self-center text-lg-center">
              <h5>04</h5>
              <h5>Connect directly</h5>
              <p className="fz-p">
                The mentor will accept your request, You’ll get an email 60
                minutes before your call to remind you. When it’s time to show
                up, simply head over to your Skype, Zoom, Google meetup room of
                choice and start talking! The meeting will take place, then you
                can review the service.
              </p>
              <img src={Meeting} className=" mt-2 img-fluid" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Entrepreneurs;
