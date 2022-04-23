import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { BsPlus, BsChevronDown } from "react-icons/bs";
import Search from "../SearchBar/Search.component";

import "./CustomFilter.style.scss";
const CustomFilter = ({ categories, filterName, setFilters, filters }) => {
  const handleExpand = (e) => {
    const items = e.target.parentElement.querySelectorAll(".item");
    e.target.querySelector(".icon").classList.contains("rotate")
      ? e.target.querySelector(".icon").classList.remove("rotate")
      : e.target.querySelector(".icon").classList.add("rotate");
    items.forEach((item) => {
      item.classList.contains("collapsed")
        ? item.classList.remove("collapsed")
        : item.classList.add("collapsed");
    });
  };

  const [searchQuery, setsearchQuery] = useState("");
  const onChangeHandler = (e) => {
    setsearchQuery(e.target.value);
  };
  return (
    <div className="filter">
      <div>
        <Dropdown className="border rounded">
          <Dropdown.Toggle variant="white" id="dropdown-basic">
            <span className="fw-bold me-3"> {filterName} </span>
            
            <BsChevronDown className="bs-chev" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="search-wrapper">
              <Search
                placeholder={"Search"}
                onChange={onChangeHandler}
              ></Search>
            </div>
            {categories.map((cat, idx) => (
              <div key={idx} className="category-wrapper">
                <div className="title-wrapper" onClick={handleExpand}>
                  <h6>{cat.name}</h6> <BsPlus className="icon"></BsPlus>
                </div>
                {cat.items
                  .filter((item) => {
                    return item.includes(searchQuery);
                  })
                  .map((item, idx) => (
                    <div key={idx} className="item collapsed">
                      <input
                        type="checkbox"
                        checked={
                          filters.find((filter) => filter.label === item)
                            ? true
                            : false
                        }
                        onClick={() => {
                          console.log(setFilters);
                          let filter = {
                            cat: "catergories",
                            label: item,
                            value: item,
                          };

                          let idx = filters.findIndex((filter) => {
                            return filter.cat === "catergories";
                          });

                          if (idx >= 0) {
                            filters[idx] = { ...filter, cat: "catergories" };
                            setFilters([...filters]);
                          } else {
                            setFilters([
                              ...filters,
                              { ...filter, cat: "catergories" },
                            ]);
                          }
                        }}
                      />
                      <p>{item}</p>
                    </div>
                  ))}
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default CustomFilter;
