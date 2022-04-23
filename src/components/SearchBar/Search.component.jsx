import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

import "./Search.style.scss"
const Search = ({ onChange, placeholder }) => {
    return (<>
        <Form>
            <InputGroup className="mb-3 search-group">
                <Button variant="outline-secondary" id="button-addon1">
                    <BsSearch></BsSearch>
                </Button>
                <FormControl
                    onChange={onChange ? onChange : null}
                    type="search"
                    placeholder={placeholder}
                    aria-label="Search for Advice"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Form>
    </>);
};

export default Search;

