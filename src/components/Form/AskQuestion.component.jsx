import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CgAsterisk } from "react-icons/cg";
const AskQuestion = () => {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Container fluid className="p-lg-5 p-1">
        <div className="row bg-white rounded">
          <div className="row rounded pt-3 g-3 mt-0 px-md-4 pb-3">
            <div className="col-12 ">
              <label forhtml="inputTextarea" className="form-label fw-bold">
                Question <CgAsterisk className="danger"></CgAsterisk>{" "}
                <span className="text-muted small">
                  {" "}
                  — Minimum 150 characters
                </span>
              </label>
              <div id="inputTextarea" className="form-text mb-3">
                200 characters
              </div>
              <textarea
                type="text"
                className="form-control w-100"
                id="inputTextarea"
                rows="4"
                placeholder="Enter your question"
              ></textarea>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12">
              <label
                forhtml="inputtimeanddate"
                className="form-label fw-bold col-12"
              >
                Categories
              </label>
              <select
                id="inputtimeanddate"
                className="custom-select  rounded w-lg-75 w-100"
              >
                <option> </option>
              </select>
            </div>

            <div className="col-12 ">
              <label forhtml="inputTextarea" className="form-label fw-bold">
                Details
              </label>
              <div id="inputTextarea" className="form-text mb-3">
                200 characters
              </div>
              <textarea
                type="text"
                className="form-control w-100"
                id="inputTextarea"
                rows="4"
                placeholder="Provide more details"
              ></textarea>
            </div>
            <div className="col-12 py-3">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked={checked}
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  forhtml="flexSwitchCheckChecked"
                >
                  Post anonymously
                </label>
              </div>
            </div>

            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-primary rounded w-25 w-sm-100 white"
              >
                Ask your question
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AskQuestion;
