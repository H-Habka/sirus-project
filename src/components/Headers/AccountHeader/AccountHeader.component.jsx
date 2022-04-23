import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import avatar from "../../../assets/img/avatar.jpg";
import { FiCopy } from "react-icons/fi";
import { RiRadioButtonFill } from "react-icons/ri";

import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BiEdit, BiWorld } from "react-icons/bi";
import CustomButton from "../../Form/CustomButton.component";
import { Link, useLocation } from "react-router-dom";
import ProfileForm from "../../Form/Profile.component";
import SettingsForm from "../../Form/Settings.component";
import PaymentsForm from "../../Form/Payments.component";
import CreditForm from "../../Form/Credit.component";
import MeetingForm from "../../Form/Meeting.component";
import HistoryTable from "../../Tables/HistoryTable.component";
import InboxTable from "../../Tables/InboxTable.component";
import Favorites from "../../Favorite/Favorites.component";
import { Button } from "react-bootstrap";
import "./AccountHeader.style.scss";
import DownloadedTemplatesTable from "../../Tables/DownloadedTemplatesTable.component";
const AccountHeader = (props) => {
  const buttons = [
    {
      item: "Account",
      itemLink: "/",
      itemSubLinks: [
        {
          subItem: "Profile",
          component: <ProfileForm />,
        },
        {
          subItem: "Settings",
          component: <SettingsForm />,
        },
        {
          subItem: "Payments",
          component: <PaymentsForm />,
        },
        {
          subItem: "Credit",
          component: <CreditForm />,
        },
      ],
    },

    {
      item: "Templates",
      itemLink: "/templates",
      itemSubLinks: [
        {
          subItem: "Downloaded templates",
          component: <DownloadedTemplatesTable />,
        },
        
      ],
    },

    {
      item: "Notifictions",
      itemLink: "/inbox",
      itemSubLinks: [
        {
          subItem: "Messages",
          component: <InboxTable />,
        },
      ],
    },
    {
      item: "Favorites",
      itemLink: "/favorites",
      itemSubLinks: [
        {
          subItem: "List",
          component: <Favorites />,
        },
      ],
    },
  ];
  const [primary, setPrimary] = useState(0);
  const path = useLocation().pathname.split("/");
  const [subItems, setSubItems] = useState(buttons[0].itemSubLinks);
  const [itemLink, setItemLink] = useState(buttons[0].itemLink);
  const loadItems = (i) => {
    console.log(path);

    setSubItems(buttons[i].itemSubLinks);
    setItemLink(buttons[i].itemLink);
  };
  useEffect(() => {
    buttons.map((item, index) =>
      "/" + path[2] === item.itemLink ? loadItems(index) : null
    );
  }, []);

  return (
    <>
      <Container fluid className="px-10">
        <div className="row my-3">
          <div className="col-12 d-flex justify-content-center relative">
            <img src={avatar} className="img rounded-pill" />
            <form className="editImageForm">
              <label htmlFor="imageFile">
                <input
                  className="form-control"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  id="imageFile"
                  name="imageFile"
                />
                <BiEdit size={30}></BiEdit>
              </label>
            </form>
          </div>
          <div className="col-12 d-flex flex-column align-items-center">
            <p className="name mb-0 fw-bold">Marwan Zyadat</p>
            <p className="email fs-6">marwan@nejmy.com</p>
          </div>
          <div className="col-12  d-flex justify-content-center">
            <ul className="text-muted list-group list-group-horizontal-md list-unstyled">
              <li className="mx-2">
                <IoLocationOutline></IoLocationOutline> Amman, Jordan (+02:00
                UTC)
              </li>
              <li className="mx-2">
                <BiWorld></BiWorld> Arabic, English From Amman, Jordan
              </li>
            </ul>
          </div>
        </div>
        <div className="row border rounded py-2 mt-1">
          <div className="col-md-4 col-sm-12 d-flex justify-content-md-start justify-content-center">
            <span className="fw-bold fs-5"> 0 / Templates</span>
          </div>
          <div className="col-md-4 col-sm-12  d-flex justify-content-md-center justify-content-center">
            <span className="fw-bold fs-5 primary"> $0.0 / credit</span>
          </div>
          <div className="col-md-4 col-sm-12  d-flex justify-content-md-end justify-content-center">
            <span className="fw-bold fs-5"> 0 / Downloads</span>
          </div>
        </div>
        <div className="row bg-gray rounded my-2 py-3 border justify-content-center">
          <p className=" text-center mb-0 fw-bold">
            <RiRadioButtonFill className="success me-1" size={20}></RiRadioButtonFill> Status - Active
          </p>
        </div>
        <div className="row pt-2">
          <div className="col-lg-8 col-md-12 d-md-flex justify-md-center align-items-md-center">
            {buttons.map((item, index) => (
              <CustomButton
                variant={"/" + path[2] === item.itemLink ? "primary white" : "empty"}
                as={Link}
                to={
                  "/account" + item.itemLink
                  //   "/account" + item.itemLink + item.itemSubLinks[0].subItemLink
                }
                key={index}
                classes="mb-sm-3  mb-0  w-25 w-sm-100 outline-gray  rounded mx-2 fw-bold"
                value={item.item}
                handleClick={() => {
                  loadItems(index);
                  setPrimary(0);
                  props.onChange();
                }}
              ></CustomButton>
            ))}
          </div>
          <div className="col-lg-2 col-sm-12 d-flex align-items-center justify-content-lg-end justify-content-center text-muted my-sm-3">
            <span>
              {" "}
              Not verified <BiEdit></BiEdit>{" "}
            </span>
          </div>
          <div className="col-lg-2 col-sm-12 d-flex justify-md-center align-items-center">
            {/* <div className=''> */}
            <BsFacebook className="mx-2 primary" size={30}></BsFacebook>
            <BsInstagram className="mx-2 primary" size={30}></BsInstagram>
            <AiFillTwitterCircle
              className="mx-2 primary"
              size={30}
            ></AiFillTwitterCircle>

            {/* </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 d-flex justify-content-start align-items-center my-sm-3 flex-wrap">
            {subItems.map((item, index) => (
              <Button
                variant="empty"
                className={primary === index ? "primary fw-bold" : "fw-bold"}
                onClick={(e) => {
                  props.onChange(item.component);
                  setPrimary(index);
                }}
              >
                {item.subItem}
              </Button>
            ))}
          </div>
          <div className="col-lg-4 col-md-12 d-flex justify-content-end align-items-center pt-md-3">
            <Link to="#" className="tabLink text-muted">
              {" "}
              copy profile link <FiCopy></FiCopy>{" "}
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AccountHeader;
