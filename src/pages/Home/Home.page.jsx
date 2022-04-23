import React from 'react';
import CCarsousel from '../../components/Carousel/CCarousel.component';
import Categories from '../../components/Categories/Categories.component';
import ContentSection from '../../components/ContentSection/ContentSection.component';
import Hero from '../../components/Hero/Hero.component';
import SlickSlider from '../../components/slider/SlickSlider.component';


const Home = () => {
    return (
        <>
            <main>
                <Hero></Hero>
                <SlickSlider> </SlickSlider>
                <ContentSection></ContentSection>
                <CCarsousel></CCarsousel>
                <div className="row bg-primary mt-5">
                    <div className="col-12 text-center white py-4 d-flex justify-content-center">
                        <h2>
                        Quickly & easily create any business document!
                        </h2>
                        <button className='btn btn-primary border ms-5 white'> Get started free </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
