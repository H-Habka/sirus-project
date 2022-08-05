import { React, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import Card from "../Card/Card.component";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./CCarousel.style.scss";
import { useMediaQuery } from "react-responsive";
import Image from "../../assets/img/slick.jpg";
import FileCard from "../Card/FileCard.component";
import { fetchAllTemplatesInit } from "../../redux/templates/templates-actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"
import { allTemplates } from '../../redux/templates/templates-selectors'

const CCarsousel = ({ fetchAllTemplatesInit, allTemplates }) => {


  useEffect(() => {
    fetchAllTemplatesInit(10, 1)
  }, [])

  // const carouselItems = [
  //   {
  //     title:
  //       "Video Marketing for Small Business Owners - a Specific Strategy Explained",
  //     description: "Montina Young, Founder & CEO",
  //     image: "https://via.placeholder.com/100",
  //     price: "20",
  //     currency: "$",
  //     priceTime: "per hour",
  //   },
  //   {
  //     title:
  //       "Video Marketing for Small Business Owners - a Specific Strategy Explained",
  //     description: "Montina Young, Founder & CEO",
  //     image: "https://via.placeholder.com/100",
  //     price: "20",
  //     currency: "$",
  //     priceTime: "per hour",
  //   },
  //   {
  //     title:
  //       "Video Marketing for Small Business Owners - a Specific Strategy Explained",
  //     description: "Montina Young, Founder & CEO",
  //     image: "https://via.placeholder.com/100",
  //     price: "20",
  //     currency: "$",
  //     priceTime: "per hour",
  //   },
  //   {
  //     title:
  //       "Video Marketing for Small Business Owners - a Specific Strategy Explained",
  //     description: "Montina Young, Founder & CEO",
  //     image: "https://via.placeholder.com/100",
  //     price: "20",
  //     currency: "$",
  //     priceTime: "per hour",
  //   },
  // ];
  // const xxl =  useMediaQuery({ query: '(min-width: 1400px)' })
  const xl = useMediaQuery({ query: "(min-width: 1200px)" });
  const lg = useMediaQuery({ query: "(min-width: 992px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const sm = useMediaQuery({ query: "(min-width: 576px)" });
  const items = xl ? 5 : lg ? 4 : md ? 3 : sm ? 1 : 1;
  return (
    <>
      <div id="carousel" className="carousel row">
        <div className="row">
          <Stack className="col-md-8 mx-auto text-center mt-5">
            <h2 className="mt-5 mb-4 fw-bold fs-1">
              Featured business templates on sirius
            </h2>
          </Stack>
        </div>
        <OwlCarousel
          className="owl-theme px-5 mt-5"
          lazyLoad
          center
          autoplay
          autoplayTimeout={10500}
          autoplayHoverPause
          margin={3}
          items={`${items}`}
          loop
          nav

          navText={["Prev", "Next"]}
        >

          {
            allTemplates.map((template,idx) => (
              <FileCard
                intryId={template.intryId}
                key={idx}
                fileType= {template.fileType}
                title={template.name}
                category={template.catName}
                fileUrl={template.fileUrl}
                description={template.description}
              ></FileCard>
            ))
          }
        </OwlCarousel>
        ;
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchAllTemplatesInit: (PageSize, CurrentPage) => dispatch(fetchAllTemplatesInit(PageSize, CurrentPage))
})

const mapStateToProps = createStructuredSelector({
  allTemplates: allTemplates
})

export default connect(mapStateToProps, mapDispatchToProps)(CCarsousel)
