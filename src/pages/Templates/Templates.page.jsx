import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/img/template.png";
import "./Templates.style.scss";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { RiFileExcel2Line, RiFileWord2Line } from "react-icons/ri";
import CustomButton from "../../components/Form/CustomButton.component";
import { useParams } from "react-router-dom";
import api from "../../api";
const Templates = () => {
  const [template, setTemplate] = useState(null)

  const {templateId} = useParams()
  
  console.log(templateId)
  const getTemplateById = (id) => {
    api.sirius.templates.getOneById(id).then(res => {
      setTemplate(res.data)
    }).catch(err => {
      console.log({err})
    })
  }

  useEffect(() => {
    getTemplateById(templateId)
  },[])



  return (
    <>
      <div className="container-fluid py-5 px-2 px-lg-5 template">
        <div className="row px-1 px-md-5">
          <div className="col-lg-5 col-12 mb-5">
            <div className="template-image d-flex justify-content-center">
              <img src={Image} className="img w-100" />
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="row">
              <div className="col-12 d-flex justify-content-between">
                <h3 className="primary">{template?.name}</h3>
                <span className="text-muted ">
                  {" "}
                  share <AiOutlineShareAlt size={20}></AiOutlineShareAlt>{" "}
                </span>
              </div>
              <div className="col-12 border-bottom">
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/account/templates"> Templates </Link>
                    </li>
                    <li>
                      <Link to=""> Category :  {template.catName} </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 col-sm-12 py-3 border-bottom d-flex align-items-center flex-column flex-md-row">
                <span className="me-3">
                  File type
                  {/* <BsFileEarmarkPdf
                    className="danger mx-1"
                    size={20}
                  ></BsFileEarmarkPdf>
                  <RiFileExcel2Line
                    className="success mx-1"
                    size={20}
                  ></RiFileExcel2Line>
                  <RiFileWord2Line
                    className="info mx-1"
                    size={20}
                  ></RiFileWord2Line> */}
                  {
                template?.fileType?.map(item => {
                  if(item.name === 'Word')return (<RiFileWord2Line className="info" size={20}></RiFileWord2Line>)
                  if(item.name === 'PDF')return (<BsFileEarmarkPdf className="danger" size={20}></BsFileEarmarkPdf>)
                  return (<RiFileExcel2Line className="success" size={20}></RiFileExcel2Line>)
                })

              // 
              // 

              }
                </span>

                <span className="me-3">File size {(template?.size)/1000}Kb</span>
                <span className="me-3">Pages {template?.pages}</span>
              </div>

              <div className="col-md-5 col-sm-12 py-3 d-flex flex-column">
                <CustomButton
                  variant="success"
                  classes="w-100 rounded-btn outline-gray white  my-1"
                  value="Download"
                  locked= {false}
                />
                <CustomButton
                  variant="light"
                  classes=" w-100 rounded-btn outline-gray success fw-600  my-1"
                  value="Save to favorites"
                />
              </div>
            </div>

            <div className="row pt-3">
              <div className="col-md-8 col-sm-12">
                <h4 className="fw-bold py-3">Description</h4>
                <p>
                  {template?.description}
                </p>
              </div>
              <div className="col-12 d-flex flex-wrap flex-column flex-lg-row" >
                <CustomButton
                  variant="empty"
                  classes="rounded-btn mx-2 outline-gray py-1 mb-2 success"
                  value="Starting a Business"
                />
                <CustomButton
                  variant="empty"
                  classes="rounded-btn mx-2 outline-gray py-1 mb-2 success"
                  value="Market Research"
                />
                <CustomButton
                  variant="empty"
                  classes="rounded-btn mx-2 outline-gray py-1 mb-2 success"
                  value="English"
                />
                <CustomButton
                  variant="empty"
                  classes="rounded-btn mx-2 outline-gray py-1 mb-2 success"
                  value="English"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
