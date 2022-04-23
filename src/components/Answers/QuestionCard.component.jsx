import {React ,useState} from "react";
import  Button  from "react-bootstrap/Button";
import './QuestionCard.style.scss';
const QuestionCard = (props) => {
  const [show, setShow] = useState(false);
const changeState = () => {
  setShow(!show);
}
  return (
    <>
      <div className="row questionCard pb-3">
        <div className="col-md-10 col-sm-12">
          <p className="text-muted small mb-0">
            {props.user}: {props.category}
          </p>
          <h5 className="fw-bold mb-0">{props.question} ?</h5>
          <p className="text-muted small">{props.date}</p>
        </div>
        <div className="col-md-2 col-sm-12 d-flex flex-row flex-lg-row flex-md-column justify-content-between align-items-center">
            <Button variant="success" onClick={changeState}> Answer </Button>
            <Button variant="danger"> Dismiss </Button>
        </div>

        <div className={show ? 'd-block col-12' : 'd-none col-12'}>
          <form action="">
            <div className="form-group col-12 mb-3">
              <textarea className="form-control" name="answer" id="answer" cols="30" rows="3" placeholder="Answer this question"></textarea>
            </div>
            <div className="form-group col-12 d-flex justify-content-end">
              <input type="submit" value="submit" className="white btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
