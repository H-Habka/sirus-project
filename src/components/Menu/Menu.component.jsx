import React, { useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  InputGroup,
  Image,
  Button,
} from "react-bootstrap";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./menu.style.scss";
import "react-bootstrap-submenu/dist/index.css";
import logo from "../../assets/img/logo-en.png";
import { FaUserCircle } from "react-icons/fa";
import {
  DropdownSubmenu,
  MenuItem,
  NavDropdownMenu,
} from "react-bootstrap-submenu";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { userLogOut } from "../../redux/user/user.actions";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { fetchCategoriesInit } from "../../redux/categories/catergories.actions";
import {categories, labelCategroiesSelector} from '../../redux/categories/categories.selector'
const Menu = ({ user, logOut,fetchCategoriesInit,labelCategroiesSelector }) => {


  useEffect(() =>{
    console.log({labelCategroiesSelector});
  }) 


  useEffect(() =>{
    fetchCategoriesInit()
  },[])


  const navigate = useNavigate();
  const menuItems = [
    {
      title: "Investors",
      link: "#",
      subMenu: [
        "Angel",
        "Asset Management",
        "Crowd-funder",
        "Holding Company",
        "Investment Company",
        "Private Equity",
        "Venture Capital (VC)",
        "Family Office",
        "Government Initiative",
        "VC (Government Backed)",
        "Corporate Accelerator",
        "Corporate VC (CVC)"
      ],
    },
    {
      title: "Startups",
      link: "#",
      subMenu: [
        "Advertising and Marketing",
       "  Aerospace & Defence ",
       "  Agnostic",
       "  Agriculture",
       "  AR/VR",
       "  Artificial Intelligence",
       "  Media & Entertainment",
       "  Blockchain",
       "  Construction & Infrastructure",
       "  Home Services",
       "  Creative",
       "  Data Analytics and Business Intelligence",
       "  Transport & Logistics",
       "  E-commerce",
       "  EdTech",
       "  Events",
       "  Fashion & Lifestyle",
       "  Fashion & Lifestyle",
       "  FinTech",
       "  Food & Beverage",
       "  Gaming",
       "  General",
       "  Hardware",
       "  Healthcare",
       "  Insurance",
       "  IoT",
       "  IT Solutions",
       "  Legal",
       "  Multimedia",
       "  Productivity apps",
       "  Enterprise Software",
       "  Real Estate",
       "  Renewable Energy",
       "  Retail",
       "  Robotics",
       "  Cyber Security",
       "  Social Entrepreneurship",
       "  Space Tech",
       "  Sports & Fitness",
       "  Technology",
       "  Telecom & communications",
       "  Transport",
       "  Travel & Tourism",
       "  Video & Animation",
       "  Sustainability",
       "  Architecture & Design",
       "  Energy",
       "  Life Sciences",
 
      ],
    },
    
  ];
  const language = (
    <AiOutlineGlobal size={25} className="text-muted"></AiOutlineGlobal>
  );
  const gridIcon = <CgMenuGridO size={30} className="text-muted"></CgMenuGridO>;
  const userIcon = <FaUserCircle size={30} className="primary" />;
  return (
    <header id="header_top" className="container-fluid">

        <Navbar bg="light" expand="lg">
          <Container fluid className="justify-content-between">
            <Navbar.Brand as={Link} to="/" className="me-5">
              <Image src={logo} width="100" height="52" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse
              id="navbarScroll"
              className="justify-content-between"
            >
              <Nav>
                <NavDropdownMenu
                  title="Explore"
                  id="navbarScrollingDropdown"
                  className="px-2"
                >
                  <NavDropdown.Item as={Link} to="/categories">
                    Categories
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="mb-4" />
                  {labelCategroiesSelector.map((item, index) => (
                    <DropdownSubmenu
                      href={item.link}
                      title={item.title}
                      key={index}
                    >
                      {item.subMenu.map((subItem, idx) => (
                        <NavDropdown.Item href="0" key={idx}>
                          {" "}
                          {subItem}{" "}
                        </NavDropdown.Item>
                      ))}
                    </DropdownSubmenu>
                  ))}
                </NavDropdownMenu>
              </Nav>
              {user ? (
                <Nav>
                  <NavDropdownMenu
                    title={language}
                    id="navbarScrollingDropdown"
                    className="px-2 language-menu"
                  >
                    <NavDropdown.Item as={Link} to="/">
                      English
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/ar">
                      العربية
                    </NavDropdown.Item>
                  </NavDropdownMenu>
                  <NavDropdownMenu
                    title={userIcon}
                    id="navbarScrollingDropdown"
                    className="px-2 user-menu"
                  >
                    <NavDropdown.Item as={Link} to="/account">
                      Account
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    <NavDropdown.Item as={Link} to="/ar">
                      Meetings
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/ar">
                      Inbox
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/ar">
                      Favorites
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={(e) => {
                        e.preventDefault();
                        logOut();
                        navigate("/");
                      }}
                    >
                      logout
                    </NavDropdown.Item>
                  </NavDropdownMenu>
                  {/* <Nav.Link
                    className="me-4"
                    as={Link}
                    to={`/profile/${user?.id}`}
                  >
                    <img
                      className="navbar-profile-picture"
                      width="50px"
                      src="/logo192.png"
                    ></img>
                  </Nav.Link> */}
                </Nav>
              ) : (
                <Nav>
                  <NavDropdownMenu
                    title={language}
                    id="navbarScrollingDropdown"
                    className="px-2 language-menu"
                  >
                    <NavDropdown.Item as={Link} to="/">
                      English
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/ar">
                      العربية
                    </NavDropdown.Item>
                  </NavDropdownMenu>
                  <Nav.Link as={Link} to="/auth">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/auth">
                    <Button className="join-btn rounded white ">
                      <FaUserCircle size={20}></FaUserCircle>
                      <span> Try for free </span>
                    </Button>
                  </Nav.Link>
                  <NavDropdownMenu
                    title={gridIcon}
                    id="navbarScrollingDropdown"
                    className="px-2 icons-menu"
                  >
                    <div className="icons-container">
                      <div className="row">
                        <div className="col-4">
                          <NavDropdown.Item as={Link} to="">
                            <img src={logo} className="img" width="50px" />
                          </NavDropdown.Item>
                        </div>
                        <div className="col-4">
                          <NavDropdown.Item as={Link} to="">
                            <img src={logo} className="img" width="50px" />
                          </NavDropdown.Item>
                        </div>
                        <div className="col-4">
                          <NavDropdown.Item as={Link} to="">
                            <img src={logo} className="img" width="50px" />
                          </NavDropdown.Item>
                        </div>
                        <div className="col-4">
                          <NavDropdown.Item as={Link} to="">
                            <img src={logo} className="img" width="50px" />
                          </NavDropdown.Item>
                        </div>
                        <div className="col-4">
                          <NavDropdown.Item as={Link} to="">
                            <img src={logo} className="img" width="50px" />
                          </NavDropdown.Item>
                        </div>
                        <div className="col-4">
                          <NavDropdown.Item as={Link} to="">
                            <img src={logo} className="img" width="50px" />
                          </NavDropdown.Item>
                        </div>
                      </div>
                    </div>
                  </NavDropdownMenu>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  labelCategroiesSelector : labelCategroiesSelector
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(userLogOut()),
  fetchCategoriesInit : () => dispatch(fetchCategoriesInit())
});
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
