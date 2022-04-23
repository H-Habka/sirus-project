import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./ContentSection.style.scss";

import Image from "../../assets/img/callSection.jpg";
const ContentSection = () => {
  return (
    <>
      <section className="mt-5">
        <Container fluid>
          <Row className="my-5">
            <div className="col-12 d-flex flex-lg-row flex-column justify-content-center align-items-center py-3 bg-gray w-100 border">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <p className="text-muted  text-md-center py-md-3 fw-bold mb-0">
                More than 1000 templates meet every aspect of your business
                </p>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center">
                <Button className="px-5 fw-bold fs-5 white "> Get instant access</Button>
              </div>
            </div>
            {/* <div className="col-md-12 col-lg-6">
                            <div className="text bg-dark text-white p-4 text-capitalize rounded-3">
                                <h3 className="fs-2 ">Want to become a mentor?</h3>
                                <p className="fw-bold">
                                    Join our mentor network who are keen to share their knowledge and help others grow
                                </p>
                                <Button variant="primary" className="text-white fw-bold mt-3 rounded ">
                                    Join as a Mentor
                                </Button>
                            </div>
                        </div>                        
                        <div className="col-md-12 col-lg-6">
                            <div className="image">
                                <img src={Image} width="100%" height="100%" alt="become an expert " />
                            </div>
                        </div> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContentSection;
