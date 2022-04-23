import React from 'react';
import Container from 'react-bootstrap/Container'
import FilterCard from '../Card/FilterCard.component'

const Favorites = () => {
    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-12">
                        {/* <h2 className='fw-bold'> </h2>  */}
                        <FilterCard title="Favorite templates" />
                        <FilterCard />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Favorites;
