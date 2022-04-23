import React from "react";
import "./FilterCard.style.scss";
// import { Image } from 'react-bootstrap/Image'
import Issf from "../../assets/img/issf.png";
import CustomButton from "../Form/CustomButton.component";
import {
  BsCreditCard2Front,
  BsFillCalendarDateFill,
  BsStar,
} from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import { BiMap } from "react-icons/bi";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { IoVideocam } from "react-icons/io5";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { RiFileExcel2Line , RiFileWord2Line} from "react-icons/ri";
const FilterCard = ({ result, title }) => {
  console.log(title);
  return (
    <>
      <div className="row filter_card mt-4 rounded pt-2 mx-0 ">
        {title ? <h2 className="fw-bold mt-2 ms-2 mb-5 pt-3"> {title} </h2> : <></> }
        <div className="col-lg-9 col-12 data pt-3">
          <div className="col-12 col-md-4 col-lg-2 image">
            <img src={Issf} alt="Issf" className="img-thumbnail" />
          </div>
          <div className="col-12 col-md-8 col-lg-10 profile_data">
            <h6 className="fw-bold my-0 text-left" >
              The importance of market research for startups{" "}
            </h6>
            <p className="detailes p-0 text-muted mb-0">
              Entrepreneur Zaid Nasser, CEO of Media Scope, talks about the
              importance of market research for startups and determining the
              target market and others.
            </p>
            <div className="col-12 profile_icons">
              <IoVideocam className="info" size={20}></IoVideocam>
              <BsFileEarmarkPdf className="danger" size={20}></BsFileEarmarkPdf>
              <RiFileExcel2Line className="success" size={20}></RiFileExcel2Line>
              <RiFileWord2Line className="info" size={20}></RiFileWord2Line>
            </div>
          </div>
          <div className="col-12 d-md-flex flex-wrap left-btns my-5">
            <CustomButton
              variant="light"
              classes="rounded-btn mx-2 outline-gray py-1 success"
              value="Starting a Business"
            />
            <CustomButton
              variant="empty"
              classes="rounded-btn mx-2 outline-gray py-1 success"
              value="Market Research"
            />
            <CustomButton
              variant="empty"
              classes="rounded-btn mx-2 outline-gray py-1 success"
              value="Arabic"
            />
            <CustomButton
              variant="empty"
              classes="rounded-btn mx-2 outline-gray py-1 success"
              value="English"
            />
          </div>
        </div>
        <div className="col-lg-3 col-12 buttons pt-3 ps-0 ">
          <div className="col-12">
            <CustomButton
              variant="light"
              classes=" w-100 rounded-btn outline-gray  my-1"
              value="Download"
              locked="true"
            />
          </div>
          <div className="col-12">
            <CustomButton classes="rounded-btn my-1 w-100" value="Watch" />
          </div>
          <div className="col-12">
            <CustomButton
              variant="light"
              classes=" w-100 rounded-btn outline-gray my-1 success"
              value="View"
            />
          </div>
          <div className="col-12">
            <CustomButton
              variant="light"
              classes=" w-100 rounded-btn outline-gray  my-1 danger"
              value="Delete"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
