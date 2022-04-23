import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card.component";
import Image from "../../assets/img/slick.jpg";
import "./SlickSlider.style.scss";
const SlickSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    labtop: {
      breakpoint: { max: 1023, min: 992 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 577 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Container fluid className="">
        <div className="row my-5">
          <div className="col-12 text-center">
            <h2 className="fw-bold fs-1">
              Featured business interviews on sirius
            </h2>
          </div>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          
          autoPlaySpeed={10000}
          keyBoardControl={true}
          autoPlay={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          <Card
            image={Image}
            title="Devotion Dresses "
            description="Online marketplace offering premium
            European-made bridal dresses"
            location="Syria"
            category="Fashion"
            catDescription="Uniquely tailored wedding dress delivery"
            footerClass="primary"
          ></Card>
          <Card
            image={Image}
            title="Windpact "
            description="We provide crucial software and
            technologies that improve product
            development"
            location="Syria"
            category="Technology"
            catDescription="Partners with NFL and Department Of
            Defense "
            footerClass="primary"
          ></Card>
          <Card
            image={Image}
            title="Windpact "
            description="We provide crucial software and
            technologies that improve product
            development"
            location="Syria"
            category="Technology"
            catDescription="Partners with NFL and Department Of
            Defense "
            footerClass="primary"
          ></Card>
          <Card
            image={Image}
            title="Windpact "
            description="We provide crucial software and
            technologies that improve product
            development"
            location="Syria"
            category="Technology"
            catDescription="Partners with NFL and Department Of
            Defense "
            footerClass="primary"
          ></Card>
          <Card
            image={Image}
            title="Windpact "
            description="We provide crucial software and
            technologies that improve product
            development"
            location="Syria"
            category="Technology"
            catDescription="Partners with NFL and Department Of
            Defense "
            footerClass="primary"
          ></Card>
          <Card
            image={Image}
            title="Windpact "
            description="We provide crucial software and
            technologies that improve product
            development"
            location="Syria"
            category="Technology"
            catDescription="Partners with NFL and Department Of
            Defense "
            footerClass="primary"
          ></Card>
          <Card
            image={Image}
            title="Windpact "
            description="We provide crucial software and
            technologies that improve product
            development"
            location="Syria"
            category="Technology"
            catDescription="Partners with NFL and Department Of
            Defense "
            footerClass="primary"
          ></Card>
          <Card
            image={Image}
            title="Windpact "
            description="We provide crucial software and
            technologies that improve product
            development"
            location="Syria"
            category="Technology"
            catDescription="Partners with NFL and Department Of
            Defense "
            footerClass="primary"
          ></Card>
        </Carousel>
      </Container>
    </>
  );
};

export default SlickSlider;
