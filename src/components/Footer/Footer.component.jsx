import { Link } from "react-router-dom";

import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";

import Antares from "../../assets/img/plateform_logos/Antares.png";
import Canopus from "../../assets/img/plateform_logos/Canopus.png";
import Polaris from "../../assets/img/plateform_logos/Polaris.png";
import Rigel from "../../assets/img/plateform_logos/Rigel.png";
import Sirius from "../../assets/img/plateform_logos/Sirius.png";
import Vega from "../../assets/img/plateform_logos/Vega.png";
import Nejmy from "../../assets/img/plateform_logos/Nejmy.png";

import "./Footer.style.scss";
const Footer = () => {
  return (
    <>
      <footer className=" container-fluid bg-gray pt-4">
        <div className="row py-4">
          <div className="col-md-4 text-center">
            <h5 className="fw-bold">Interviews</h5>
            <Link to="/entrepreneurs" className="text-decoration-none fw-bold">
              {" "}
              Watch{" "}
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="fw-bold">Templates</h5>
            <Link to="/mentor" className="text-decoration-none fw-bold">
              {" "}
              Download{" "}
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="fw-bold">Term of use</h5>
            <Link to="/terms-of-use" className="text-decoration-none fw-bold">
              {" "}
              Read{" "}
            </Link>
          </div>
        </div>
        <div className="row bg-dark text-white py-4">
          <div className="col-12 text-center">
            <p> the nejmy.com platform</p>
          </div>
          <div className="col-12 d-flex flex-column flex-lg-row align-items-center justify-content-center py-3">
            <img src={Antares} alt="" height="50px" className="mx-2" />
            <img src={Canopus} alt="" height="50px" className="mx-2" />
            <img src={Polaris} alt="" height="50px" className="mx-2" />
            <img src={Rigel} alt="" height="50px" className="mx-2" />
            <img src={Sirius} alt="" height="50px" className="mx-2" />
            <img src={Vega} alt="" height="50px" className="mx-2" />
          </div>
        </div>
        <div className="row pt-3 pb-1 pe-3">
          <div className="col-md-4 ps-5">
            <img src={Nejmy} alt="" height="50px" />
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <BsFacebook className="mx-2 danger" size={25}></BsFacebook>
            <BsTwitter className="mx-2 danger" size={25}></BsTwitter>
            <BsLinkedin className="mx-2 danger" size={25}></BsLinkedin>
            <BsYoutube className="mx-2 danger" size={25}></BsYoutube>
          </div>
          <div className="col-md-4  d-flex justify-content-end align-items-center">
            <p className=" mb-0 text-muted">
              Copyright © 2022 nejmy.com. All rights reserved
            </p>
          </div>
        </div>
        {/* <Row className="justify-content-between">
                        <Col lg={6} md={12}>
                            <p><img src={Logo} height="62" alt="" /></p>
                            <p>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
                            <div className="social-links">
                                <ul>
                                    <li>Follow us</li>
                                    <li><Link to="#0"><BsFacebook></BsFacebook></Link></li>
                                    <li><Link to="#0"><BsTwitter></BsTwitter></Link></li>
                                    <li><Link to="#0"><BsLinkedin></BsLinkedin></Link></li>
                                    <li><Link to="#0"><BsInstagram></BsInstagram></Link></li>
                                    <li><Link to="#0"><BsPinterest></BsPinterest></Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="ml-lg-auto">
                            <h5>Useful links</h5>
                            <ul className="d-flex flex-column list-unstyled">
                                <li><Link className="text-decoration-none text-white ms-1" to="#0">Admission</Link></li>
                                <li><Link className="text-decoration-none text-white ms-1" to="#0">About</Link></li>
                                <li><Link className="text-decoration-none text-white ms-1" to="#0">Login</Link></li>
                                <li><Link className="text-decoration-none text-white ms-1" to="#0">Register</Link></li>
                                <li><Link className="text-decoration-none text-white ms-1" to="#0">News &amp; Events</Link></li>
                                <li><Link className="text-decoration-none text-white ms-1" to="#0">Contacts</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6}>
                            <h5>Contact with Us</h5>
                            <ul className=" d-flex flex-column list-unstyled">
                                <li><Link className="text-decoration-none text-white ms-1" to="tel://61280932400"><i className="ti-mobile"></i> + 61 23 8093 3400</Link></li>
                                <li><Link className="text-decoration-none text-white ms-1" to="mailto:info@udema.com"><i className="ti-email"></i> info@udema.com</Link></li>
                            </ul>
                            <div className="mt-5">
                                <h6>Newsletter</h6>
                                <InputGroup className="mt-3" >
                                    <FormControl
                                        size='sm'
                                        placeholder="What advice are you looking for ?"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button className="search-btn p-2 px-4 text-white fw-bold" variant="primary" id="button-addon2">
                                        search
                                    </Button>
                                </InputGroup>
                            </div>
                        </Col></Row> */}
      </footer>
    </>
  );
};

export default Footer;
