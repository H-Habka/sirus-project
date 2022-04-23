import React from 'react';
import avatar from '../../../assets/img/avatar.jpg'
import './Review.style.scss';

const Review = () => {
  return(
      <>
        <div className="row review py-2">
                <div className=" col-xxl-2 col-lg-3 col-md-3 col-sm-12 d-flex flex-column align-items-start">
                    <img src={avatar} className='img rounded-pill small-img' alt="img" />
                    <p className='mt-3'>
                        <span className='name fw-bold'> Martina Russo </span>
                        <br/>
                        <span className='date text-muted'> 21 Jan 2022  1 session</span>
                    </p>
                </div>
                <div className="col-xxl-10 col-lg-9 col-md-9 col-sm-12 d-flex align-items-center bg-lightBlue border review-text">
                    <p className="px-5 py-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facere, ex possimus impedit porro sequi minima esse id fuga quia ipsam eveniet corrupti at sint corporis alias unde dolores. Dicta.
                    </p>
                </div>
        </div>
      </>
  );
};

export default Review;
