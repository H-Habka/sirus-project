import React, { useEffect, useState } from 'react';
import { Accordion, Button, Dropdown } from 'react-bootstrap';
import { BsPlus, BsChevronDown } from 'react-icons/bs';


import { connect } from 'react-redux';


import "./CustomFilter.style.scss"
const CustomFilter = ({ categories, filterName, setFilters, filters }) => {

    const [query, setQuery] = useState("")
    const [filterdCategories, setFilterdCategories] = useState(categories)
    const handleSearch = (e) => {
        setQuery(e.target.value)
    }


    useEffect(() => {

        if (categories)
            setFilterdCategories([...categories.filter(cat => cat.name.includes(query))])

    }, [query])


    return (
        <div>

            <div className="filter">
                <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                        {filterName}
                        <BsChevronDown className='bs-chev' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='px-3 my-md-2'>
                        <input className='rounded form-control' placeholder='search' onChange={handleSearch} />
                        <Accordion defaultActiveKey="0">

                            {
                                filterdCategories?.map((item, idx) => (
                                    <Accordion.Item eventKey={idx}>
                                        <Accordion.Header>{item.name}</Accordion.Header>
                                        <Accordion.Body >

                                            <div className="overflow-scroll subs-container">
                                                {
                                                    item?.subs?.map(sub => (
                                                        <p style={{ cursor: "pointer" }} onClick={(e) => { filters.find(item => item.id === sub.id) ? setFilters([...filters.filter(item => item?.id != sub?.id)]) : setFilters([...filters, { id: sub.id, text: sub.name, value:sub.id , type:"category" }]) }}>{sub.name}</p>
                                                    ))

                                                }
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }

                        </Accordion>

                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};


const mapStateToProps = state => ({
    categories: state.categories.data
})

export default connect(mapStateToProps)(CustomFilter);
