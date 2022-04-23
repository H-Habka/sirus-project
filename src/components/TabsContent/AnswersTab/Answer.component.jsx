import React from "react";

const Answer = () => {
  return (
    <>
      <div className="row py-2">
        <div className="col-12 d-flex flex-column align-items-start bg-lightBlue border py-3 rounded">
          <h5>
            {" "}
            Q: Mobile applications: Creating social networking application for
            iOS, which languages should it support?
          </h5>
          <p className="px-5 py-1">
            Good question, but my feeling is wrong time to ask it. It's hard
            enough to get users, period. Getting users in your home country is
            going to be much easier than a foreign country (I'm assuming you're
            a US based company/founders). Now, there is a time when I would
            absolutely look at language support for other countries, but there
            is so much to learn about your product, your users, your customer
            acquisition and all that jazz before you go and build out the code
            to handle different languages. Now, if you are building a really
            basic app that is easy to translate, then maybe. But if the app is
            going to be a reasonably sophisticated social app, with at least a
            few bells and whistles, it may be more than you want to take on at
            first.
          </p>
        </div>
      </div>
    </>
  );
};

export default Answer;
