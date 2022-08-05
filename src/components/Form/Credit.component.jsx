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
              <select id="inputCredit" className="form-select  ">
                <option>$0.00</option>
                <option>$20 total 20 star</option>
                
                <option>$50 total 55 stars</option>
                <option>$100 total 125 stars</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 px-md-5">
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-primary  w-100 white">
                Buy Now
              </button>
              <div className="border mb-4 mt-1 p-2 boxed-text">
                <p className="text-muted fw-bold">
                  Stars are Nejmy’s online currency. If you see a Mentor that
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
                  className="form-control  mb-4"
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
                  className="form-control  mb-4"
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
                <button type="submit" className="btn btn-success  w-100">
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
