import React, { useEffect, useState } from "react";
import { BsCalendar3, BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./ProfileHeader.style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { FiCopy } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import Nav from "react-bootstrap/Nav";
import CustomButton from "../../Form/CustomButton.component";
import Issf from "../../../assets/img/issf.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../../api";

const BootstrapProfile = ({ currentUser, id }) => {
  const [favorite, setFavorite] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api.users
      .getById(id)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((e) => {
        navigate("../ErrorPage");
        console.log(e);
      });
  }, [id]);

  return (
    <>
      <Container>
        <Row className="d-flex text-center mt-2">
          <Col>
            <img className="mb-3 img img-thumbnail profile-img" src={Issf} />
          </Col>

          <strong>{`${user?.firstName} ${user?.lastName}`}</strong>
          <p>
            <small>Founder & CEO in B2B,B2C,SAAS </small>
          </p>

          <Nav
            className="d-flex mx-2 justify-content-center text-muted small"
            defaultActiveKey="/home"
            as="ul"
          >
            <Nav.Item as="li" className="d-flex">
              <IoLocationOutline size={20}></IoLocationOutline>
              <p>Venture Capital (VC)</p>
            </Nav.Item>
            <Nav.Item as="li" className="d-flex">
              <BiWorld className="mx-2" size={20}></BiWorld>
              <p>https://issfjo.com</p>
            </Nav.Item>
          </Nav>
        </Row>
        <Row className="d-flex border rounded flex pe-xs-4 sm-small pt-1">
          <Col md={4} xs={12} className="center">
            <h5 className="mb-0 fw-bolder">Telephone</h5>
            <p className="text mb-0">+962 6 4636332</p>
          </Col>
          <Col md={4} xs={12} className="center text-center">
            <h5 className="fw-bold mb-0">Email address</h5>
            <p className="text mb-0">investements@issfjo.com</p>
          </Col>

          <Col md={4} xs={12} className="text-end">
            <h5 className="center mb-0 fw-bolder">Address</h5>

            <p className="text text-end center mb-0">
              3rd Circle, Tawfiq Abu Al-Huda St, Middle East Insurance Company
              Building,1st Floor
            </p>
          </Col>
        </Row>

        <div className="row border rounded my-3 bg-gray">
          <div className="col-12 d-flex justify-content-center align-items-center py-3">
            <p className="mb-0 sm-small text-sm-center fw-bold">
              {/* investor */}
              <BsCalendar3 className="me-3"></BsCalendar3> Next funding round - March, 2022
              {/* investor */}
              {/* startup */}
              {/* <BsCalendar3 className="me-3"></BsCalendar3> $100,000 for 15% equity */}

              {/* startup */}

            </p>
          </div>
        </div>
        <Row className="mb-2">
          <Col
            lg={9}
            md={12}
            className="d-md-flex  justify-md-center d-flex align-items-center"
          >
            {/* investor */}
            <CustomButton
              classes="mb-md-0 mb-sm-3  w-25 w-sm-100 outline-gray rounded mx-2 white"
              variant="primary"
              locked="true"
              value="Apply for funding"
            ></CustomButton>
            {/* investor */}
            {/* startup */}
            {/* <CustomButton
              classes="mb-md-0 mb-sm-3  w-25 w-sm-100 outline-gray rounded mx-2 white"
              variant="primary"
              locked="true"
              value="Request Business plan"
            ></CustomButton> */}
            {/* startup */}

            <CustomButton
              classes="mb-md-0 mb-sm-3 w-25 w-sm-100  outline-gray rounded mx-2"
              variant="empty"
              locked="true"

              value="Send message"
            ></CustomButton>
            {user.id !== currentUser.id ? (
              favorite ? (
                <CustomButton
                  classes="mb-md-0 mb-sm-3 w-25 w-sm-100  outline-gray rounded  mx-2"
                  variant="empty"
                  value="Remove from favorites"
                  handleClick={() => setFavorite(false)}
                ></CustomButton>
              ) : (
                <CustomButton
                  classes="mb-md-0 mb-sm-3 w-25 w-sm-100  outline-gray rounded  mx-2"
                  variant="empty"
                  value="Save to favorites"
                  handleClick={() => setFavorite(true)}
                ></CustomButton>
              )
            ) : null}
          </Col>
          <Col
            lg={3}
            md={12}
            className="d-md-flex justify-md-center justify-content-end my-md-3"
          >
            <div className="d-flex justify-md-center">
              <BsFacebook className="mx-2" size={30}></BsFacebook>
              <BsInstagram className="mx-2" size={30}></BsInstagram>
              <AiFillTwitterCircle
                className="mx-2"
                size={30}
              ></AiFillTwitterCircle>
            </div>
          </Col>
        </Row>
     {/* investor */}

        <Row className="d-flex pt-2">
          <div className="col-lg-8 col-md-12  col-sm-12 py-3 d-flex justify-content-between ">
            <Link to={`/profile/${user?.id}`} className="tabLink active">
              {" "}
              Profile
            </Link>
            <Link
              to={`/profile/${user?.id}/expertise`}
              className="tabLink text-muted"
            >
              {" "}
              Industry focus
            </Link>
            <Link
              to={`/profile/${user?.id}/tools`}
              className="tabLink text-muted"
            >
              {" "}
              Geographical focus {" "}
            </Link>
            <Link
              to={`/profile/${user?.id}/reviews`}
              className="tabLink text-muted"
            >
              {" "}
              Funding stage
            </Link>
            <Link
              to={`/profile/${user?.id}/answers`}
              className="tabLink text-muted"
            >
              {" "}
              Fund size
            </Link>
            <Link
              to={`/profile/${user?.id}/answers`}
              className="tabLink text-muted"
            >
              {" "}
              Funded startups
            </Link>
            
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-end align-items-center justify-md-center">
            <Link to="#" className="tabLink text-muted">
              {" "}
              copy profile link <FiCopy></FiCopy>{" "}
            </Link>
          </div>
        </Row>
     {/* investor */}

     {/* startup */}
     {/* <Row className="d-flex pt-2">
          <div className="col-lg-8 col-md-12  col-sm-12 py-3 d-flex justify-content-between ">
            <Link to={`/profile/${user?.id}`} className="tabLink active">
              {" "}
              Profile
            </Link>
            <Link
              to={`/profile/${user?.id}/expertise`}
              className="tabLink text-muted"
            >
              {" "}
              Problem worth solving
            </Link>
            <Link
              to={`/profile/${user?.id}/tools`}
              className="tabLink text-muted"
            >
              {" "}
              The solution{" "}
            </Link>
            <Link
              to={`/profile/${user?.id}/reviews`}
              className="tabLink text-muted"
            >
              {" "}
              Financial summary
            </Link>
            <Link
              to={`/profile/${user?.id}/answers`}
              className="tabLink text-muted"
            >
              {" "}
              Key milestones
            </Link>
            <Link
              to={`/profile/${user?.id}/answers`}
              className="tabLink text-muted"
            >
              {" "}
              Team members
            </Link>
            
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-end align-items-center justify-md-center">
            <Link to="#" className="tabLink text-muted">
              {" "}
              copy profile link <FiCopy></FiCopy>{" "}
            </Link>
          </div>
        </Row> */}
     {/* startup */}

      </Container>
    </>
  );
};
export default BootstrapProfile;
