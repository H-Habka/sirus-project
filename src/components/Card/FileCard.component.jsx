import React from "react";
import { Button } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import "./FileCard.style.scss";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { RiFileExcel2Line, RiFileWord2Line } from "react-icons/ri";
const FileCard = ({ fileType, title, category, fileUrl, description }) => {


  return (
    <>
      <div className="card file-card">
        <div className="card-header">
          <div className="title">
            <h4 className="fw-bold primary">{title}</h4>
          </div>
          <div className="tringle"></div>
        </div>
        <div className="card-body">
          <p className="card-text fw-bold pt-2">
            {description}
          </p>
        </div>
        <div className="col-12 d-flex justify-content-between px-1 pb-3">
          <div className="col-6">
            <div className="file-icons">


              {
                fileType.map(item => {
                  if(item.name === 'Word')return (<RiFileWord2Line className="info" size={20}></RiFileWord2Line>)
                  if(item.name === 'PDF')return (<BsFileEarmarkPdf className="danger" size={20}></BsFileEarmarkPdf>)
                  return (<RiFileExcel2Line className="success" size={20}></RiFileExcel2Line>)
                })

              // 
              // 

              }

            </div>

          </div>
          <div className="col-6 d-flex justify-content-end">
            <span className="primary small fw-600">{category}</span>

          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center py-3">
          <BsHeart size={20}></BsHeart>
          <Button element="a" href={fileUrl} className="white px-3 py-0">donwload</Button>
        </div>
      </div>
    </>
  );
};

export default FileCard;
