import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';


import "./Categories.style.scss"
const Categories = () => {
    const categories = [{
        category: "funding",
        numExpert: 20,
        categoryImage: "https://via.placeholder.com/150"
    }, {
        category: "Digital Marketing",
        numExpert: 20,
        categoryImage: "https://via.placeholder.com/150"
    }, {
        category: "Green energy",
        numExpert: 20,
        categoryImage: "https://via.placeholder.com/150"
    }, {
        category: "Acounting",
        numExpert: 20,
        categoryImage: "https://via.placeholder.com/150"
    }, {
        category: "Education",
        numExpert: 20,
        categoryImage: "https://via.placeholder.com/150"
    }, {
        category: "Security",
        numExpert: 20,
        categoryImage: "https://via.placeholder.com/150"
    }
    ]
    return (

        <>
            <div className="categories mb-5">
                <Container >
                    <Stack className="col-md-5 mx-auto text-center mb-5">
                        <h2 className="mt-5 mb-4">
                            Nejmy Popular Experts
                        </h2>
                        <p className="h3 fw-light">
                            Contact expert to get the best solutions
                        </p>
                    </Stack>
                    <Row className="gap-4 justify-content-center">
                        {
                            categories.map((category, idx) => (
                                <Col key={idx} xs={12} md={3} style={{ backgroundImage: `url(${category.categoryImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <div className="category d-flex flex-column">
                                        <p className="mt-auto d-block">{category.numExpert} experts</p>
                                        <h4 className="d-inline-block">{category.category}</h4>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};


export default Categories;
