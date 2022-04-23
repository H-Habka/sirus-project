import React from "react";
import './Credit.style.scss';
const CreditForm = () => {
  return (
    <>
      <div className="row g-3 p-3 bg-white rounded">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-12 mb-4">
              <label forhtml="inputCredit" className="form-label fw-bold">
                By Credit
              </label>
              <select id="inputCredit" className="form-select rounded ">
                <option selected>$0.00</option>
                <option className="option">$20 total 5 star</option>
                {/* <span className="form-text">$1/stars</span> */}
                <option>$5 total 5 stars</option>
                <option>$100 total 5 stars</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 px-md-5">
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-primary rounded w-100 white">
                Buy Now
              </button>
              <div className="border my-4 p-2 boxed-text">
                <p className="text-muted fw-bold">
                  Stars are Nejmy’s online currency. If you see a Mentor that
                  you like and you want to boom a meeting with, then you use
                  stars to book (you will receive their meeting confirmation
                  number to active meetings and to your email address). The
                  amount of stars required to book a meeting varies depending on
                  the mentor price per hour
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="col-12 my-4">
                <label
                  forhtml="inputEranedCredit"
                  className="form-label fw-bold"
                >
                  EranedCredit
                </label>
                <input
                  type="text"
                  id="inputEranedCredit"
                  className="form-control rounded mb-4"
                  placeholder="$0.00"
                />
                <div id="inputEranedCredit" className="form-text">
                  As of January 2022
                </div>
              </div>
              <div className="col-12 my-4">
                <label
                  forhtml="inputCreditBalance"
                  className="form-label fw-bold"
                >
                  CreditBalance
                </label>
                <input
                  type="text"
                  id="inputCreditBalance"
                  className="form-control rounded mb-4"
                  placeholder="$0.00"
                  disabled
                />
                <div id="inputCreditBalance" className="form-text">
                  As of January 2022
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-md-5 pt-4">
              <div className="col-12 mt-4">
                <button type="submit" className="btn btn-success rounded w-100">
                  Requset Withdrawal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditForm;
